import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember & Oak — Roasted to Order, Shipped in 24h" },
      {
        name: "description",
        content:
          "Ember & Oak roasts single-origin coffee in small batches and ships within 24 hours. Choose your roast, set your rhythm, skip anytime.",
      },
      { property: "og:title", content: "Ember & Oak — Roasted to Order, Shipped in 24h" },
      {
        property: "og:description",
        content: "Single-origin small-batch coffee, roasted the day it ships.",
      },
    ],
  }),
  component: Index,
});

const roasts = [
  {
    name: "Kayanza",
    origin: "Burundi · Washed",
    notes: "Blackcurrant, cocoa nib, orange peel",
    level: "Light",
    price: "$21",
  },
  {
    name: "Cerrado",
    origin: "Brazil · Natural",
    notes: "Praline, brown sugar, toasted almond",
    level: "Medium",
    price: "$19",
  },
  {
    name: "Nightwatch",
    origin: "Blend · House",
    notes: "Dark chocolate, molasses, cedar",
    level: "Dark",
    price: "$18",
  },
];

const steps = [
  { n: "01", t: "Pick a roast", d: "Three rotating origins, tasting notes written by the roaster." },
  { n: "02", t: "Set the rhythm", d: "Weekly, fortnightly, or monthly. Skip or pause in a tap." },
  { n: "03", t: "Roasted to order", d: "We roast the morning your bag ships. Never shelf-aged." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          Ember<span className="text-gradient-ember"> &amp; </span>Oak
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#roasts" className="transition-colors hover:text-foreground">
            Roasts
          </a>
          <a href="#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
        </nav>
        <Button variant="roast" size="sm" asChild>
          <a href="#roasts">Start a box</a>
        </Button>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:pt-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Small-batch · Roasted to order
            </p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">
              Coffee that leaves the drum
              <span className="text-gradient-ember"> the day it ships.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              We roast in 12kg batches, cup every lot twice, and put the roast date on the bag —
              because freshness is the only shortcut worth taking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ember" size="lg" asChild>
                <a href="#roasts">Choose your roast</a>
              </Button>
              <Button variant="quiet" size="lg" asChild>
                <a href="#how">How it works</a>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["24h", "Roast to dispatch"],
                ["12kg", "Batch size"],
                ["9", "Origins this year"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl">{v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={heroCoffee}
              alt="Freshly roasted coffee beans pouring from a copper scoop onto dark slate"
              width={1600}
              height={1200}
              className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </section>

        <section id="roasts" className="bg-roast-gradient py-20 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl sm:text-4xl">On the bench this month</h2>
            <p className="mt-3 max-w-lg text-sm text-primary-foreground/70">
              Three lots, rotated as they sell through. Every bag is 250g whole bean or ground to
              your brewer.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {roasts.map((r) => (
                <article
                  key={r.name}
                  className="group rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-colors hover:border-ember/60"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl text-primary-foreground">{r.name}</h3>
                    <span className="font-display text-lg text-ember">{r.price}</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                    {r.origin}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80">
                    {r.notes}
                  </p>
                  <span className="mt-6 inline-block rounded-full border border-ember/50 px-3 py-1 text-xs text-ember">
                    {r.level} roast
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl sm:text-4xl">A subscription that behaves</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <span className="font-display text-sm text-ember">{s.n}</span>
                <h3 className="mt-3 text-xl">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-start gap-5 rounded-lg bg-card p-10 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl">First bag ships free</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No commitment. Cancel after one cup if it isn't for you.
              </p>
            </div>
            <Button variant="ember" size="lg" asChild>
              <a href="#roasts">Start a box</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ember &amp; Oak Roasters</p>
          <p>Roasted in small batches. Shipped everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
