import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Snowfall } from "@/components/Snowfall";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mar Azul Pesca — Equipamentos e Pescarias Guiadas" },
      {
        name: "description",
        content:
          "Varas, molinetes, iscas e pescarias guiadas em água doce e salgada. Equipamento testado por quem pesca de verdade.",
      },
      { property: "og:title", content: "Mar Azul Pesca — Equipamentos e Pescarias Guiadas" },
      {
        property: "og:description",
        content: "Loja de pesca e pescarias guiadas: varas, molinetes, iscas e barcos com guia local.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const produtos = [
  {
    name: "Kit Pesqueiro",
    origin: "Vara 1,80m · Molinete 4000",
    notes: "Combo ideal para tilápia e tambaqui em pesqueiros, com linha e iscas inclusas.",
    level: "Água doce",
    price: "R$ 389",
    accent: "var(--neon-red)",
    id: "KP-1804",
  },
  {
    name: "Set Costeiro",
    origin: "Vara 2,40m · Carretilha 200",
    notes: "Ação média-pesada para robalo e pescada na praia, com componentes anticorrosão.",
    level: "Água salgada",
    price: "R$ 1.150",
    accent: "var(--neon-orange)",
    id: "SC-2400",
  },
  {
    name: "Caixa de Iscas Pro",
    origin: "36 iscas artificiais",
    notes: "Plugs, jigs e softbaits selecionados para dourado, traíra e tucunaré.",
    level: "Artificiais",
    price: "R$ 279",
    accent: "var(--neon-lime)",
    id: "IS-0036",
  },
];

const steps = [
  { n: "01", t: "Escolha o roteiro", d: "Represa, rio ou pesca oceânica: montamos o roteiro conforme a espécie que você quer fisgar." },
  { n: "02", t: "Equipamento pronto", d: "Barco, coletes, varas e iscas revisados antes de cada saída — é só chegar e embarcar." },
  { n: "03", t: "Guia na água", d: "Guia local experiente indicando os pontos, técnicas e horários de melhor movimento." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Snowfall />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 border-b border-border/50 backdrop-blur-md sticky top-0 z-50">

        <a href="/" className="font-display text-2xl font-bold tracking-tighter">
          MAR<span className="text-gradient-cryo">AZUL</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#loja" className="transition-colors hover:text-primary">
            Loja
          </a>
          <a href="#pescarias" className="transition-colors hover:text-primary">
            Pescarias
          </a>
        </nav>
        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 hover:text-primary">
          Reservar saída
        </Button>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="relative z-10">
            <div className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              Água doce e salgada
            </div>
            <h1 className="text-6xl font-bold leading-[1] sm:text-7xl lg:text-8xl tracking-tighter">
              A melhor pesca
              <span className="text-gradient-cryo block"> começa aqui.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Equipamentos selecionados, iscas que funcionam e pescarias guiadas com barco e guia local. Do pesqueiro ao mar aberto.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full">
                Ver equipamentos
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground hover:bg-accent/10 px-8 rounded-full">
                Agendar pescaria
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/30 pt-8">
              {[
                ["18 anos", "Na água"],
                ["+40", "Pontos mapeados"],
                ["4.9★", "Avaliação"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-foreground">{v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 animate-pulse-glow rounded-full"></div>
            <div className="relative aspect-square rounded-3xl glass-panel flex items-center justify-center p-12 overflow-hidden shadow-2xl">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-48 h-48 border border-primary/50 rounded-2xl animate-float flex items-center justify-center backdrop-blur-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/40 opacity-70"></div>
                  <div className="text-3xl font-bold -rotate-45 text-primary-foreground tracking-widest">PESCA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="loja" className="bg-deep-gradient py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold sm:text-5xl tracking-tight">Kits que pescam</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Combos montados por guias, prontos para o pesqueiro, o rio ou a beira da praia.
                </p>
              </div>
              <div className="text-xs font-mono text-accent/80">[ ESTOQUE DISPONÍVEL ]</div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {produtos.map((f) => (
                <article
                  key={f.name}
                  className="group relative rounded-2xl border border-border/40 bg-card/40 p-8 transition-all hover:bg-card/70 hover:border-accent/60 hover:shadow-glow overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-tighter">Em estoque</span>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: f.accent }}></div>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold tracking-tight">{f.name}</h3>
                    <span className="font-display text-xl text-primary">{f.price}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-accent mb-8 font-mono">{f.origin}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-8 min-h-[4rem]">{f.notes}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">COD: {f.id}</span>
                    <span className="text-[10px] font-mono text-primary uppercase border border-primary/40 px-2 py-0.5 rounded">
                      {f.level}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pescarias" className="mx-auto max-w-6xl px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold sm:text-5xl">Como funciona a pescaria</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Saídas de meio período ou dia inteiro, com tudo incluso. Iniciante ou veterano, tem roteiro pra você.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative group p-8 rounded-2xl border border-border/40 glass-panel transition-all hover:border-accent/50">
                <div className="text-4xl font-mono font-bold text-primary/30 mb-4 group-hover:text-primary transition-colors">{s.n}</div>
                <h3 className="text-xl font-bold mb-4">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="mt-6 w-full h-1 bg-secondary rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-accent group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/15 to-accent/20 p-12 md:p-20 text-center border border-primary/25">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Bora pra água?</h3>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto mb-10">
              Escolha a data e a espécie alvo — a gente cuida do barco, do equipamento e do ponto certo.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground px-12 rounded-full text-lg font-bold">
              Reservar pescaria
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-xs text-muted-foreground sm:flex-row sm:justify-between items-center">
          <div className="font-display text-lg font-bold tracking-tighter text-foreground">
            MAR<span className="text-gradient-cryo">AZUL</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Loja física</a>
          </div>
          <p>© 2026 Mar Azul Pesca. Todos os direitos reservados.</p>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 w-full overflow-hidden bg-accent/15 border-t border-accent/30 h-8 flex items-center z-[60]">
        <div className="animate-ticker whitespace-nowrap text-[10px] font-mono text-primary uppercase tracking-[0.2em] flex gap-12">
          <span>[ Maré alta 06:20 · 18:40 ]</span>
          <span>[ Frete grátis acima de R$ 399 ]</span>
          <span>[ Saídas diárias às 5h ]</span>
          <span>[ Licença de pesca inclusa ]</span>
          <span>[ Maré alta 06:20 · 18:40 ]</span>
          <span>[ Frete grátis acima de R$ 399 ]</span>
        </div>
      </div>
    </div>
  );
}
