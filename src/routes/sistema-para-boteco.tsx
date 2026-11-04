import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MonitorX,
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
  Laptop,
  MessageSquare,
  Wifi as WifiIcon,
  Boxes,
} from "lucide-react";
import { DominusFoodHeader } from "@/components/DominusFoodHeader";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import { FullFunnelBookingModal } from "@/components/FullFunnelBookingModal";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
import blogFoodInclusionImage from "@/assets/principal - a importancia da.png";
import blogRestaurantHybridImage from "@/assets/principal - a nova era dos.png";
import blogXmlStorageImage from "@/assets/principal - a nova regra.png";
import blogNfceDecreeImage from "@/assets/principal - alteração do decreto.jpg";
import blogDeliveryMistakesImage from "@/assets/principal - 5 erros que.png";
import blogDominusIntegrationsImage from "@/assets/principal - 5 integrações do dominus.jpg";

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
    resposta: "Comandas digitais com consumo em tempo real.",
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
      descricao: "Sem integração com apps de delivery",
    },
    {
      titulo: "Estoque com pouca visibilidade",
      descricao: "Controle de estoque limitado ou incompleto",
    },
    {
      titulo: "Comandas no papel",
      descricao: "Comandas perdidas e pedidos trocados no salão",
    },
    {
      titulo: "Informações espalhadas",
      descricao: "Relatórios limitados ou pagos à parte",
    },
    {
      titulo: "PDV pouco flexível",
      descricao: "PDV travado e pouco intuitivo.",
    },
    {
      titulo: "Salão e cozinha desconectados",
      descricao: "Sem integração entre salão e cozinha.",
    },
  ],
  dominus: [
    {
      titulo: "Delivery centralizado",
      descricao:
        "Integração com iFood entre outros sem custo adicional",
    },
    {
      titulo: "Estoque acompanhado",
      descricao:
        "Controle de estoque completo e automatizado",
    },
    {
      titulo: "Comandas digitais",
      descricao: "Comandas digitais e atendimento ágil",
    },
    {
      titulo: "Gestão com mais clareza",
      descricao: "Relatórios completos e detalhados",
    },
    {
      titulo: "PDV pensado para a rotina",
      descricao: "PDV rápido, fácil e bem intuitívo",
    },
    {
      titulo: "Operação conectada",
      descricao: "Integração total entre salão e cozinha",
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
          className={`flex shrink-0 items-center justify-center text-[#FC4242] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
      className="order-5 w-full border-t border-border bg-white"
    >
      <div className="landing-page-container">
        <div
          className="grid w-full min-w-0 grid-cols-1 items-center gap-10 rounded-3xl border border-[#549192]/30 p-6 shadow-xl sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12"
          style={{
            background: "radial-gradient(ellipse 55% 45% at 15% 80%, rgba(113,198,187,0.45) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 30%, rgba(113,198,187,0.8) 0%, transparent 65%), linear-gradient(135deg, #28595B 0%, color-mix(in srgb, #28595B 70%, #71C6BB) 35%, #71C6BB 65%, #28595B 100%)"
          }}
        >
          <div className="flex h-full min-w-0 flex-col items-start justify-center gap-5 text-left sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <img src={dominusIaLogo} alt="Dominus IA" className="h-12 w-auto max-w-[40%] object-contain sm:h-16" />
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-white">Dominus IA</h2>
            </div>
            <h3 className="font-display fluid-h3 font-extrabold leading-snug text-white">Inteligência Artificial na gestão de estoque</h3>
            <p className="fluid-body font-medium leading-relaxed text-white">
              A Waybit desenvolveu o Dominus IA para apoiar as tarefas mais críticas do estoque:
              leitura e entrada automatizada de notas fiscais, conferência de contagens, cálculo
              do Custo de Mercadorias Vendidas (CMV) e análise preditiva de ruptura.
            </p>
            <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {["Entrada ágil de NF-e de fornecedores", "Análise de margem e CMV por porção", "Alertas para evitar falta de insumos", "Mais precisão nas compras da semana"].map((benefit) => (
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
  const [blogCarouselApi, setBlogCarouselApi] = useState<CarouselApi>();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"anual" | "mensal">("anual");
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [activeRotinaTab, setActiveRotinaTab] = useState(0);
  const [activeFoodVideo, setActiveFoodVideo] = useState<(typeof foodVideoCases)[number] | null>(null);
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(false);
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
    if (!isIntroVideoOpen) return;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsIntroVideoOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isIntroVideoOpen]);

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
                  Conheça o sistema <span className="text-[#FC4242]">Dominus Food </span>
                </h2>
                <p className="fluid-body-lg leading-relaxed text-white">
                  Um sistema para botecos que ajuda você a organizar a operação, controlar os custos e identificar oportunidades para aumentar o lucro do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="flex flex-1 flex-col w-full">


        {/* ─── 3. DORES DO GESTOR DE BOTECO (Problemas x Respostas) ─── */}
        <section id="dores-dominus-food" className="w-full bg-background">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-7xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#FC4242] bg-[#FC4242]/10 px-4 py-1.5 text-[#FC4242] mb-5 sm:mb-6">
                <span className="fluid-caption font-bold uppercase tracking-wider">Se identifica ?</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Operações que travam o seu boteco
              </h2>
              <p className="mmt-3.5 text-muted-foreground leading-relaxed max-w-4xl mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
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
          className="order-6 w-full bg-background border-t border-border"
        >
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-7xl text-center">
              <div
                className="section-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 sm:mb-6"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <Utensils size={13} aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-wider">Funcionalidades do Dominus Food</span>
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
            <div className="mt-10 flex justify-center sm:mt-12">
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="inline-flex min-h-14 w-[70%] max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
              >
                <span className="text-center">Quero conhecer o Dominus Food</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ─── 2. APRESENTAÇÃO DO ECOSSISTEMA DOMINUS FOOD ─── */}
        <section id="solucao-dominus-food" className="order-4 w-full bg-background">
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
                <div className="section-intro w-full text-left">
                  <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#FC4242] bg-[#FC4242]/10 px-4 py-1.5 text-[#FC4242] mb-5 sm:mb-6">
                    <Zap size={13} aria-hidden="true" />
                    <span className="fluid-caption font-bold uppercase tracking-wider">GESTÃO SIMPLIFICADA</span>
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

        {/* ─── 5. DESTAQUE DOMINUS IA — GESTÃO INTELIGENTE DE ESTOQUE ─── */}
        <DominusIaSection onOpenSpecialist={() => setSpecialistOpen(true)} />

        {/* ─── 7. PROVA SOCIAL, INDICADORES & CLIENTES REAIS ─── */}
        <section id="prova-social-dominus-food" className="order-2 w-full border-t border-border bg-background py-12 sm:py-16 lg:py-24">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center mb-8 sm:mb-12 lg:mb-14">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#FC4242] bg-[#FC4242]/10 px-4 py-1.5 text-[#FC4242] mb-5 sm:mb-6">
                <Star size={13} aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-wider">CASES DE SUCESSO</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Quem já confia na tecnologia da Waybit
              </h2>
              <p className="mt-3.5 text-muted-foreground leading-relaxed max-w-4xl mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
                Histórias reais de quem eliminou gargalos no atendimento, automatizou os pedidos e transformou a gestão do próprio negócio.
              </p>
            </div>

            {/* Container com largura exata ajustada por breakpoints */}
            <div className="mx-auto w-full min-[426px]:w-[clamp(70%,calc(70%+((100vw-426px)*30/345)),100%)] min-[771px]:w-[80%]">
              <div
                className="grid items-stretch grid-flow-col auto-cols-[90%] min-[771px]:grid-flow-row min-[771px]:grid-cols-3 min-[771px]:auto-rows-fr snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:thin] min-[771px]:w-full min-[771px]:gap-8 min-[771px]:overflow-visible min-[771px]:pb-0"
                role="region"
                aria-label="Cases de sucesso do Dominus Food"
                tabIndex={0}
              >
                {foodVideoCases.map((caseItem) => (
                  <div
                    key={caseItem.id}
                    className="group relative flex h-full flex-col justify-between rounded-3xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Efeito de brilho/glow vermelho ao passar o mouse */}
                    <div
                      className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                      style={{ backgroundColor: "rgba(252, 66, 66, 0.16)" }}
                      aria-hidden="true"
                    />

                    {/* 1. EM CIMA: Balão de Fala (Altura igualada sincronizada) */}
                    <div className="relative mb-0 flex flex-1 flex-col justify-between rounded-2xl border border-[#FC4242] bg-card/95 backdrop-blur-xs p-5 sm:p-6 shadow-sm transition-colors duration-300">
                      {/* Pontinha geométrica do balão de fala virada para baixo */}
                      <div
                        className="absolute -bottom-2.5 left-8 size-5 rotate-45 border-r border-b border-[#FC4242] bg-card transition-colors"
                        aria-hidden="true"
                      />

                      {/* Depoimento (Itálico) */}
                      <blockquote className="fluid-body text-foreground/90 font-medium italic leading-relaxed pt-1 mb-4">
                        “{caseItem.texto}”
                      </blockquote>

                      {/* Nome da Empresa (Alinhado à esquerda) */}
                      <div className="mt-auto text-left">
                        <h4 className="font-display fluid-h4 font-bold text-foreground leading-tight">
                          {caseItem.cliente}
                        </h4>
                      </div>
                    </div>

                    {/* 2. EMBAIXO: Thumbnail do Vídeo */}
                    <div className="relative mt-6 w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-sm border border-border/80 transition-colors duration-300 group-hover:border-[#FC4242]/60 shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveFoodVideo(caseItem)}
                        aria-label={`Assistir case da ${caseItem.cliente}`}
                        className="group/play relative w-full h-full block cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242] focus-visible:ring-offset-2"
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${caseItem.videoId}/hqdefault.jpg`}
                          alt={`Thumbnail do case ${caseItem.cliente}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
                        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                          <div className="size-14 sm:size-16 rounded-full bg-black/30 border-2 border-white text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover/play:scale-[1.08] backdrop-blur-[2px]">
                            <Play size={24} className="fill-white text-white translate-x-0.5" />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. COMPARATIVO: OUTROS SISTEMAS X DOMINUS FOOD ─── */}
        <section
          id="comparativo-dominus-food"
          className="order-2 w-full border-t border-border bg-white"
        >
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#FC4242] bg-[#FC4242]/10 px-4 py-1.5 text-[#FC4242] mb-5 sm:mb-6">
                <Layers size={13} aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-wider">COMPARAÇÃO NA PRÁTICA</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Outros sistemas <span className="text-foreground">X</span> Dominus Food
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body-lg leading-relaxed text-muted-foreground">
                Mais do que olhar o preço, entenda como cada escolha organiza a rotina do seu boteco
                — do pedido à gestão.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Card Esquerdo: Outros Sistemas */}
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border-[5px_1px_1px_1px] border-t-[#4A4A4A] border-r-border border-b-border border-l-border bg-surface-subtle/45 shadow-sm">
                <div className="border-b border-border bg-white/70 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
                      <Laptop size={23} strokeWidth={2.25} aria-hidden="true" />
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
                </div>

                <ul className="flex flex-1 flex-col p-4 sm:p-5">
                  {comparativoSistemas.outros.map((item) => (
                    <li
                      key={item.titulo}
                      className="flex gap-3 border-b border-border px-2 py-4 first:pt-2 last:border-b-0 last:pb-2 sm:gap-4 sm:px-3"
                    >
                      <span
                        className="flex size-7 shrink-0 self-center items-center justify-center rounded-full bg-muted text-foreground"
                        aria-hidden="true"
                      >
                        <X size={15} strokeWidth={2.5} />
                      </span>
                      <div className="min-w-0">
                        <p className="fluid-secondary leading-relaxed text-muted-foreground">
                          {item.descricao}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-border px-6 py-5 fluid-secondary leading-relaxed text-muted-foreground sm:px-8">
                  Quando as ferramentas não trabalham juntas, a equipe precisa preencher as lacunas no dia a dia.
                </p>
              </article>

              {/* Card Direito: Dominus Food */}
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border-[5px_1px_1px_1px] border-t-[#FC4242] border-r-[#FC4242]/40 border-b-[#FC4242] border-l-[#FC4242]/40 bg-white shadow-md">
                <div className="border-b border-[#FC4242]/15 bg-[#FC4242]/5 p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FC4242] text-white shadow-sm">
                        <img src={foodLogo} alt="" className="size-8 object-contain" aria-hidden="true" />
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
                  </div>
                </div>

                <ul className="flex flex-1 flex-col p-4 sm:p-5">
                  {comparativoSistemas.dominus.map((item) => (
                    <li
                      key={item.titulo}
                      className="flex gap-3 border-b border-[#FC4242]/10 px-2 py-4 first:pt-2 last:border-b-0 last:pb-2 sm:gap-4 sm:px-3"
                    >
                      <span className="flex size-7 shrink-0 self-center items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        <CheckCircle2 size={17} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="fluid-secondary leading-relaxed text-muted-foreground">
                          {item.descricao}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-[#FC4242] px-6 py-5 fluid-secondary leading-relaxed text-[#FC4242] sm:px-8">
                  Atendimento, cozinha, estoque, caixa e canais de venda reunidos para dar mais clareza à operação.
                </p>
              </article>
            </div>

            <div className="mt-10 flex justify-center sm:mt-12">
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="inline-flex min-h-14 w-[70%] max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
              >
                <span className="text-center">Quero transformar meu boteco agora</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ─── VÍDEO / CONHEÇA O SISTEMA ─── */}
        <section
          id="video-dominus-food"
          className="order-2 w-full border-y border-[#FC4242]/60 bg-[linear-gradient(135deg,#30090c_0%,#481014_38%,#2d090d_68%,#190507_100%)] py-12 shadow-xl sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-16"
          aria-labelledby="video-dominus-food-title"
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <div
            className="mx-auto grid max-w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10"
            style={{
              marginLeft: "0px",
              marginRight: "0px",
            }}
          >
            <button
              type="button"
              onClick={() => setIsIntroVideoOpen(true)}
              aria-label="Reproduzir vídeo de apresentação do Dominus Food"
              className="group relative block w-full max-w-[420px] mx-auto lg:max-w-none min-w-0 overflow-hidden rounded-2xl border border-neutral-700 bg-black text-left shadow-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FC4242]/50"
            >
              <span className="relative block aspect-[4/3] w-full">
                <img
                  src="https://img.youtube.com/vi/OJs7BZ087j4/hqdefault.jpg"
                  alt="Prévia do vídeo de apresentação do Dominus Food"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" aria-hidden="true"></span>
                <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/90 bg-black/70 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:size-20" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play ml-1 fill-current sm:size-8" aria-hidden="true">
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                  </svg>
                </span>
              </span>
            </button>

            <div className="min-w-0 text-center lg:text-left">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#FC4242]/25 bg-[#FC4242]/10 px-4 py-1.5 mb-5 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play fill-[#FC4242] text-[#FC4242]" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                <span className="fluid-caption font-bold uppercase tracking-wider text-[#FC4242]">Conheça o sistema</span>
              </div>
              <h2 id="video-dominus-food-title" className="font-display fluid-h2 font-extrabold tracking-tight text-white">
                Veja o Dominus Food em ação
              </h2>
              <p className="mx-auto mt-4 max-w-xl fluid-body leading-relaxed text-white/75 lg:mx-0">
                Descubra como organizar o atendimento, acompanhar os pedidos e ter mais controle da rotina do seu boteco.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#FC4242]/15 text-[#FC4242]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-properties" aria-hidden="true">
                      <path d="M15 3v18"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M21 9H3"></path><path d="M21 15H3"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">Mesas e comandas digitais</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#FC4242]/15 text-[#FC4242]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square" aria-hidden="true">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">Comunicação salão–cozinha</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#FC4242]/15 text-[#FC4242]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi" aria-hidden="true">
                      <path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">PDV rápido e operação offline</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#FC4242]/15 text-[#FC4242]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boxes" aria-hidden="true">
                      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                      <path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path>
                      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                      <path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path>
                      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                      <path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">Estoque, compras e CMV</span>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToLeadForm}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#63B628] px-6 py-3 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63B628]/60 focus-visible:ring-offset-2 sm:w-auto"
              >
                Falar com especialista
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {isIntroVideoOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Vídeo de apresentação do Dominus Food"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setIsIntroVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border-[6px] border-neutral-900 bg-black shadow-[0_24px_100px_rgba(0,0,0,0.65)] sm:rounded-3xl sm:border-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsIntroVideoOpen(false)}
                aria-label="Fechar vídeo"
                className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white transition-colors hover:bg-[#FC4242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X size={20} />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/OJs7BZ087j4?autoplay=1&rel=0&playsinline=1"
                  title="Apresentação do Dominus Food"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

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
          className="order-6 relative w-full overflow-hidden border-t border-[#FC4242]/20"
          style={{
            background:
              "radial-gradient(ellipse 72% 68% at 84% 28%, rgba(252,66,66,0.34) 0%, rgba(168,30,35,0.18) 38%, transparent 68%), radial-gradient(ellipse 58% 62% at 10% 88%, rgba(221,51,55,0.24) 0%, transparent 65%), linear-gradient(135deg, #30090c 0%, #481014 38%, #2d090d 68%, #190507 100%)",
          }}
        >
          {/* Fundo luminoso */}
          <div className="landing-page-container relative z-10">
            <div className="section-intro mx-auto max-w-7xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/15 px-4 py-1.5 mb-5 sm:mb-6">
                <Star size={13} className="text-[#FC4242]" aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-wider text-[#FC4242]">
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
                  className={`rounded-lg px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${billingCycle === "anual"
                    ? "bg-[#FC4242] text-white shadow-md font-bold"
                    : "text-white/70 hover:text-white"
                    }`}
                >
                  Anual (Desconto especial)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("mensal")}
                  className={`rounded-lg px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${billingCycle === "mensal"
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

        {/* ─── 11. COMEÇAR COM DOMINUS É RAPIDO E FACIL ─── */}
        <section
          id="comecar-dominus-food"
          className="order-7 w-full border-t border-border bg-white"
          aria-labelledby="comecar-dominus-food-title"
        >
          <div className="landing-page-container">
            <div className="mx-auto max-w-6xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full bg-[#FC4242]/5 px-4 py-1.5 text-[#FC4242] mb-5 sm:mb-6">
                <span className="size-2 rounded-full bg-[#FC4242]" aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-wider">SIMPLES, RÁPIDO E ACOMPANHADO</span>
              </div>
              <h2
                id="comecar-dominus-food-title"
                className="font-display fluid-h2 font-extrabold tracking-tight text-foreground"
              >
                Começar com o Dominus é rápido e sem complicação
              </h2>
              <p className="mt-2 fluid-body leading-relaxed text-muted-foreground">
                Três passos para conhecer o sistema e começar a transformar a rotina do seu boteco.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-11 md:grid-cols-3 md:gap-7">
                {[
                  {
                    icon: CalendarDays,
                    label: "PASSO 1",
                    description: "Agende sua demonstração com nossa equipe.",
                  },
                  {
                    icon: Headset,
                    label: "PASSO 2",
                    description: "Nossa equipe apresentará o sistema completo para você.",
                  },
                  {
                    icon: MonitorX,
                    label: "PASSO 3",
                    description: "Comece a usar o sistema para um boteco mais completo.",
                  },
                ].map(({ icon: Icon, label, description }) => (
                  <article
                    key={label}
                    className="flex min-h-[270px] flex-col items-center rounded-xl border border-gray-200 border-t-4 border-t-[#FC4242] bg-white px-5 py-8 text-center shadow-[0_4px_0_rgba(23,32,40,0.08)] sm:px-7"
                  >
                    <Icon size={52} strokeWidth={1.8} className="text-[#FC4242]" aria-hidden="true" />
                    <p className="mt-5 text-base font-bold text-foreground">
                      {label}
                    </p>
                    <span className="mt-2 h-1 w-10 rounded-full bg-[#FC4242]" aria-hidden="true" />
                    <p className="mt-4 fluid-body font-bold leading-relaxed text-foreground">
                      {description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-center sm:mt-12">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex min-h-14 w-[70%] max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
                >
                  AGENDAR DEMONSTRAÇÃO <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ COMPLETO COM TODAS AS 12 PERGUNTAS ─── */}
        <section
          id="faq-dominus-food"
          className="order-7 w-full bg-background border-t border-border"
        >
          <div className="landing-page-container">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div className="section-intro text-center lg:text-left">
                <div
                  className="section-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 sm:mb-6"
                  style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
                >
                  <HelpCircle size={13} aria-hidden="true" />
                  <span className="fluid-caption font-bold uppercase tracking-wider">Tire Suas Dúvidas</span>
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

        <section
          id="blog-conteudos"
          className="order-8 w-full overflow-hidden border-t border-border bg-white py-16 lg:py-24"
        >
          <div className="landing-page-container">
            <div className="mb-12 flex w-full flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="w-full">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FC4242]/20 bg-[#FC4242]/5 px-4 py-1.5 fluid-caption font-bold uppercase tracking-wider text-[#FC4242] sm:mb-6">
                  <BookOpen size={13} className="text-[#FC4242]" aria-hidden="true" />
                  <span>Blog &amp; Conteúdos Estratégicos</span>
                </div>
                <h2 className="font-display fluid-h2 font-bold tracking-tight text-foreground">
                  Fique por dentro: dicas para acelerar seu comércio
                </h2>
                <p className="mt-2 fluid-body-lg text-muted-foreground">
                  Artigos práticos de gestão, finanças e tecnologia para o seu dia a dia.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-4 self-start md:self-auto">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      blogCarouselApi?.scrollPrev();
                    }}
                    className="size-9 rounded-full border-border text-foreground hover:border-[#FC4242]/40 hover:bg-[#FC4242]/5"
                    aria-label="Artigo anterior"
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      blogCarouselApi?.scrollNext();
                    }}
                    className="size-9 rounded-full border-border text-foreground hover:border-[#FC4242]/40 hover:bg-[#FC4242]/5"
                    aria-label="Próximo artigo"
                  >
                    <ChevronRight size={18} aria-hidden="true" />
                  </Button>
                </div>
                <button
                  type="button"
                  onClick={() => setSpecialistOpen(true)}
                  className="ml-2 inline-flex cursor-pointer items-center gap-1.5 fluid-btn font-semibold text-[#FC4242] hover:underline"
                >
                  <span>Falar com especialista</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            <Carousel
              setApi={setBlogCarouselApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
              aria-label="Artigos do blog Waybit"
            >
              <CarouselContent className="-ml-5 py-2 lg:-ml-6">
                {[
                  {
                    id: "blog-1",
                    title: "A importância da alimentação inclusiva em restaurantes",
                    category: "Gastronomia / Food",
                    categoryColor: "bg-[#FC4242]/10 text-[#FC4242] border-[#FC4242]/20",
                    readTime: "4 min de leitura",
                    date: "14 de Maio, 2024",
                    author: "Equipe Waybit Food",
                    image: blogFoodInclusionImage,
                    imageAlt: "A importância da alimentação inclusiva em restaurantes",
                    summary: "A alimentação inclusiva é essencial para atender clientes com restrições alimentares, alergias e diferentes escolhas de vida, fidelizando novos públicos e elevando a experiência do seu restaurante.",
                  },
                  {
                    id: "blog-2",
                    title: "A nova era dos restaurantes híbridos: por que quem não se adaptar agora vai ficar para trás",
                    category: "Gestão & Inovação",
                    categoryColor: "bg-[#FC4242]/10 text-[#FC4242] border-[#FC4242]/20",
                    readTime: "6 min de leitura",
                    date: "18 de Junho, 2024",
                    author: "Equipe Waybit Inovação",
                    image: blogRestaurantHybridImage,
                    imageAlt: "A nova era dos restaurantes híbridos",
                    summary: "O setor de alimentação passou por mudanças históricas. Descubra o modelo de restaurante híbrido que conecta salão, delivery, autoatendimento e pagamentos digitais em tempo real.",
                  },
                  {
                    id: "blog-3",
                    title: "A Nova Regra de Guarda de XMLs das Notas Fiscais: O Que Você Precisa Saber",
                    category: "Fiscal & Contábil",
                    categoryColor: "bg-[#FC4242]/10 text-[#FC4242] border-[#FC4242]/20",
                    readTime: "5 min de leitura",
                    date: "02 de Julho, 2024",
                    author: "Setor Fiscal Waybit",
                    image: blogXmlStorageImage,
                    imageAlt: "A Nova Regra de Guarda de XMLs das Notas Fiscais",
                    summary: "Nova diretriz da Confaz estabelece prazo obrigatório de 11 anos para retenção dos arquivos XML de NF-e e NFC-e. Saiba como manter sua empresa blindada contra autuações.",
                  },
                  {
                    id: "blog-4",
                    title: "Alterações do Decreto Nº 49086: Impactos e Implicações na NFC-e",
                    category: "Legislação & Normas",
                    categoryColor: "bg-[#FC4242]/10 text-[#FC4242] border-[#FC4242]/20",
                    readTime: "5 min de leitura",
                    date: "25 de Maio, 2024",
                    author: "Setor Fiscal Waybit",
                    image: blogNfceDecreeImage,
                    imageAlt: "Alterações do Decreto Nº 49086",
                    summary: "No Rio de Janeiro, o Decreto nº 49.086 reduziu o teto de emissão de NFC-e sem identificação do consumidor de R$ 10.000 para R$ 2.000. Veja como evitar a Rejeição 751 no seu caixa.",
                  },
                  {
                    id: "blog-5",
                    title: "5 Erros que estão fazendo seu delivery vender menos",
                    category: "Delivery & Gestão",
                    categoryColor: "bg-[#FC4242]/10 text-[#FC4242] border-[#FC4242]/20",
                    readTime: "5 min de leitura",
                    date: "10 de Agosto, 2024",
                    author: "Equipe Waybit Food",
                    image: blogDeliveryMistakesImage,
                    imageAlt: "5 Erros que estão fazendo seu delivery vender menos",
                    summary: "Vende bastante mas não vê o lucro no fim do mês? Conheça os 5 erros de precificação, controle de estoque e desorganização que drenam a rentabilidade do seu delivery.",
                  },
                  {
                    id: "blog-6",
                    title: "5 INTEGRAÇÕES DO DOMINUS QUE VOCÊ PRECISA CONHECER!",
                    category: "Tecnologia & Integrações",
                    categoryColor: "bg-[#FC4242]/10 text-[#FC4242] border-[#FC4242]/20",
                    readTime: "6 min de leitura",
                    date: "05 de Setembro, 2024",
                    author: "Equipe de Produto Waybit",
                    image: blogDominusIntegrationsImage,
                    imageAlt: "5 INTEGRAÇÕES DO DOMINUS QUE VOCÊ PRECISA CONHECER",
                    summary: "Descubra as integrações nativas do sistema Dominus com Pix Shipay, PicPay, TEF Linx, Boleto Asaas e iFood para transformar a velocidade do seu atendimento e caixa.",
                  },
                ].map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3 lg:pl-6"
                  >
                    <article
                      className="group flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/95 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#FC4242]/40 hover:shadow-xl"
                    >
                      <div>
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                          <img
                            src={post.image}
                            alt={post.imageAlt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <span
                            className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 fluid-caption font-semibold backdrop-blur-md ${post.categoryColor}`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <div className="w-full p-5 sm:p-6">
                          <div className="mb-3 flex items-center gap-3 fluid-caption text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock size={12} aria-hidden="true" /> {post.readTime}
                            </span>
                            <span aria-hidden="true">•</span>
                            <span>{post.date}</span>
                          </div>
                          <h3 className="line-clamp-2 font-display fluid-h3 leading-snug font-bold text-foreground transition-colors group-hover:text-[#FC4242]">
                            {post.title}
                          </h3>
                          <p className="mt-2 line-clamp-3 fluid-secondary leading-relaxed text-muted-foreground">
                            {post.summary}
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-between border-t border-border/80 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                        <span className="truncate fluid-caption font-medium text-muted-foreground">
                          {post.author}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSpecialistOpen(true)}
                          className="flex cursor-pointer items-center gap-1 fluid-caption font-bold text-[#FC4242] transition-transform group-hover:translate-x-0.5"
                        >
                          Ler mais <ChevronRight size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
