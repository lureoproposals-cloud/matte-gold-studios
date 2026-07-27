import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ateliér — Weby a propagace pro malé firmy" },
      { name: "description", content: "Studentské marketingové studio. Weby na míru, propagace a vizuální identita pro menší projekty a firmy." },
    ],
  }),
});

const services = [
  { title: "Webové stránky", desc: "Statické i redakční weby na míru — od jednoduchých vizitek po vícestránkové prezentace s CMS." },
  { title: "Vizuální identita", desc: "Logotypy, barevné systémy a typografické sety s ohledem na budoucí použitelnost napříč kanály." },
  { title: "Propagace a obsah", desc: "Sociální sítě, výkonnostní kampaně a copywriting, který mluví jazykem vaší značky." },
  { title: "Konzultace a strategie", desc: "Audit stávajícího webu, marketingová strategie a doporučení dalších kroků." },
];

const portfolio = [
  { name: "Vinařství Lipová", tag: "Web · Identita", meta: "2025" },
  { name: "Advokátní kancelář Novák", tag: "Web · SEO", meta: "2025" },
  { name: "Kavárna Zrno", tag: "Identita · Sociální sítě", meta: "2024" },
  { name: "Truhlářství Malý", tag: "Web · Fotografie", meta: "2024" },
  { name: "Ateliér Hedvábí", tag: "E-shop", meta: "2024" },
  { name: "Bistro Pramen", tag: "Web · Menu design", meta: "2023" },
];

const pricing = [
  {
    name: "Základ",
    price: "12 000",
    tagline: "Pro jednoduché prezentace a vizitky",
    items: ["Jednostránkový web", "Responzivní design", "Formulář a kontakty", "Základní SEO"],
  },
  {
    name: "Studio",
    price: "28 000",
    tagline: "Nejčastější volba menších firem",
    items: ["Vícestránkový web", "Systém pro úpravu obsahu", "Vizuální identita (základ)", "Napojení analytiky", "Poradenství 3 měsíce"],
    featured: true,
  },
  {
    name: "Kompletní",
    price: "60 000",
    tagline: "Web, značka i propagace na klíč",
    items: ["Web na míru vč. copy", "Kompletní identita", "Foto produkce", "Kampaně a správa sítí", "Poradenství 6 měsíců"],
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="font-serif text-lg tracking-tight">
            Ateliér <span className="text-gold">·</span>
          </a>
          <nav className="hidden gap-8 text-sm text-mute md:flex">
            <a href="#o-mne" className="transition-colors hover:text-foreground">O mně</a>
            <a href="#sluzby" className="transition-colors hover:text-foreground">Služby</a>
            <a href="#portfolio" className="transition-colors hover:text-foreground">Portfolio</a>
            <a href="#cenik" className="transition-colors hover:text-foreground">Ceník</a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="hidden border border-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-[#141210] md:inline-block"
          >
            Konzultace
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="max-w-3xl fade-up">
          <span className="eyebrow">Studio · Est. 2023</span>
          <h1 className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Weby a propagace<br />
            s klidem <em className="italic text-gold">řemesla.</em>
          </h1>
          <span className="gold-underline mt-10 w-40" />
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-mute">
            Malé studentské studio pro majitele menších firem a projektů, kteří chtějí prezentaci
            odpovídající kvalitě své práce. Bez šablon, bez zbytečností.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#kontakt"
              className="border border-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-[#141210]"
            >
              Domluvit konzultaci
            </a>
            <a href="#portfolio" className="text-sm text-mute underline-offset-4 hover:text-foreground hover:underline">
              Prohlédnout práce
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      <section id="o-mne" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">O mně</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Studuji marketing a už čtvrtým rokem stavím weby.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-mute md:text-lg">
              <p>
                Pracuji převážně s menšími firmami, řemeslníky a rodinnými podniky.
                Rozumím tomu, že rozpočet malé firmy není agenturní — a stejně tak vím,
                že levné šablony po roce nikomu neslouží.
              </p>
              <p>
                Každý projekt vedu sám od první konzultace po spuštění. Bez prostředníků,
                bez korporátní vaty. Jen práce, kterou stojím za svým jménem.
              </p>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-3">
              <div>
                <dt className="eyebrow">Projektů</dt>
                <dd className="mt-3 font-serif text-3xl">32</dd>
              </div>
              <div>
                <dt className="eyebrow">Ročně</dt>
                <dd className="mt-3 font-serif text-3xl">10–14</dd>
              </div>
              <div>
                <dt className="eyebrow">Zkušenosti</dt>
                <dd className="mt-3 font-serif text-3xl">4 roky</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      <section id="sluzby" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <span className="eyebrow">Služby</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl">Čtyři obory, jeden přístup.</h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col justify-between border border-border bg-card p-8 transition-colors hover:border-gold md:p-10"
            >
              <div>
                <span className="font-serif text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-mute md:text-base">{s.desc}</p>
              </div>
              <div className="mt-10 h-px w-10 bg-gold transition-all duration-500 group-hover:w-24" />
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl">Vybraná práce.</h2>
          </div>
          <p className="max-w-sm text-sm text-mute">
            Ukázka nedávných spoluprací. Kompletní portfolio zašlu na vyžádání.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <a
              key={p.name}
              href="#kontakt"
              className="group block border border-border bg-card transition-colors hover:border-gold"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1714]">
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #C9A24B 0 1px, transparent 1px 14px)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div className="min-w-0">
                  <h3 className="font-serif text-lg truncate">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mute">{p.tag}</p>
                </div>
                <span className="shrink-0 pl-3 text-xs text-gold">{p.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      <section id="cenik" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="eyebrow">Ceník</span>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl">Tři balíčky, transparentně.</h2>
          <p className="mt-6 text-base leading-relaxed text-mute">
            Uvedené ceny jsou orientační a slouží pro první představu. Přesnou nabídku připravím
            po úvodní konzultaci — vždy zdarma a nezávazně.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border ${p.featured ? "border-gold" : "border-border"} bg-card p-8 md:p-10`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">{p.name}</h3>
                {p.featured && <span className="eyebrow">Vybíráno</span>}
              </div>
              <p className="mt-3 text-sm text-mute">{p.tagline}</p>
              <div className="mt-10 flex items-baseline gap-2">
                <span className="font-serif text-5xl">{p.price}</span>
                <span className="text-sm text-mute">Kč</span>
              </div>
              <div className="my-8 h-px bg-gold-muted" />
              <ul className="space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-10 border px-6 py-3 text-center text-xs uppercase tracking-[0.22em] transition-colors ${
                  p.featured
                    ? "border-gold text-gold hover:bg-gold hover:text-[#141210]"
                    : "border-border text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                Poptat balíček
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Kontakt</span>
            <h2 className="mt-6 font-serif text-3xl leading-tight md:text-5xl">
              Řekněte mi<br />o svém projektu.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-mute">
              Odpovím obvykle do 24 hodin. Úvodní konzultace je vždy zdarma a bez závazku.
            </p>
            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">E-mail</dt>
                <dd className="mt-2">studio@atelier.cz</dd>
              </div>
              <div>
                <dt className="eyebrow">Telefon</dt>
                <dd className="mt-2">+420 776 000 000</dd>
              </div>
              <div>
                <dt className="eyebrow">Sídlo</dt>
                <dd className="mt-2">Brno, Česká republika</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-7 border border-border bg-card p-8 md:p-12"
          >
            <div className="space-y-8">
              <Field label="Jméno" name="name" placeholder="Jan Novák" required />
              <Field label="E-mail" name="email" type="email" placeholder="jan@firma.cz" required />
              <div>
                <label className="eyebrow" htmlFor="msg">Popis projektu</label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  placeholder="Krátce popište, co máte v plánu…"
                  className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-foreground placeholder:text-mute/70 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="eyebrow" htmlFor="budget">Orientační rozpočet</label>
                <select
                  id="budget"
                  className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-foreground focus:border-gold focus:outline-none"
                >
                  <option className="bg-card">Do 15 000 Kč</option>
                  <option className="bg-card">15 000 – 40 000 Kč</option>
                  <option className="bg-card">40 000 – 80 000 Kč</option>
                  <option className="bg-card">80 000 Kč a více</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-12 border border-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-[#141210]"
            >
              {sent ? "Odesláno · děkuji" : "Odeslat poptávku"}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-xs text-mute md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Ateliér · Studentské marketingové studio</span>
          <span className="tracking-[0.2em] uppercase">Made with care in Brno</span>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-foreground placeholder:text-mute/70 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
