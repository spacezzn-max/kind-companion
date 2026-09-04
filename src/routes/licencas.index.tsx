import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { licenses, plans, statusStyles, type LicenseStatus } from "@/lib/speed-data";
import { Copy, Search } from "lucide-react";

export const Route = createFileRoute("/licencas/")({
  head: () => ({
    meta: [
      { title: "Licenças — SPEED License Manager" },
      {
        name: "description",
        content: "Busque, filtre e gerencie todas as licenças emitidas do aplicativo SPEED.",
      },
      { property: "og:title", content: "Licenças — SPEED License Manager" },
      {
        property: "og:description",
        content: "Lista completa de licenças do SPEED com status, plano e validade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LicensesPage,
});

const statusFilters: (LicenseStatus | "todas")[] = ["todas", "ativa", "expirada", "suspensa"];

function LicensesPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<LicenseStatus | "todas">("todas");
  const [plan, setPlan] = useState<string>("todos");

  const rows = useMemo(
    () =>
      licenses.filter((l) => {
        const q = query.trim().toLowerCase();
        const matchQuery =
          !q ||
          l.customer.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q) ||
          l.key.toLowerCase().includes(q);
        return (
          matchQuery && (status === "todas" || l.status === status) && (plan === "todos" || l.plan === plan)
        );
      }),
    [query, status, plan],
  );

  return (
    <AppShell
      title="Licenças"
      subtitle={`${rows.length} de ${licenses.length} licenças exibidas`}
      actions={
        <Button asChild className="bg-gradient-speed rounded-full px-6 font-semibold">
          <Link to="/licencas/nova">Nova licença</Link>
        </Button>
      }
    >
      <div className="card-speed mb-6 flex flex-wrap items-center gap-3 p-4">
        <div className="relative min-w-56 flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por cliente, e-mail ou chave"
            className="bg-background/60 rounded-xl pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-full border px-3.5 py-1.5 text-xs capitalize transition-all ${
                status === s
                  ? "border-primary/50 bg-primary/15 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="border-border bg-background/60 rounded-xl border px-3 py-2 text-xs"
        >
          <option value="todos">Todos os planos</option>
          {plans.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="card-speed overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-border text-muted-foreground border-b text-left text-[11px] tracking-[0.14em] uppercase">
                <th className="px-5 py-4 font-medium">Cliente</th>
                <th className="px-5 py-4 font-medium">Chave</th>
                <th className="px-5 py-4 font-medium">Plano</th>
                <th className="px-5 py-4 font-medium">Máquinas</th>
                <th className="px-5 py-4 font-medium">Expira em</th>
                <th className="px-5 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((l) => (
                <tr
                  key={l.id}
                  className="border-border/60 hover:bg-surface-raised/60 border-b transition-colors last:border-0"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium">{l.customer}</p>
                    <p className="text-muted-foreground text-xs">{l.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => {
                        void navigator.clipboard.writeText(l.key);
                        toast.success("Chave copiada", { description: l.key });
                      }}
                      title="Copiar chave"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-mono text-xs transition-colors"
                    >
                      {l.key}
                      <Copy className="size-3.5" />
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <span className="border-primary/30 bg-primary/10 text-foreground rounded-full border px-2.5 py-0.5 text-xs">
                      {l.plan}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-secondary h-1.5 w-20 overflow-hidden rounded-full">
                        <div
                          className="bg-gradient-speed h-full"
                          style={{ width: `${(l.devicesUsed / l.seats) * 100}%` }}
                        />
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {l.devicesUsed}/{l.seats}
                      </span>
                    </div>
                  </td>
                  <td className="text-muted-foreground px-5 py-4 text-xs">{l.expiresAt}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase ${statusStyles[l.status]}`}
                    >
                      {l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length === 0 ? (
          <div className="space-y-3 p-6">
            <p className="text-muted-foreground text-sm">Nenhuma licença encontrada com esses filtros.</p>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-2/3" />
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
