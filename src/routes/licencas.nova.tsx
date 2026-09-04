import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateKey, plans } from "@/lib/speed-data";
import { RefreshCw, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/licencas/nova")({
  head: () => ({
    meta: [
      { title: "Nova licença — SPEED License Manager" },
      {
        name: "description",
        content: "Gere uma nova chave de licença do SPEED com plano, validade e limite de máquinas.",
      },
      { property: "og:title", content: "Nova licença — SPEED License Manager" },
      {
        property: "og:description",
        content: "Emita chaves do SPEED definindo plano, validade e número de ativações.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewLicense,
});

function NewLicense() {
  const navigate = useNavigate();
  const [key, setKey] = useState("SPEED-XXXX-XXXX-XXXX");
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Pro");
  const [seats, setSeats] = useState(3);
  const [expiresAt, setExpiresAt] = useState("");
  const [saving, setSaving] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!customer || !email) {
      toast.error("Preencha o cliente e o e-mail.");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success("Licença criada", { description: key });
      void navigate({ to: "/licencas" });
    }, 700);
  }

  return (
    <AppShell title="Nova licença" subtitle="Gere uma chave e defina os limites de uso.">
      <form onSubmit={submit} className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="card-speed space-y-5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="customer">Cliente</Label>
              <Input
                id="customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                placeholder="Atlas Studio"
                className="bg-background/60 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ops@atlasstudio.com"
                className="bg-background/60 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Plano</Label>
            <div className="flex flex-wrap gap-2">
              {plans.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlan(p)}
                  className={`rounded-xl border px-4 py-2 text-sm transition-all ${
                    plan === p
                      ? "border-primary/60 bg-primary/15 glow-ring"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="seats">Limite de máquinas</Label>
              <Input
                id="seats"
                type="number"
                min={1}
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="bg-background/60 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expires">Validade</Label>
              <Input
                id="expires"
                type="date"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
                className="bg-background/60 rounded-xl"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              disabled={saving}
              className="bg-gradient-speed rounded-full px-8 font-semibold"
            >
              {saving ? "Emitindo..." : "Emitir licença"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-full"
              onClick={() => void navigate({ to: "/licencas" })}
            >
              Cancelar
            </Button>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card-speed p-6">
            <p className="text-muted-foreground text-xs tracking-[0.16em] uppercase">Chave gerada</p>
            <p className="text-gradient-speed font-display mt-3 text-xl font-bold break-all">{key}</p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full rounded-xl"
              onClick={() => {
                setKey(generateKey());
                toast("Nova chave gerada");
              }}
            >
              <RefreshCw className="mr-2 size-4" /> Gerar outra
            </Button>
          </div>

          <div className="card-speed p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-success size-4" />
              <p className="text-sm font-medium">Resumo</p>
            </div>
            <dl className="text-muted-foreground mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Plano</dt>
                <dd className="text-foreground">{plan}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Máquinas</dt>
                <dd className="text-foreground">{seats}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Validade</dt>
                <dd className="text-foreground">{expiresAt || "—"}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </form>
    </AppShell>
  );
}
