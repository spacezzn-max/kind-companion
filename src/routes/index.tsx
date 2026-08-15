import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cryo-Cream — The Future of Frozen" },
      {
        name: "description",
        content:
          "Molecular gelato crafted at absolute zero. Delivered in cryo-pods. Experience the next generation of ice cream.",
      },
      { property: "og:title", content: "Cryo-Cream — The Future of Frozen" },
      {
        property: "og:description",
        content: "Molecular synthesis gelato, flash-frozen at -196°C.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const flavors = [
  {
    name: "Neon Vanilla",
    origin: "Molecular Synthesis · V3.2",
    notes: "Bioluminescent vanilla bean, ionized cream, ozone",
    level: "Classic",
    price: "$12",
    accent: "var(--neon-cyan)",
  },
  {
    name: "Quantum Choc",
    origin: "Deep Core Cocoa · V5.0",
    notes: "70% dark matter chocolate, sea salt bits, fractal crunch",
    level: "Intense",
    price: "$14",
    accent: "var(--neon-magenta)",
  },
  {
    name: "Plasma Mint",
    origin: "Hyper-Cool Extract · V2.1",
    notes: "Cold-press mint, liquid nitrogen swirl, carbon crystals",
    level: "Refresh",
    price: "$13",
    accent: "var(--neon-lime)",
  },
];

const steps = [
  { n: "01", t: "Molecular Synthesis", d: "Flavors engineered at the atomic level for maximum sensory impact." },
  { n: "02", t: "Cryo-Flash Freeze", d: "Instant vitrification at -196°C using liquid nitrogen to prevent ice crystals." },
  { n: "03", t: "Warp Speed Delivery", d: "Shipped in pressurized cryo-pods to maintain structural integrity." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 border-b border-border/50 backdrop-blur-md sticky top-0 z-50">
        <a href="/" className="font-display text-2xl font-bold tracking-tighter">
          CRYO<span className="text-gradient-cryo">CREAM</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#lab" className="transition-colors hover:text-primary">
            Flavor Lab
          </a>
          <a href="#process" className="transition-colors hover:text-primary">
            The Process
          </a>
        </nav>
        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 hover:text-primary">
          Launch Pod
        </Button>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="relative z-10">
            <div className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              Next-Gen Gelato
            </div>
            <h1 className="text-6xl font-bold leading-[1] sm:text-7xl lg:text-8xl tracking-tighter">
              The Future
              <span className="text-gradient-cryo block"> of Frozen.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Experience molecular gelato vitrified at absolute zero. No crystals. No compromise. Just pure sensory distortion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full">
                Enter Flavor Lab
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground hover:bg-white/5 px-8 rounded-full">
                Our Tech
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/30 pt-8">
              {[
                ["-196°C", "Vitrification"],
                ["0.0μm", "Crystal Size"],
                ["8.4k", "Simulations"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-foreground">{v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 animate-pulse-glow rounded-full"></div>
             <div className="relative aspect-square rounded-3xl glass-panel flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                <div className="w-full h-full relative flex items-center justify-center">
                    <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative w-48 h-48 border border-primary/50 rounded-2xl animate-float flex items-center justify-center backdrop-blur-md overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-50"></div>
                        <div className="text-4xl font-bold -rotate-45 text-white tracking-widest text-shadow-glow">CRYO</div>
                    </div>
                </div>
             </div>
          </div>
        </section>

        <section id="lab" className="bg-deep-gradient py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold sm:text-5xl tracking-tight">Active Prototypes</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Our current batch of molecularly synthesized gelatos, available for immediate deployment.
                </p>
              </div>
              <div className="text-xs font-mono text-primary/70">
                [ STATUS: OPTIMIZED ]
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {flavors.map((f) => (
                <article
                  key={f.name}
                  className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4">
                    <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: f.accent }}></div>
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold">{f.name}</h3>
                    <span className="font-display text-xl text-primary">{f.price}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8">
                    {f.origin}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                    {f.notes}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="h-px flex-1 bg-border/50"></span>
                    <span className="text-[10px] font-mono text-primary uppercase">
                      {f.level}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold sm:text-5xl">Engineered for Euphoria</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We've redesigned the ice cream supply chain from the atom up.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative group">
                <div className="text-6xl font-bold text-border/20 absolute -top-10 -left-4 group-hover:text-primary/10 transition-colors">{s.n}</div>
                <h3 className="mt-4 text-2xl font-bold relative z-10">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground relative z-10">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 md:p-20 text-center border border-primary/20">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
             <h3 className="text-3xl md:text-5xl font-bold mb-6">Join the Beta</h3>
             <p className="mt-2 text-muted-foreground max-w-xl mx-auto mb-10">
               Be among the first to receive weekly cryo-pod deliveries.
             </p>
             <Button size="lg" className="bg-primary text-primary-foreground px-12 rounded-full text-lg font-bold">
               Initialize Subscription
             </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-xs text-muted-foreground sm:flex-row sm:justify-between items-center">
          <div className="font-display text-lg font-bold tracking-tighter text-foreground">
            CRYO<span className="text-gradient-cryo">CREAM</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Discord</a>
          </div>
          <p>© {new Date().getFullYear()} Cryo-Cream Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
