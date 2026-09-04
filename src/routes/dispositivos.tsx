import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { devices as seedDevices } from "@/lib/speed-data";
import { Laptop, Power, Search } from "lucide-react";

export const Route = createFileRoute("/dispositivos")({
  head: () => ({
    meta: [
      { title: "Dispositivos — SPEED License Manager" },
      {
        name: "description",
        content: "Veja as máquinas ativadas em cada licença do SPEED e revogue acessos.",
      },
      { property: "og:title", content: "Dispositivos — SPEED License Manager" },
      {
        property: "og:description",
        content: "Controle as ativações do SPEED por máquina e revogue quando necessário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevicesPage,
});

function DevicesPage() {
  const [list, setList] = useState(seedDevices);
  const [query, setQuery] = useState("");

  const rows = list.filter((d) => {
    const q = query.trim().toLowerCase();
    return !q || d.name.toLowerCase().includes(q) || d.licenseKey.toLowerCase().includes(q);
  });

  function toggle(id: string) {
    setList((prev) =>
      prev.map((d) => {
        if (d.id !== id) return d;
        toast[d.active ? "warning" : "success"](
          d.active ? "Dispositivo revogado" : "Dispositivo reativado",
          { description: d.name },
        );
        return { ...d, active: !d.active };
      }),
    );
  }

  return (
    <AppShell
      title="Dispositivos"
      subtitle={`${list.filter((d) => d.active).length} ativações válidas no momento`}
    >
      <div className="card-speed mb-6 p-4">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por máquina ou chave"
            className="bg-background/60 rounded-xl pl-9"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((d) => (
          <article key={d.id} className="card-speed p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-surface-raised border-border flex size-10 items-center justify-center rounded-xl border">
                  <Laptop className="text-accent size-4" />
                </span>
                <div>
                  <p className="font-medium">{d.name}</p>
                  <p className="text-muted-foreground text-xs">{d.os}</p>
                </div>
              </div>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase ${
                  d.active
                    ? "border-success/40 bg-success/10 text-success"
                    : "border-border text-muted-foreground"
                }`}
              >
                {d.active ? "ativo" : "revogado"}
              </span>
            </div>

            <dl className="text-muted-foreground mt-5 space-y-1.5 text-xs">
              <div className="flex justify-between gap-3">
                <dt>Licença</dt>
                <dd className="text-foreground font-mono">{d.licenseKey}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Último acesso</dt>
                <dd className="text-foreground">{d.lastSeen}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>IP</dt>
                <dd className="text-foreground">{d.ip}</dd>
              </div>
            </dl>

            <Button
              variant={d.active ? "outline" : "secondary"}
              className="mt-5 w-full rounded-xl"
              onClick={() => toggle(d.id)}
            >
              <Power className="mr-2 size-4" />
              {d.active ? "Revogar acesso" : "Reativar"}
            </Button>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
