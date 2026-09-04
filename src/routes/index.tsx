import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { licenses, overview, statusStyles } from "@/lib/speed-data";
import { Activity, KeyRound, MonitorSmartphone, TimerOff, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visão geral — SPEED License Manager" },
      {
        name: "description",
        content:
          "Métricas de licenças ativas, expiradas e dispositivos conectados do aplicativo SPEED.",
      },
      { property: "og:title", content: "Visão geral — SPEED License Manager" },
      {
        property: "og:description",
        content: "Acompanhe licenças ativas, expiradas e ativações do SPEED em tempo real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Overview,
});

const cards = [
  { label: "Licenças totais", value: overview.total, icon: KeyRound, hint: "+3 este mês" },
  { label: "Ativas", value: overview.ativas, icon: Activity, hint: "em uso agora" },
  { label: "Expiradas", value: overview.expiradas, icon: TimerOff, hint: "renovação pendente" },
  {
    label: "Dispositivos",
    value: overview.dispositivos,
    icon: MonitorSmartphone,
    hint: "ativações válidas",
  },
];

function Overview() {
  const max = Math.max(...overview.ativacoes7d);

  return (
    <AppShell
      title="Visão geral"
      subtitle="O pulso das licenças do SPEED nos últimos dias."
      actions={
        <Button asChild className="bg-gradient-speed rounded-full px-6 font-semibold">
          <Link to="/licencas/nova">Nova licença</Link>
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon, hint }) => (
          <div key={label} className="card-speed p-5">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                {label}
              </span>
              <Icon className="text-accent size-4" />
            </div>
            <p className="font-display mt-4 text-4xl font-bold">{value}</p>
            <p className="text-muted-foreground mt-1 text-xs">{hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <section className="card-speed p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Ativações nos últimos 7 dias</h2>
              <p className="text-muted-foreground text-xs">Novas máquinas vinculadas por dia</p>
            </div>
            <span className="text-success flex items-center gap-1 text-xs">
              <TrendingUp className="size-4" /> +24%
            </span>
          </div>
          <div className="mt-8 flex h-44 items-end gap-3">
            {overview.ativacoes7d.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="bg-gradient-speed w-full rounded-t-lg transition-all duration-500 hover:opacity-80"
                  style={{ height: `${(v / max) * 100}%` }}
                  title={`${v} ativações`}
                />
                <span className="text-muted-foreground text-[10px]">
                  {["S", "T", "Q", "Q", "S", "S", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="card-speed p-6">
          <h2 className="text-lg font-semibold">Últimas licenças</h2>
          <ul className="mt-5 space-y-3">
            {licenses.slice(0, 4).map((l) => (
              <li
                key={l.id}
                className="border-border/70 hover:border-accent/40 flex items-center justify-between rounded-xl border px-4 py-3 transition-colors"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{l.customer}</p>
                  <p className="text-muted-foreground truncate font-mono text-[11px]">{l.key}</p>
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase ${statusStyles[l.status]}`}
                >
                  {l.status}
                </span>
              </li>
            ))}
          </ul>
          <Button asChild variant="ghost" className="mt-4 w-full rounded-xl text-sm">
            <Link to="/licencas">Ver todas as licenças</Link>
          </Button>
        </section>
      </div>
    </AppShell>
  );
}
