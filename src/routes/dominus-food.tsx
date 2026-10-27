import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dominus-food")({
  beforeLoad: () => {
    throw redirect({ to: "/sistema-para-boteco", statusCode: 301 });
  },
});
