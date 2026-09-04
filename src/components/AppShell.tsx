import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Gauge, KeyRound, MonitorSmartphone, PlusCircle, Zap } from "lucide-react";

const nav = [
  { to: "/", label: "Visão geral", icon: Gauge },
  { to: "/licencas", label: "Licenças", icon: KeyRound },
  { to: "/licencas/nova", label: "Nova licença", icon: PlusCircle },
  { to: "/dispositivos", label: "Dispositivos", icon: MonitorSmartphone },
] as const;

export function AppShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden">
        <div className="animate-aurora absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-aurora absolute -top-24 right-10 h-80 w-80 rounded-full bg-magenta/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] gap-6 px-4 py-6 lg:px-8">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 flex-col rounded-3xl border border-border bg-sidebar/80 p-5 backdrop-blur-xl lg:flex">
          <div className="flex items-center gap-3 px-1">
            <span className="bg-gradient-speed flex size-10 items-center justify-center rounded-xl">
              <Zap className="size-5 text-primary-foreground" />
            </span>
            <div>
              <p className="font-display text-lg leading-none font-bold tracking-tight">SPEED</p>
              <p className="text-muted-foreground mt-1 text-[11px] tracking-[0.18em] uppercase">
                License Manager
              </p>
            </div>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {nav.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: true }}
                className="text-muted-foreground hover:bg-sidebar-accent hover:text-foreground group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all"
                activeProps={{
                  className:
                    "bg-sidebar-accent text-foreground border border-primary/30 glow-ring",
                }}
              >
                <Icon className="size-4 transition-transform group-hover:scale-110" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="card-speed mt-auto p-4">
            <p className="text-muted-foreground text-xs">Build atual do desktop</p>
            <p className="font-display mt-1 text-sm font-semibold">SPEED 4.2.1</p>
            <p className="text-muted-foreground mt-2 text-[11px]">
              Servidor de licenças operando normalmente.
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="animate-rise-in mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
              {subtitle ? <p className="text-muted-foreground mt-2 text-sm">{subtitle}</p> : null}
            </div>
            {actions}
          </header>

          <nav className="mb-6 flex gap-2 overflow-x-auto lg:hidden">
            {nav.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: true }}
                className="border-border text-muted-foreground rounded-full border px-4 py-1.5 text-xs whitespace-nowrap"
                activeProps={{ className: "border-primary/50 text-foreground bg-primary/10" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="animate-rise-in pb-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
