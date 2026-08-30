import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelTech — Loja de Informática e Hardware" },
      {
        name: "description",
        content:
          "Notebooks, PCs gamer, placas de vídeo e periféricos com garantia, montagem sob medida e assistência técnica especializada.",
      },
      { property: "og:title", content: "PixelTech — Loja de Informática e Hardware" },
      {
        property: "og:description",
        content: "Hardware, PCs gamer sob medida e assistência técnica com garantia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const produtos = [
  {
    name: "PC Gamer Neon",
    origin: "Ryzen 7 · RTX 4070 · 32GB",
    notes: "Montagem sob medida, refrigeração líquida e cable management caprichado.",
    level: "Gamer",
    price: "R$ 8.499",
    accent: "var(--neon-magenta)",
    id: "PC-4070",
  },
  {
    name: "Notebook Work Pro",
    origin: "Core i7 · 16GB · SSD 1TB",
    notes: "Leve, tela IPS 100% sRGB e bateria para o dia inteiro de trabalho.",
    level: "Trabalho",
    price: "R$ 5.190",
    accent: "var(--neon-cyan)",
    id: "NB-1671",
  },
  {
    name: "Setup Periféricos",
    origin: "Teclado mecânico · Mouse 26K DPI",
    notes: "Kit completo com headset, mousepad XL e iluminação RGB sincronizada.",
    level: "Combo",
    price: "R$ 1.290",
    accent: "var(--neon-lime)",
    id: "KIT-0290",
  },
];

const steps = [
  { n: "01", t: "Você escolhe", d: "Monte seu PC no balcão ou fale com a gente pelo WhatsApp: indicamos as peças certas para o seu uso." },
  { n: "02", t: "Montagem e testes", d: "Montagem profissional, aplicação de pasta térmica premium e testes de estresse antes da entrega." },
  { n: "03", t: "Entrega e suporte", d: "Entrega rápida na região e 12 meses de garantia com assistência técnica na loja." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 border-b border-border/50 backdrop-blur-md sticky top-0 z-50">
        <a href="/" className="font-display text-2xl font-bold tracking-tighter">
          PIXEL<span className="text-gradient-cryo">TECH</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#produtos" className="transition-colors hover:text-primary">
            Produtos
          </a>
          <a href="#servicos" className="transition-colors hover:text-primary">
            Serviços
          </a>
        </nav>
        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 hover:text-primary">
          Falar no WhatsApp
        </Button>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="relative z-10">
            <div className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              Hardware com garantia
            </div>
            <h1 className="text-6xl font-bold leading-[1] sm:text-7xl lg:text-8xl tracking-tighter">
              Sua loja de
              <span className="text-gradient-cryo block"> informática.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Notebooks, PCs gamer montados sob medida, upgrades, peças e assistência técnica. Atendimento de quem entende de hardware de verdade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full">
                Ver produtos
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground hover:bg-accent/10 px-8 rounded-full">
                Montar meu PC
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/30 pt-8">
              {[
                ["12 meses", "Garantia"],
                ["24h", "Orçamento"],
                ["+3.000", "PCs montados"],
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
                <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-48 h-48 border border-primary/50 rounded-2xl animate-float flex items-center justify-center backdrop-blur-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/40 opacity-70"></div>
                  <div className="text-3xl font-bold -rotate-45 text-primary-foreground tracking-widest">SETUP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-deep-gradient py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold sm:text-5xl tracking-tight">Destaques da loja</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Configurações prontas para jogar, trabalhar e criar — todas testadas antes de sair da bancada.
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

        <section id="servicos" className="mx-auto max-w-6xl px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold sm:text-5xl">Como funciona</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Do orçamento à entrega, sem enrolação e com suporte de verdade.
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
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Precisa de um upgrade?</h3>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto mb-10">
              Mande a configuração atual do seu PC e monte um orçamento sem compromisso.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground px-12 rounded-full text-lg font-bold">
              Pedir orçamento
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-xs text-muted-foreground sm:flex-row sm:justify-between items-center">
          <div className="font-display text-lg font-bold tracking-tighter text-foreground">
            PIXEL<span className="text-gradient-cryo">TECH</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Loja física</a>
          </div>
          <p>© 2026 PixelTech Informática. Todos os direitos reservados.</p>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 w-full overflow-hidden bg-accent/15 border-t border-accent/30 h-8 flex items-center z-[60]">
        <div className="animate-ticker whitespace-nowrap text-[10px] font-mono text-primary uppercase tracking-[0.2em] flex gap-12">
          <span>[ Frete grátis acima de R$ 499 ]</span>
          <span>[ Parcelamos em 12x ]</span>
          <span>[ Formatação e limpeza a partir de R$ 89 ]</span>
          <span>[ Garantia de 12 meses ]</span>
          <span>[ Orçamento em até 24h ]</span>
          <span>[ Frete grátis acima de R$ 499 ]</span>
          <span>[ Parcelamos em 12x ]</span>
        </div>
      </div>
    </div>
  );
}
