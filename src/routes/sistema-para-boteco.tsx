import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Utensils,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Wifi,
  WifiOff,
  Truck,
  BarChart3,
  Smartphone,
  ShoppingBag,
  Headset,
  Star,
  Package,
  CreditCard,
  ChefHat,
  TableProperties,
  Zap,
  Clock,
  ShieldCheck,
  Wine,
  Beer,
  Layers,
  HelpCircle,
  Coins,
  ArrowUpRight,
  Play,
  X,
} from "lucide-react";
import { DominusFoodHeader } from "@/components/DominusFoodHeader";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import { FullFunnelBookingModal } from "@/components/FullFunnelBookingModal";

import foodLogo from "@/assets/food-logo.png";
import dominusIaLogo from "@/assets/Dominus IA.png";
import dominusIaProductImage from "@/assets/Dominus IA.avif";
import dominusFoodEcosystemImage from "@/assets/Dominus-Food-1.avif";
import dominusFoodFeaturesImage from "@/assets/Funcionalidade Food.avif";
import tableManagementImage from "@/assets/Tela de mesas.avif";
import kitchenDisplayImage from "@/assets/KDS.avif";
import pointOfSaleImage from "@/assets/PDV Rápido.png";
import inventoryImage from "@/assets/Controle de estoque.avif";
import dashboardImage from "@/assets/Dashboard.avif";
import bitfoodImage from "@/assets/BITFOOD COMPUTADOR.png";

export const Route = createFileRoute("/sistema-para-boteco")({
  head: () => ({
    meta: [
      { title: "Dominus Food — Sistema de Gestão para Botecos e Bares | Waybit" },
      {
        name: "description",
        content:
          "Seu boteco cheio. Sua gestão sob controle. Comanda eletrônica, mesas, cozinha, PDV offline, estoque, delivery e relatórios integrados no Dominus Food.",
      },
      {
        property: "og:title",
        content: "Dominus Food — Sistema de Gestão para Botecos | Waybit",
      },
      {
        property: "og:description",
        content:
          "Comandas, mesas, cozinha, caixa, estoque e delivery conectados. Tudo que o seu boteco precisa para sair do papel e ter controle real da operação.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DominusFoodPage,
});

// ─── DORES DO GESTOR DE BOTECO (Seção 3 da documentação) ─────────────────────
const dores = [
  {
    id: "dor-comandas",
    icon: ClipboardList,
    titulo: "Comandas confusas",
    problema: "Pedidos anotados no papel se perdem na correria.",
    resposta: "Comandas digitais com consumo atualizado em tempo real.",
  },
  {
    id: "dor-cozinha",
    icon: ChefHat,
    titulo: "Erros na cozinha",
    problema: "Pedidos desencontrados atrasam o atendimento.",
    resposta: "Envio direto dos pedidos para a cozinha pelo KDS.",
  },
  {
    id: "dor-operacao",
    icon: WifiOff,
    titulo: "Operação parada",
    problema: "Internet instável ou PDV lento atrapalham as vendas.",
    resposta: "PDV ágil com recursos para operar offline.",
    observacao: "A disponibilidade offline depende da configuração técnica homologada.",
  },
  {
    id: "dor-estoque",
    icon: Package,
    titulo: "Estoque descontrolado",
    problema: "Faltam produtos e aumentam os desperdícios.",
    resposta: "Controle de insumos e alertas de reposição.",
  },
  {
    id: "dor-gestao",
    icon: BarChart3,
    titulo: "Falta de visão financeira",
    problema: "É difícil acompanhar custos, caixa e resultados.",
    resposta: "Relatórios e indicadores para apoiar a gestão.",
  },
];

// ─── TRÊS PILARES ESTRATÉGICOS (Seção 5 da documentação) ─────────────────────
const pilares = [
  {
    id: "pilar-atendimento",
    icon: ChefHat,
    numero: "01",
    titulo: "Atendimento Organizado",
    descricao: "Comandas no celular, cozinha integrada e pedidos sempre atualizados.",
  },
  {
    id: "pilar-controle",
    icon: ClipboardList,
    numero: "02",
    titulo: "Controle do Negócio",
    descricao:
      "Acompanhe estoque, caixa e finanças em tempo real e tome decisões com mais segurança.",
  },
  {
    id: "pilar-operacao",
    icon: Zap,
    numero: "03",
    titulo: "Operação Conectada",
    descricao: "Delivery, pagamentos e integrações em um só sistema, sem complicação.",
  },
];

// ─── FUNCIONALIDADES POR ROTINA (Seção 4 da documentação) ─────────────────────
const funcionalidades = [
  {
    id: "func-mesas",
    icon: TableProperties,
    badge: "Salão & Balcão",
    image: tableManagementImage,
    titulo: "Mesas e Comandas Digitais",
    descricao:
      "Organize o atendimento com mapa de mesas interativo e comandas eletrônicas ágeis. Seu garçom atende mais mesas com menos passos.",
  },
  {
    id: "func-cozinha",
    icon: ChefHat,
    badge: "Produção",
    image: kitchenDisplayImage,
    titulo: "Comunicação Salão–Cozinha (KDS)",
    descricao:
      "Elimine a gritaria e a troca de papéis engordurados. Os pedidos lançados chegam direto na tela da cozinha ou impressora térmica.",
  },
  {
    id: "func-caixa",
    icon: CreditCard,
    badge: "Frente de Caixa",
    image: pointOfSaleImage,
    titulo: "PDV Rápido e Operação Offline",
    descricao:
      "Pensado para a rotina acelerada do boteco. Registra vendas com rapidez, integra com maquininhas e não para mesmo se a internet cair.",
    nota: "* O funcionamento offline e a sincronização dependem da configuração técnica instalada.",
  },
  {
    id: "func-estoque",
    icon: Package,
    badge: "Suprimentos",
    image: inventoryImage,
    titulo: "Estoque Inteligente & Dominus IA",
    descricao:
      "Monitore entradas, saídas e estoque mínimo. Crie combos promocionais de cervejas e petiscos com baixa automática por ficha técnica.",
    nota: "* Dominus IA é uma solução avançada de IA; consulte condições e disponibilidade por plano.",
  },
  {
    id: "func-delivery",
    icon: Truck,
    badge: "Canais Digitais",
    image: bitfoodImage,
    titulo: "Delivery Unificado: iFood & Bitfood",
    descricao:
      "Venda delivery sem bagunça de telas. Centralize pedidos do iFood e do seu cardápio próprio Bitfood no mesmo sistema.",
    nota: "* Condições de integração e planos de parceiros devem ser confirmados com a equipe comercial.",
  },
  {
    id: "func-relatorios",
    icon: BarChart3,
    badge: "Gestão Estratégica",
    image: dashboardImage,
    titulo: "Relatórios e Indicadores em Tempo Real",
    descricao:
      "Tenha clareza total dos números da sua empresa. Acompanhe vendas, faturamento por turno e produtos mais lucrativos pelo celular ou PC.",
  },
];

// ─── PLANOS FOOD REAIS DO SISTEMA (Alinhados com /planos?segmento=food) ──────
const planosFood = [
  {
    id: "fit-food",
    nome: "FIT FOOD",
    mensal: "199,00",
    anual: "165,00",
    faturamento: "Faturamento até 60 mil/mês",
    pdvs: "2 PDVs",
    descricao: "Ideal para botecos e petiscarias em fase de estruturação e saída do papel.",
    destaques: [
      "Gestão de Vendas e Mesas",
      "Gestão de Estoque Completo",
      "NFC-e e NF-e Ilimitados",
      "PDV Offline Homologado",
      "Ficha Técnica e Combos",
      "Suporte via Chat, E-mail e WhatsApp",
    ],
    popular: false,
  },
  {
    id: "basic-food",
    nome: "BASIC FOOD",
    mensal: "299,00",
    anual: "249,00",
    faturamento: "Faturamento de 60 a 120 mil/mês",
    pdvs: "PDVs Ilimitados",
    descricao: "O plano mais equilibrado para botecos movimentados com salão e balcão cheios.",
    destaques: [
      "Tudo do FIT FOOD",
      "PDVs e Caixas Ilimitados",
      "Comanda Eletrônica Mobile",
      "Integração com iFood*",
      "Dashboard Online em Tempo Real",
      "Treinamento ao Vivo da Equipe",
    ],
    popular: true,
  },
  {
    id: "full-food",
    nome: "FULL FOOD",
    mensal: "449,00",
    anual: "374,00",
    faturamento: "Faturamento de 120 a 200 mil/mês",
    pdvs: "PDVs Ilimitados",
    descricao: "Gestão robusta para estabelecimentos com alto giro, cozinha rápida e delivery.",
    destaques: [
      "Tudo do BASIC FOOD",
      "Integração Completa Salão-Cozinha (KDS)",
      "Gestão Financeira e Conciliação OFX",
      "Controle de Inventários Avançado",
      "Suporte Prioritário Waybit",
      "Usuários Ilimitados",
    ],
    popular: false,
  },
  {
    id: "vip-food",
    nome: "VIP FOOD",
    mensal: "Consulte",
    anual: "Consulte",
    faturamento: "Faturamento acima de 200 mil/mês",
    pdvs: "PDVs Ilimitados",
    descricao: "Solução sob medida para grandes bares, franquias ou redes de alimentação.",
    destaques: [
      "Tudo do FULL FOOD",
      "Acompanhamento Executivo Exclusivo",
      "Módulo Dominus IA para Estoque e CMV*",
      "Multifilial Centralizada",
      "SLA de Atendimento Dedicado",
      "Implantação Personalizada",
    ],
    popular: false,
  },
];

// ─── PROVA SOCIAL E CLIENTES (Seção 6 da documentação) ───────────────────────
const foodVideoCases = [
  {
    id: "casa-da-praia",
    cliente: "Casa da Praia",
    videoId: "dxQTaUwfZWQ",
    texto: "O Dominus tem facilitado muito a nossa vida no dia a dia, e graças a Deus hoje a gente conta com a praticidade do totem.",
  },
  {
    id: "p22",
    cliente: "P22",
    videoId: "He5moVQ96GE",
    texto: "Depois que começamos a usar o sistema ficou mil maravilhas, pois qualquer informação importante a gente tem prontamente.",
  },
  {
    id: "casa-do-surf",
    cliente: "Casa do Surf",
    videoId: "cZRXF6gSmCg",
    texto: "O sistema para a gente foi uma verdadeira mão na roda na operação, sinceramente eu não sei mais como trabalhar sem ele.",
  },
];

// Comparativo comercial baseado nos diferenciais documentados para o Dominus Food.
const comparativoSistemas = {
  outros: [
    {
      titulo: "Delivery em outra tela",
      descricao: "Sem integração, pedidos podem exigir lançamento manual e aumentar o retrabalho.",
    },
    {
      titulo: "Estoque com pouca visibilidade",
      descricao: "Entradas, saídas e reposições ficam mais difíceis de acompanhar.",
    },
    {
      titulo: "Comandas no papel",
      descricao: "Pedidos podem se perder ou chegar incompletos no movimento do salão.",
    },
    {
      titulo: "Informações espalhadas",
      descricao: "Caixa, operação e resultados precisam ser conferidos em lugares diferentes.",
    },
    {
      titulo: "PDV pouco flexível",
      descricao: "Um fluxo lento no caixa pode atrapalhar o atendimento nos horários de pico.",
    },
    {
      titulo: "Salão e cozinha desconectados",
      descricao: "A equipe depende de repasses manuais para encaminhar os pedidos.",
    },
  ],
  dominus: [
    {
      titulo: "Delivery centralizado",
      descricao:
        "Integração com iFood e Bitfood para concentrar os pedidos, conforme a configuração contratada.",
    },
    {
      titulo: "Estoque acompanhado",
      descricao:
        "Controle de entradas, saídas e consumo, com alertas de reposição e gestão de combos.",
    },
    {
      titulo: "Comandas digitais",
      descricao: "Registro dos pedidos pelo garçom e acompanhamento do consumo por mesa.",
    },
    {
      titulo: "Gestão com mais clareza",
      descricao: "Relatórios detalhados e informações operacionais e financeiras em tempo real.",
    },
    {
      titulo: "PDV pensado para a rotina",
      descricao: "Fluxo de venda apresentado como rápido e intuitivo, integrado ao caixa.",
    },
    {
      titulo: "Operação conectada",
      descricao: "Pedidos do salão podem ser encaminhados à cozinha em um mesmo fluxo.",
    },
  ],
};

// ─── FAQ COMPLETO (Seção 8 da documentação) ──────────────────────────────────
const faqs = [
  {
    id: "faq-1",
    pergunta: "Como funciona o preço dos planos Dominus Food?",
    resposta:
      "O plano é definido pelo faturamento mensal do estabelecimento, e não pela escolha de uma categoria. Conforme o faturamento muda de faixa, o plano acompanha essa evolução. Existem opções de pagamento mensal e anual.",
  },
  {
    id: "faq-2",
    pergunta: "2. O sistema permite controlar mesas e comandas?",
    resposta:
      "Sim. A página oficial apresenta mapa visual de mesas e balcão, além de comanda eletrônica no aplicativo do garçom para registrar pedidos em tempo real, acompanhar o consumo acumulado e fechar a conta com divisão facilitada por pessoa.",
  },
  {
    id: "faq-3",
    pergunta: "3. Os pedidos podem ser enviados para a cozinha?",
    resposta:
      "Segundo a Waybit, os pedidos registrados pelo garçom no smartphone ou tablet podem ser encaminhados automaticamente para a tela da cozinha (KDS) ou para impressoras térmicas, conectando o atendimento diretamente à preparação sem necessidade de comandas em papel.",
  },
  {
    id: "faq-4",
    pergunta: "4. Como o Dominus Food ajuda no controle de estoque?",
    resposta:
      "O Dominus Food divulga acompanhamento de estoque com baixa automática por ficha técnica, criação de combos de petiscos e bebidas, e alertas inteligentes de reposição mínima, oferecendo visibilidade para evitar compras no improviso ou falta de insumos no meio do expediente.",
  },
  {
    id: "faq-5",
    pergunta: "O Dominus Food funciona quando a internet cai?",
    resposta:
      "O PDV possui recursos para registrar vendas offline em configurações técnicas homologadas. A disponibilidade depende da instalação e dos recursos utilizados.",
  },
  {
    id: "faq-6",
    pergunta: "6. O Dominus Food se integra ao iFood?",
    resposta:
      "A página oficial anuncia integração com o iFood para recebimento centralizado de pedidos e também disponibiliza a plataforma própria Bitfood para cardápio digital sem taxas de intermediação. As condições e planos de integração devem ser confirmados com a equipe comercial.",
  },
  {
    id: "faq-7",
    pergunta: "7. O sistema se conecta a maquininhas de cartão?",
    resposta:
      "A Waybit informa integração com os principais adquirentes e equipamentos do mercado, incluindo Stone, Rede, Getnet, Cielo e PagSeguro, entre outros. Isso permite fechar a conta na maquininha com baixa automática no sistema, sem digitação dupla de valores.",
  },
  {
    id: "faq-8",
    pergunta: "8. Posso acompanhar caixa e relatórios?",
    resposta:
      "Sim. O Dominus Food apresenta relatórios gerenciais detalhados, controle de entradas e saídas de caixa, curva de vendas e visualização de faturamento em tempo real, permitindo ao gestor acompanhar os resultados da empresa de onde estiver.",
  },
  {
    id: "faq-9",
    pergunta: "O Dominus Food integra com iFood e maquininhas de cartão?",
    resposta:
      "O sistema oferece integrações com plataformas de delivery, incluindo iFood e Bitfood, além de soluções de pagamento TEF. A disponibilidade de cada integração depende das condições e configurações homologadas.",
  },
  {
    id: "faq-10",
    pergunta: "10. O Dominus IA está disponível para meu boteco?",
    resposta:
      "A Waybit apresenta uma solução de inteligência artificial voltada para gestão de estoque, entrada automatizada de notas fiscais, conferência de contagem, cálculo de CMV e análise de ruptura. Consulte a equipe comercial para saber a disponibilidade e as condições de contratação por plano.",
  },
  {
    id: "faq-11",
    pergunta: "Preciso comprar equipamentos específicos para usar o Dominus Food?",
    resposta:
      "O Dominus Food oferece compatibilidade com diferentes equipamentos, como computadores, celulares, tablets e impressoras térmicas. A configuração ideal depende da operação e dos dispositivos homologados.",
  },
  {
    id: "faq-12",
    pergunta: "12. Como faço para conhecer o sistema?",
    resposta:
      "O fluxo indicado é agendar uma demonstração gratuita sem compromisso. Nossa equipe apresenta as telas do sistema ao vivo, tira todas as suas dúvidas operacionais e ajuda a escolher o plano ideal para a rotina do seu boteco.",
  },
];

// Componente individual de FAQ
function FaqAccordionItem({
  pergunta,
  resposta,
  isOpen,
  onToggle,
}: {
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const safeId = pergunta.slice(0, 25).replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

  return (
    <div className="rounded-2xl border-0 border-b border-l-6 border-b-[#FC4242] border-l-[#FC4242] bg-[#f7f7f7] px-5 shadow-sm transition-colors sm:px-6">
      <button
        type="button"
        id={`faq-btn-${safeId}`}
        aria-controls={`faq-panel-${safeId}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-foreground transition-colors hover:text-[#FC4242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
      >
        <span className={`fluid-body font-bold leading-snug ${isOpen ? "text-[#FC4242]" : "text-foreground group-hover:text-[#FC4242]"}`}>
          {pergunta}
        </span>
        <div
          className={`flex shrink-0 items-center justify-center text-[#FC4242] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div
          id={`faq-panel-${safeId}`}
          role="region"
          aria-labelledby={`faq-btn-${safeId}`}
          className="flex gap-2 pb-5 pr-4 fluid-body text-muted-foreground leading-relaxed animate-in fade-in-50 duration-200"
        >
          <ArrowRight size={14} className="mt-1 shrink-0 text-[#FC4242]" aria-hidden="true" />
          <span>{resposta}</span>
        </div>
      )}
    </div>
  );
}

function DominusIaSection({ onOpenSpecialist }: {
  onOpenSpecialist: () => void;
}) {
  return (
    <section
      id="dominus-ia-food"
      className="order-3 w-full border-t border-[#549192]/20 py-14 sm:py-20 lg:py-24"
      style={{ background: "radial-gradient(ellipse 55% 45% at 15% 80%, rgba(113,198,187,0.45) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 30%, rgba(113,198,187,0.8) 0%, transparent 65%), linear-gradient(135deg, #28595B 0%, color-mix(in srgb, #28595B 70%, #71C6BB) 35%, #71C6BB 65%, #28595B 100%)" }}
    >
      <div className="landing-page-container">
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex h-full min-w-0 flex-col items-start justify-center gap-5 text-left sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <img src={dominusIaLogo} alt="Dominus IA" className="h-12 w-auto max-w-[40%] object-contain sm:h-16" />
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-[#173C3D]">Dominus IA</h2>
            </div>
            <p className="font-display fluid-h3 font-extrabold leading-snug text-white">Inteligência Artificial na gestão de estoque</p>
            <p className="fluid-body font-medium leading-relaxed text-white">
                    A Waybit desenvolveu o Dominus IA para apoiar as tarefas mais críticas do estoque:
                    leitura e entrada automatizada de notas fiscais, conferência de contagens, cálculo
                    do Custo de Mercadorias Vendidas (CMV) e análise preditiva de ruptura.
                  </p>
            <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {["Entrada ágil de NF-e de fornecedores","Análise de margem e CMV por porção","Alertas para evitar falta de insumos","Mais precisão nas compras da semana"].map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 fluid-secondary font-medium text-white">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#173C3D]" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button type="button" onClick={onOpenSpecialist} className="inline-flex min-h-12 max-w-full items-center rounded-xl bg-[#173C3D] px-6 py-3 text-left font-bold fluid-btn text-white shadow-md transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80CCC3] focus-visible:ring-offset-2">Saber mais sobre o Dominus IA</button>
            <p className="fluid-legal font-medium leading-relaxed text-white">
                    * Módulo avançado sujeito a plano e disponibilidade. Consulte a equipe comercial para saber mais.
                  </p>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <img src={dominusIaProductImage} alt="Dominus IA em notebook e smartphone" className="block h-auto w-full max-w-full object-contain" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DominusFoodPage() {
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"anual" | "mensal">("anual");
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [activeRotinaTab, setActiveRotinaTab] = useState(0);
  const [activeFoodVideo, setActiveFoodVideo] = useState<(typeof foodVideoCases)[number] | null>(null);
  const [isSuccessStoriesDesktop, setIsSuccessStoriesDesktop] = useState(false);
  const [successStoryContentHeight, setSuccessStoryContentHeight] = useState<number | null>(null);
  const successStoryContentRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Carrega o script de incorporação do Full Funnel de forma controlada sem duplicação
  useEffect(() => {
    const scriptId = "fullfunnel-form-embed-js";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://links.fullfunnel.app/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!activeFoodVideo) return;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveFoodVideo(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeFoodVideo]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const updateDesktopLayout = () => setIsSuccessStoriesDesktop(desktopMediaQuery.matches);

    updateDesktopLayout();
    desktopMediaQuery.addEventListener("change", updateDesktopLayout);

    return () => desktopMediaQuery.removeEventListener("change", updateDesktopLayout);
  }, []);

  useEffect(() => {
    if (!isSuccessStoriesDesktop) {
      setSuccessStoryContentHeight(null);
      return;
    }

    const contentElements = successStoryContentRefs.current.filter(
      (element): element is HTMLDivElement => element !== null,
    );

    if (contentElements.length === 0) return;

    let animationFrameId: number | null = null;

    const measureNaturalHeights = () => {
      const previousMinHeights = contentElements.map((element) => element.style.minHeight);

      contentElements.forEach((element) => {
        element.style.minHeight = "0px";
      });

      const tallestNaturalHeight = Math.ceil(
        Math.max(...contentElements.map((element) => element.scrollHeight)),
      );

      contentElements.forEach((element, index) => {
        element.style.minHeight = previousMinHeights[index];
      });

      setSuccessStoryContentHeight((currentHeight) =>
        currentHeight === tallestNaturalHeight ? currentHeight : tallestNaturalHeight,
      );
    };

    const scheduleMeasurement = () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(measureNaturalHeights);
    };

    const resizeObserver = new ResizeObserver(scheduleMeasurement);
    contentElements.forEach((element) => resizeObserver.observe(element));
    window.addEventListener("resize", scheduleMeasurement);
    scheduleMeasurement();

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleMeasurement);
    };
  }, [isSuccessStoriesDesktop]);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(index);
  };

  const scrollToLeadForm = () => {
    document.getElementById("inline-CXAOoyZbuAZR4FXznTAR")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="dominus-food-page flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      {/* ─── CONTÊINER UNIFICADO HEADER + HERO ─── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(72% 68% at 84% 28%, rgba(252, 66, 66, 0.34) 0%, rgba(168, 30, 35, 0.18) 38%, transparent 68%), radial-gradient(58% 62% at 10% 88%, rgba(221, 51, 55, 0.24) 0%, transparent 65%), linear-gradient(135deg, rgb(48, 9, 12) 0%, rgb(72, 16, 20) 38%, rgb(45, 9, 13) 68%, rgb(25, 5, 7) 100%)",
        }}
      >
        {/* Luzes e gradientes sutis de ambientação de boteco abrangendo Header e Hero */}
        {/* Header exclusivo para Dominus Food com fundo transparente integrado */}
        <DominusFoodHeader
          onOpenSpecialist={() => setSpecialistOpen(true)}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* ─── 1. HERO SECTION ─── */}
        <section
          id="hero-dominus-food"
          className="relative w-full pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28"
        >
          <div className="landing-page-container relative z-10">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
              {/* Lado Esquerdo: Mensagem e Ação */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Badge de posicionamento */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/10 px-4 py-1.5 mb-5 sm:mb-6">
                  <Wine size={14} className="text-[#FC4242]" aria-hidden="true" />
                  <span className="fluid-caption font-bold uppercase tracking-wider text-[#FC4242]">
                    MAIS CONTROLE PARA O SEU BOTECO
                  </span>
                </div>

                {/* Headline Oficial Dominus Food */}
                <h1 className="font-display fluid-h1 font-extrabold tracking-tight text-white leading-[1.1]">
                  <span className="block text-white">Quem está no controle:</span>
                  <span className="block text-[#FC4242]">você ou seu boteco?</span>
                </h1>

                {/* Subtítulo orientativo */}
                <p className="mt-5 sm:mt-6 fluid-body-lg text-white leading-relaxed max-w-2xl">
                  Se a correria do dia a dia decide por você, quem está realmente no comando? Chega de apagar incêndios e trabalhar sem saber para onde vai o dinheiro. Está na hora de assumir o controle do seu boteco.
                </p>
              </div>

              {/* Lado Direito: Formulário Oficial Full Funnel Dominus Food */}
              <div className="relative flex w-full flex-col items-center justify-center lg:col-span-5 lg:items-end lg:self-stretch">
                {/* Card branco com bordas de 30px e sombra externa vermelha baseada em #FC4242 */}
                <div
                  className="relative w-full max-w-[500px] rounded-[30px] overflow-hidden border-0 pt-[25px]"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 0px 10px 5px #FC4242",
                  }}
                >
                  <iframe
                    src="https://links.fullfunnel.app/widget/form/CXAOoyZbuAZR4FXznTAR"
                    style={{
                      width: "100%",
                      height: "519px",
                      border: "none",
                      display: "block",
                    }}
                    id="inline-CXAOoyZbuAZR4FXznTAR"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-activation-type="alwaysActivated"
                    data-deactivation-type="neverDeactivate"
                    data-height="519"
                    data-form-id="CXAOoyZbuAZR4FXznTAR"
                    data-layout-iframe-id="inline-CXAOoyZbuAZR4FXznTAR"
                    title="Form Pag Dominus Food - Site Waybit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="landing-page-container relative z-10 -mt-5">
            <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
              <div className="flex min-w-0 items-center justify-center lg:col-span-7 lg:pr-8">
                <img
                  src={dominusFoodEcosystemImage}
                  alt="Ecossistema Dominus Food em computadores, telas de operação e dispositivos móveis"
                  className="block h-auto w-full max-w-full object-contain"
                  decoding="async"
                />
              </div>
              <div className="flex h-full min-w-0 flex-col items-start justify-center gap-5 text-left lg:col-span-5 lg:ml-auto lg:mr-0 lg:w-full lg:max-w-[500px]">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/10 px-4 py-1.5">
                  <Wine size={14} className="shrink-0 text-[#FC4242]" aria-hidden="true" />
                  <span className="fluid-caption font-bold uppercase tracking-wider text-[#FC4242]">
                    Dominus Food • Sistema para Botecos & Bares
                  </span>
                </div>
                <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-white">
                  Conheça o Dominus Food
                </h2>
                <p className="fluid-body-lg leading-relaxed text-white">
                  <strong>Dominus Food</strong> é um sistema para botecos que ajuda você a organizar a operação, controlar os custos e identificar oportunidades para aumentar o lucro do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="flex flex-1 flex-col w-full">


        {/* ─── 3. DORES DO GESTOR DE BOTECO (Problemas x Respostas) ─── */}
        <section id="dores-dominus-food" className="w-full py-16 sm:py-20 bg-background">
          <div className="landing-page-container">
            <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
              <div
                className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <span>Os desafios do dia a dia</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                O que trava a operação do seu boteco
              </h2>
              <p className="mt-3.5 fluid-body text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Quem atende balcão e salão movimentados sabe: ferramentas improvisadas geram perdas,
                pedidos trocados e fechamento de caixa com dor de cabeça.
              </p>
            </div>

            <div
              role="region"
              aria-label="Desafios e soluções do Dominus Food"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pt-2 pb-4 [scrollbar-color:rgba(252,66,66,0.35)_rgba(252,66,66,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
              tabIndex={0}
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-4 min-[1850px]:w-full">
                {dores.map((dor) => {
                  const Icon = dor.icon;
                  return (
                    <article
                      key={dor.id}
                      className="flex min-h-[320px] w-[min(84vw,320px)] shrink-0 snap-start flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FC4242]/40 hover:shadow-md min-[1850px]:min-w-[250px] min-[1850px]:flex-1 min-[1850px]:basis-0"
                    >
                      <div
                        className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "#FC424218" }}
                      >
                        <Icon size={23} style={{ color: "#FC4242" }} aria-hidden="true" />
                      </div>

                      <h3 className="font-display fluid-h3 font-bold leading-tight text-foreground">
                        {dor.titulo}
                      </h3>
                      <p className="mt-2 fluid-secondary leading-relaxed text-muted-foreground">
                        {dor.problema}
                      </p>

                      <div className="mt-auto border-t border-border pt-4">
                        <p className="mb-1.5 flex items-center gap-1.5 fluid-caption font-bold text-[#FC4242]">
                          <CheckCircle2 size={14} className="shrink-0" aria-hidden="true" />
                          Com o Dominus Food:
                        </p>
                        <p className="fluid-secondary leading-relaxed text-foreground">
                          {dor.resposta}
                        </p>
                        {dor.observacao && (
                          <p className="mt-2 fluid-legal leading-relaxed text-muted-foreground">
                            {dor.observacao}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ─── 4. FUNCIONALIDADES DETALHADAS POR ROTINA ─── */}
        <section
          id="funcionalidades-dominus-food"
          className="order-5 w-full py-16 sm:py-24 bg-background border-t border-border"
        >
          <div className="landing-page-container">
            <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold mb-3 sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <Utensils size={13} aria-hidden="true" />
                <span>Funcionalidades do Dominus Food</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Recursos pensados para cada momento da sua rotina
              </h2>
              <p className="mt-3.5 fluid-body text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Tudo o que sua equipe precisa para operar com rapidez no atendimento e o que o
                gestor precisa para tomar decisões fundamentadas.
              </p>
            </div>

            <div
              aria-label="Funcionalidades do Dominus Food"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(252,66,66,0.35)_rgba(252,66,66,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
              role="region"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                  event.preventDefault();
                  event.currentTarget.scrollBy({
                    left: event.key === "ArrowRight" ? 320 : -320,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <div className="flex w-max gap-6 lg:grid lg:w-full lg:grid-cols-3 lg:gap-6">
                {funcionalidades.map((func) => {
                  const Icon = func.icon;
                  return (
                    <div
                      key={func.id}
                      className="flex w-[min(84vw,360px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface-subtle/40 p-0 transition-all duration-300 hover:border-[#FC4242]/40 hover:shadow-lg lg:w-auto"
                    >
                      <div className="relative aspect-[16/9] w-full bg-white">
                        <img
                          src={func.image}
                          alt={`Tela do Dominus Food: ${func.titulo}`}
                          className="block h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-2">
                          <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm"
                            style={{ color: "#FC4242" }}
                          >
                            <Icon size={24} aria-hidden="true" />
                          </div>
                          <span className="max-w-[calc(100%-4rem)] rounded-full border border-[#FC4242]/20 bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FC4242] shadow-sm">
                            {func.badge}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <h3 className="mb-3 font-display fluid-h3 font-bold leading-tight text-foreground">
                          {func.titulo}
                        </h3>
                        <p className="fluid-secondary leading-relaxed text-muted-foreground">
                          {func.descricao}
                        </p>

                        {func.nota && (
                          <p className="mt-4 fluid-legal italic text-muted-foreground/75">
                            {func.nota}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-10 text-center sm:mt-12">
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="inline-flex min-h-14 w-full max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2 sm:w-auto sm:px-8"
              >
                <span className="text-center">Quero conhecer o Dominus Food</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ─── 5. DESTAQUE DOMINUS IA — GESTÃO INTELIGENTE DE ESTOQUE ─── */}
        <DominusIaSection onOpenSpecialist={() => setSpecialistOpen(true)} />

        {/* ─── 2. APRESENTAÇÃO DO ECOSSISTEMA DOMINUS FOOD ─── */}
        <section id="solucao-dominus-food" className="order-4 w-full bg-background py-14 sm:py-20 lg:py-24">
          <div className="landing-page-container">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative mx-auto flex w-full max-w-[1020px] items-center justify-center overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(252,66,66,0.12) 0%, rgba(252,66,66,0.06) 42%, transparent 72%)",
                  }}
                />
                <img
                  src={dominusFoodFeaturesImage}
                  alt="Ecossistema Dominus Food em computadores, telas de operação e dispositivos móveis"
                  className="relative z-10 block h-auto w-full object-contain"
                  decoding="async"
                />
              </div>

              <div className="flex w-full flex-col gap-4 sm:gap-5">
              <div className="mb-4 w-full text-left sm:mb-5">
                <div
                  className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold sm:mb-4"
                  style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
                >
                  <Layers size={13} aria-hidden="true" />
                  <span>GESTÃO SIMPLIFICADA</span>
                </div>
                <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                  Tudo o que seu boteco precisa, em um só sistema.
                </h2>
                <p className="mt-3.5 w-full max-w-4xl fluid-body leading-relaxed text-muted-foreground">
                  Do atendimento ao caixa, acompanhe sua operação com ferramentas que trabalham juntas
                  para facilitar a gestão do seu negócio.
                </p>
              </div>
                {pilares.map((pilar) => {
                  const Icon = pilar.icon;
                  return (
                    <div
                      key={pilar.id}
                      className="flex min-h-28 w-full items-center gap-4 rounded-2xl border border-[#FC4242]/20 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FC4242]/50 hover:shadow-md sm:gap-5 sm:p-5"
                    >
                      <div
                        className="flex size-12 shrink-0 items-center justify-center rounded-xl sm:size-14"
                        style={{ backgroundColor: "#FC424215" }}
                      >
                        <Icon size={25} style={{ color: "#FC4242" }} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display fluid-h3 font-bold leading-tight text-foreground">
                          {pilar.titulo}
                        </h3>
                        <p className="mt-1 fluid-secondary leading-relaxed text-muted-foreground">
                          {pilar.descricao}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="shrink-0 font-display text-3xl font-extrabold text-[#FC4242]/20 sm:text-4xl"
                      >
                        {pilar.numero}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. PROVA SOCIAL, INDICADORES & CLIENTES REAIS ─── */}
        <section
          id="prova-social-dominus-food"
          className="order-2 w-full py-16 sm:py-24 border-t border-border bg-background"
        >
          <div className="landing-page-container">
            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FC4242]/10 px-4 py-1.5 fluid-secondary font-bold text-[#FC4242] sm:mb-4">
                <Star size={13} aria-hidden="true" />
                <span>CASES DE SUCESSO</span>
              </div>
              <h3 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Quem já confia na tecnologia da Waybit
              </h3>
              <p className="mx-auto mt-3 max-w-4xl fluid-body leading-relaxed text-muted-foreground">
                Depoimentos e relatos de clientes do segmento de alimentação que transformaram a sua operação.
              </p>
            </div>

            <div
              className="grid items-stretch grid-flow-col auto-cols-[90%] snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:thin] min-[771px]:w-full min-[771px]:grid-flow-row min-[771px]:auto-cols-auto min-[771px]:grid-cols-3 min-[771px]:gap-8 min-[771px]:overflow-visible min-[771px]:pb-0"
              role="region"
              aria-label="Cases de sucesso do Dominus Food"
              tabIndex={0}
            >
              {foodVideoCases.map((caseItem, index) => (
                  <button
                    key={caseItem.id}
                    type="button"
                    onClick={() => setActiveFoodVideo(caseItem)}
                    aria-label={`Assistir case da ${caseItem.cliente}`}
                    className={`success-story-card group relative flex h-full flex-col items-stretch aspect-[9/16] snap-start overflow-hidden rounded-3xl border border-[#FC4242]/70 bg-black text-left shadow-2xl transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242] focus-visible:ring-offset-4 ${
                      index === 0
                        ? "min-[771px]:justify-self-end"
                        : index === 1
                          ? "min-[771px]:justify-self-center"
                          : "min-[771px]:justify-self-start"
                    }`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${caseItem.videoId}/hqdefault.jpg`}
                      alt={`Thumbnail do case ${caseItem.cliente}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <span className="flex size-14 items-center justify-center rounded-full border-2 border-white/80 bg-black/50 text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:size-16">
                        <Play size={25} className="translate-x-0.5 fill-current" />
                      </span>
                    </div>
                    <div
                      ref={(element) => {
                        successStoryContentRefs.current[index] = element;
                      }}
                      style={
                        isSuccessStoriesDesktop && successStoryContentHeight !== null
                          ? { minHeight: `${successStoryContentHeight}px` }
                          : undefined
                      }
                      className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-start p-5 text-white sm:p-6"
                    >
                      <h4 className="font-display text-2xl font-extrabold sm:text-3xl">{caseItem.cliente}</h4>
                      <p className="mt-2 text-base leading-relaxed text-white/85 sm:text-lg">{caseItem.texto}</p>
                    </div>
                  </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. COMPARATIVO: OUTROS SISTEMAS X DOMINUS FOOD ─── */}
        <section
          id="comparativo-dominus-food"
          className="order-2 w-full border-t border-border bg-white py-16 sm:py-24"
        >
          <div className="landing-page-container">
            <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FC4242]/10 px-4 py-1.5 fluid-secondary font-bold text-[#FC4242] sm:mb-4">
                <Layers size={13} aria-hidden="true" />
                <span>COMPARAÇÃO NA PRÁTICA</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Outros sistemas <span className="text-[#FC4242]">X</span> Dominus Food
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Mais do que olhar o preço, entenda como cada escolha organiza a rotina do seu boteco
                — do pedido à gestão.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-subtle/45 shadow-sm">
                <div className="border-b border-border bg-white/70 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#FC4242]/15 bg-[#FC4242]/8 text-[#FC4242]">
                      <X size={23} strokeWidth={2.25} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="fluid-caption font-bold uppercase tracking-wider text-muted-foreground">
                        Operação fragmentada
                      </p>
                      <h3 className="mt-1 font-display fluid-h3 font-extrabold text-foreground">
                        Outros sistemas
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 fluid-secondary leading-relaxed text-muted-foreground">
                    Quando as ferramentas não trabalham juntas, a equipe precisa preencher as
                    lacunas no dia a dia.
                  </p>
                </div>

                <ul className="flex flex-1 flex-col p-4 sm:p-5">
                  {comparativoSistemas.outros.map((item) => (
                    <li
                      key={item.titulo}
                      className="flex gap-3 border-b border-border px-2 py-4 first:pt-2 last:border-b-0 last:pb-2 sm:gap-4 sm:px-3"
                    >
                      <span
                        className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]"
                        aria-hidden="true"
                      >
                        <X size={15} strokeWidth={2.5} />
                      </span>
                      <div className="min-w-0">
                        <p className="fluid-body font-bold leading-snug text-foreground">
                          {item.titulo}
                        </p>
                        <p className="mt-1 fluid-secondary leading-relaxed text-muted-foreground">
                          {item.descricao}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#FC4242] bg-white shadow-md">
                <div className="border-b border-[#FC4242]/15 bg-[#FC4242]/5 p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FC4242] text-white shadow-sm">
                        <ShieldCheck size={24} strokeWidth={2.25} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="fluid-caption font-bold uppercase tracking-wider text-[#FC4242]">
                          Operação conectada
                        </p>
                        <h3 className="mt-1 font-display fluid-h3 font-extrabold text-foreground">
                          Dominus Food
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full border border-[#FC4242]/20 bg-white px-3 py-1.5 fluid-caption font-bold text-[#FC4242] shadow-sm">
                      Gestão integrada
                    </span>
                  </div>
                  <p className="mt-5 fluid-secondary leading-relaxed text-muted-foreground">
                    Atendimento, cozinha, estoque, caixa e canais de venda reunidos para dar mais
                    clareza à operação.
                  </p>
                </div>

                <ul className="flex flex-1 flex-col p-4 sm:p-5">
                  {comparativoSistemas.dominus.map((item) => (
                    <li
                      key={item.titulo}
                      className="flex gap-3 border-b border-[#FC4242]/10 px-2 py-4 first:pt-2 last:border-b-0 last:pb-2 sm:gap-4 sm:px-3"
                    >
                      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#63B628]/10 text-[#63B628]">
                        <CheckCircle2 size={17} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="fluid-body font-bold leading-snug text-foreground">
                          {item.titulo}
                        </p>
                        <p className="mt-1 fluid-secondary leading-relaxed text-muted-foreground">
                          {item.descricao}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-10 text-center sm:mt-12">
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="inline-flex min-h-14 w-full max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2 sm:w-auto sm:px-8"
              >
                <span className="text-center">Quero transformar meu boteco agora</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {activeFoodVideo && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Case em vídeo da ${activeFoodVideo.cliente}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setActiveFoodVideo(null)}
          >
            <div
              className="relative aspect-[9/16] h-[82vh] max-w-[92vw] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveFoodVideo(null)}
                aria-label="Fechar vídeo"
                className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:bg-[#FC4242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]"
              >
                <X size={17} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeFoodVideo.videoId}?autoplay=1&rel=0&playsinline=1`}
                title={`Case em vídeo da ${activeFoodVideo.cliente}`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* ─── 8. SEÇÃO COMERCIAL DE PLANOS E INVESTIMENTOS (Requisito Principal) ─── */}
        <section
          id="planos-dominus-food"
          className="order-6 relative w-full overflow-hidden py-16 sm:py-24 lg:py-28 border-t border-[#FC4242]/20"
          style={{
            background:
              "radial-gradient(ellipse 72% 68% at 84% 28%, rgba(252,66,66,0.34) 0%, rgba(168,30,35,0.18) 38%, transparent 68%), radial-gradient(ellipse 58% 62% at 10% 88%, rgba(221,51,55,0.24) 0%, transparent 65%), linear-gradient(135deg, #30090c 0%, #481014 38%, #2d090d 68%, #190507 100%)",
          }}
        >
          {/* Fundo luminoso */}
          <div className="landing-page-container relative z-10">
            <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/15 px-4 py-1.5 mb-4">
                <Star size={13} className="text-[#FC4242]" aria-hidden="true" />
                <span className="fluid-secondary font-bold uppercase tracking-wider text-[#FC4242]">
                  Investimento Transparente
                </span>
              </div>

              {/* Título e Subtítulo Sugeridos na Documentação */}
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-white leading-tight">
                Conheça os planos do Dominus Food
              </h2>
              <p className="mt-4 fluid-body text-white/80 leading-relaxed max-w-4xl mx-auto">
                Encontre uma opção para a realidade do seu boteco e descubra como começar a organizar
                sua gestão com o Dominus Food.
              </p>

              {/* Seletor de Periodicidade: Mensal / Anual */}
              <div className="mt-8 inline-flex items-center rounded-xl border border-white/20 bg-black/40 p-1 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setBillingCycle("anual")}
                  className={`rounded-lg px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    billingCycle === "anual"
                      ? "bg-[#FC4242] text-white shadow-md font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Anual (Desconto especial)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("mensal")}
                  className={`rounded-lg px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    billingCycle === "mensal"
                      ? "bg-[#FC4242] text-white shadow-md font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Mensal
                </button>
              </div>
            </div>

            {/* Grid com os 4 Planos Oficiais do Food */}
            <div
              role="region"
              aria-label="Planos do Dominus Food"
              tabIndex={0}
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(252,66,66,0.35)_rgba(252,66,66,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-5 pr-5 sm:gap-6 sm:pr-6 lg:w-full lg:pr-0 lg:grid lg:grid-cols-4">
              {planosFood.map((plano) => {
                const preco = billingCycle === "anual" ? plano.anual : plano.mensal;
                return (
                  <div
                    key={plano.id}
                    className="group relative flex w-[min(20rem,calc(100vw-3rem))] shrink-0 snap-start flex-col justify-between rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FC4242] hover:bg-[#2d0909]/90 hover:shadow-2xl hover:ring-2 hover:ring-[#FC4242]/50 lg:w-auto"
                  >

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display font-extrabold text-lg text-white">
                          {plano.nome}
                        </h3>
                      </div>

                      <p className="text-xs text-white/60 min-h-[32px] leading-snug mb-4">
                        {plano.descricao}
                      </p>

                      {/* Bloco de Preço */}
                      <div className="py-4 border-y border-white/10 mb-4">
                        <div className="flex items-baseline gap-1 text-white">
                          {preco !== "Consulte" ? (
                            <>
                              <span className="text-xs font-semibold text-white/70">R$</span>
                              <span className="font-display text-3xl font-extrabold tracking-tight">
                                {preco}
                              </span>
                              <span className="text-xs text-white/60 font-medium">/mês</span>
                            </>
                          ) : (
                            <span className="font-display text-2xl font-extrabold text-white">
                              Sob Consulta
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Lista de Recursos */}
                      <ul className="flex flex-col gap-2 mb-6 text-xs text-white/80">
                        {[plano.faturamento, plano.pdvs].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0 text-[#FC4242]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/planos"
                      search={{ segmento: "food" }}
                      className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/10 text-xs font-bold text-white transition-all duration-200 hover:bg-[#FC4242] group-hover:border-transparent group-hover:bg-[#FC4242] group-hover:shadow-md group-hover:hover:bg-[#FC4242] group-hover:hover:brightness-110"
                    >
                      <span>Ver detalhes deste plano</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                );
              })}
              </div>
            </div>

          </div>
        </section>

        {/* ─── 9. FAQ COMPLETO COM TODAS AS 12 PERGUNTAS ─── */}
        <section
          id="faq-dominus-food"
          className="order-7 w-full py-16 sm:py-24 bg-background border-t border-border"
        >
          <div className="landing-page-container">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold mb-3 sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <HelpCircle size={13} aria-hidden="true" />
                <span>Tire Suas Dúvidas</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Perguntas frequentes de gestores de <span className="text-[#FC4242]">boteco</span>
              </h2>
              <p className="mx-auto mt-3.5 max-w-4xl fluid-body leading-relaxed text-muted-foreground lg:mx-0">
                Respostas diretas e responsáveis sobre funcionalidades, funcionamento offline,
                equipamentos, maquininhas, preços e suporte.
              </p>
            </div>

              <div className="flex max-w-3xl flex-col gap-4">
              {faqs.filter((faq) => ["faq-1", "faq-11", "faq-5", "faq-9"].includes(faq.id)).map((faq, idx) => (
                <FaqAccordionItem
                  key={faq.id}
                  pergunta={faq.pergunta.replace(/^\d+\.\s*/, "")}
                  resposta={faq.resposta}
                  isOpen={activeFaqIndex === idx}
                  onToggle={() => toggleFaq(idx)}
                />
              ))}
            </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                Ainda tem alguma dúvida específica sobre a sua rotina?{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=5521975812676&text=Ol%C3%A1%2C+vim+do+site+e+quero+saber+mais+sobre+o+Dominus&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FC4242] hover:underline"
                >
                  Converse agora com nossa equipe comercial
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Rodapé discreto sem elementos institucionais */}
      <footer className="w-full py-6 border-t border-border bg-surface-subtle/60 text-center text-xs text-muted-foreground">
        <div className="landing-page-container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Dominus Food • Waybit Software. Todos os direitos reservados.</p>
          <p className="text-[11px] text-muted-foreground/70">Tecnologia para uma gestão mais leve.</p>
        </div>
      </footer>

      {/* Modal de Contato com Especialista preenchido para Food */}
      <SpecialistDialog
        open={specialistOpen}
        onOpenChange={setSpecialistOpen}
        initialSegment="Food (Restaurante/Delivery)"
        initialPlan=""
      />

      {/* Modal Full Funnel de Agendamento de Demonstração */}
      <FullFunnelBookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
      />
    </div>
  );
}
