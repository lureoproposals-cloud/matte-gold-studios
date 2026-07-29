import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lureo — Weby pro malé firmy a projekty" },
      { name: "description", content: "Studentské studio pro tvorbu webů na míru. Rychlé dodání, transparentní ceny, přímá komunikace." },
    ],
  }),
});

const services = [
  {
    title: "Webové stránky",
    desc: "Jednostránkové i vícestránkové weby na míru. Rychlé načítání, čistý design, správa obsahu bez programátora. Obsah stavím na reálném průzkumu — typicky včetně recenzí a zpětné vazby na vaši firmu, aby web mluvil jazykem, kterému vaši zákazníci rozumí.",
    soon: false,
  },
  {
    title: "Propagace a sociální sítě",
    desc: "Tuto službu aktuálně připravuji a brzy přidám do nabídky. Pokud vás zajímá, napište mi — ozvu se, jakmile bude k dispozici.",
    soon: true,
  },
];

const portfolio = [
  { name: "Projekt připravujeme", tag: "Ukázka brzy", meta: "—" },
  { name: "Projekt připravujeme", tag: "Ukázka brzy", meta: "—" },
  { name: "Projekt připravujeme", tag: "Ukázka brzy", meta: "—" },
  { name: "Projekt připravujeme", tag: "Ukázka brzy", meta: "—" },
  { name: "Projekt připravujeme", tag: "Ukázka brzy", meta: "—" },
  { name: "Projekt připravujeme", tag: "Ukázka brzy", meta: "—" },
];

const pricing = [
  {
    name: "Start",
    price: "2 900",
    tagline: "Jednostránkový web pro jasnou prezentaci",
    items: ["Jednostránkový web", "Responzivní design", "Formulář a kontakty", "Základní SEO"],
  },
  {
    name: "Standard",
    price: "7 900",
    tagline: "Web do 5 podstránek s možností úprav obsahu",
    items: [
      "Web do 5 podstránek",
      "Systém pro úpravu obsahu",
      "Napojení analytiky",
      "Rozšířené SEO",
      "Technická podpora 3 měsíce",
    ],
    featured: true,
  },
];

const process = [
  { title: "Konzultace", desc: "Probereme, co potřebujete a jak má web fungovat. Nezávazně a zdarma." },
  { title: "Návrh", desc: "Připravím design a strukturu webu. Uvidíte ho ještě předtím, než se cokoliv finalizuje." },
  { title: "Schválení a platba", desc: "Až budete s návrhem spokojeni, teprve tehdy řešíme platbu. Nic neplatíte předem." },
  { title: "Dokončení a předání", desc: "Web dolaďím, otestuji a předám i s krátkým zaškolením, jak si obsah sami upravovat." },
];

const faqs = [
  { q: "Musím platit předem?", a: "Ne. Platba se řeší až po schválení návrhu webu — do té doby nic nedlužíte." },
  { q: "Co když se mi návrh nebude líbit?", a: "Návrh společně upravíme, dokud nebude odpovídat vaší představě. Teprve po schválení postupujeme k platbě a dokončení." },
  { q: "Jak dlouho trvá dodání webu?", a: "Obvykle do 2–3 týdnů od konzultace, podle rozsahu projektu." },
  { q: "Musím rozumět technice?", a: "Ne. Web vám předám s jednoduchým návodem, jak si sami upravovat texty a obsah." },
  { q: "Co když budu chtít později něco změnit?", a: "Ozvěte se — drobné úpravy vyřešíme, větší rozšíření webu naceníme zvlášť a předem." },
];

function Index() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="font-serif text-lg tracking-tight">
            Lureo <span className="text-mute">·</span>
          </a>
          <nav className="hidden gap-8 text-sm text-mute md:flex">
            <a href="#o-mne" className="transition-colors hover:text-foreground">O mně</a>
            <a href="#sluzby" className="transition-colors hover:text-foreground">Služby</a>
            <a href="#portfolio" className="transition-colors hover:text-foreground">Portfolio</a>
            <a href="#postup" className="transition-colors hover:text-foreground">Jak to probíhá</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
            <a href="#cenik" className="transition-colors hover:text-foreground">Ceník</a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="hidden border border-gold bg-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#141210] transition-opacity duration-200 hover:opacity-90 md:inline-block"
          >
            Konzultace
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="max-w-3xl">
          <span className="eyebrow hero-stagger hero-stagger-1 inline-block">LUREO · EST. 2026</span>
          <h1 className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl hero-stagger hero-stagger-2">
            Weby s klidem <em className="italic text-gold">řemesla.</em>
          </h1>
          <span className="gold-underline mt-10 w-40" />
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-mute hero-stagger hero-stagger-3">
            Malé studentské studio pro majitele menších firem a projektů, kteří chtějí prezentaci
            odpovídající kvalitě své práce. Bez šablon, bez zbytečností. Propagaci a sociální sítě přidávám do nabídky brzy.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8 hero-stagger hero-stagger-4">
            <a
              href="#kontakt"
              className="border border-gold bg-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-[#141210] transition-opacity duration-200 hover:opacity-90"
            >
              Domluvit konzultaci
            </a>
            <a href="#portfolio" className="text-sm text-mute underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline">
              Prohlédnout práce
            </a>
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="o-mne" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">O mně</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Jeden člověk, se kterým se domluvíte přímo.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-mute md:text-lg">
              <p>
                Jsem student a weby tvořím moderním, AI-asistovaným procesem — od průzkumu a obsahu
                až po finální design. Díky tomu umím dodat kvalitní web rychle a za rozumnou cenu.
              </p>
              <p>
                Pracuji na malém počtu zakázek najednou, aby každá dostala pozornost. Termíny držím,
                ceny říkám dopředu.
              </p>
            </div>
            <dl className="mt-14 border-t border-white/10 pt-10">
              <div>
                <dt className="eyebrow">Obvyklé dodání webu</dt>
                <dd className="mt-3 font-serif text-3xl md:text-4xl">do 2–3 týdnů</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="sluzby" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
        <span className="eyebrow">Služby</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl">Co pro vás umím připravit.</h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`card-hover relative flex flex-col justify-between border border-white/10 bg-card p-8 md:p-10 ${
                s.soon ? "opacity-70" : ""
              }`}
            >

              {s.soon && (
                <span className="absolute right-6 top-6 border border-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-mute">
                  Připravujeme
                </span>
              )}
              <div>
                <span className="font-serif text-sm text-mute">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-mute md:text-base">{s.desc}</p>
              </div>
              <div className="mt-10 h-px w-10 bg-white/20" />
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="portfolio" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl">Vybraná práce.</h2>
          </div>
          <p className="max-w-sm text-sm text-mute">
            Aktuálně pracuji na prvních referenčních projektech. Ukázky doplním, jakmile budou hotové.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, idx) => (
            <div
              key={idx}
              className="card-hover block border border-white/10 bg-card"
            >

              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1714]">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #ffffff 0 1px, transparent 1px 14px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-sm italic text-mute">{p.tag}</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div className="min-w-0">
                  <h3 className="truncate font-serif text-lg">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mute">{p.tag}</p>
                </div>
                <span className="shrink-0 pl-3 text-xs text-mute">{p.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="postup" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
        <span className="eyebrow">Jak to probíhá</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl">Čtyři kroky k hotovému webu.</h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {process.map((s, i) => (
            <article
              key={s.title}
              className="card-hover relative flex flex-col justify-between border border-white/10 bg-card p-8 md:p-10"
            >

              <div>
                <span className="font-serif text-sm text-mute">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-mute md:text-base">{s.desc}</p>
              </div>
              <div className="mt-10 h-px w-10 bg-white/20" />
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="faq" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Časté otázky</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl">Co vás asi zajímá.</h2>
          </div>
          <div className="md:col-span-8 border-t border-white/10">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="cenik" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="eyebrow">Ceník</span>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl">Dva balíčky, transparentně.</h2>
          <p className="mt-6 text-base leading-relaxed text-mute">
            Uvedené ceny jsou orientační a slouží pro první představu. Přesnou nabídku připravím
            po úvodní konzultaci — vždy zdarma a nezávazně.
          </p>
          <p className="mt-6 border-l-2 border-gold pl-4 text-base text-foreground">
            Nic neplatíte předem — platbu řešíme až po schválení návrhu.
          </p>
        </div>


        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pricing.map((p) => (
            <div
              key={p.name}
              className="card-hover flex flex-col border border-white/10 bg-card p-8 md:p-10"
            >

              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">{p.name}</h3>
                {p.featured && <span className="eyebrow">Doporučeno</span>}
              </div>
              <p className="mt-3 text-sm text-mute">{p.tagline}</p>
              <div className="mt-10 flex items-baseline gap-2">
                <span className="font-serif text-5xl">{p.price}</span>
                <span className="text-sm text-mute">Kč</span>
              </div>
              <div className="my-8 h-px bg-white/10" />
              <ul className="space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-white/40" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="mt-10 border border-white/20 px-6 py-3 text-center text-xs uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:border-white/60"
              >
                Poptat balíček
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-mute">
          Správu sociálních sítí připravuji do budoucí nabídky — dejte mi vědět, pokud máte zájem
          být mezi prvními.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="kontakt" data-reveal className="reveal mx-auto max-w-6xl px-6 py-28 md:py-36">
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
                <dd className="mt-2">lureoproposals@gmail.com</dd>
              </div>
              <div>
                <dt className="eyebrow">Telefon</dt>
                <dd className="mt-2">+420 703 395 225</dd>
              </div>
              <div>
                <dt className="eyebrow">Sídlo</dt>
                <dd className="mt-2">Okres Bruntál, Česká republika</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-7 border border-white/10 bg-card p-8 md:p-12"
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
                  className="mt-3 w-full border-0 border-b border-white/15 bg-transparent pb-3 text-foreground placeholder:text-mute/70 focus:border-white/50 focus:outline-none"
                />
              </div>
              <div>
                <label className="eyebrow" htmlFor="budget">Orientační rozpočet</label>
                <select
                  id="budget"
                  className="mt-3 w-full border-0 border-b border-white/15 bg-transparent pb-3 text-foreground focus:border-white/50 focus:outline-none"
                >
                  <option className="bg-card">Do 15 000 Kč</option>
                  <option className="bg-card">15 000 – 40 000 Kč</option>
                  <option className="bg-card">40 000 Kč a více</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-12 border border-gold bg-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-[#141210] transition-opacity duration-200 hover:opacity-90"
            >

              {sent ? "Odesláno · děkuji" : "Odeslat poptávku"}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs text-mute">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Lureo · Studentské studio pro tvorbu webů</span>
            <span className="uppercase tracking-[0.2em]">Okres Bruntál · Česká republika</span>
          </div>
          <p className="max-w-3xl text-[0.7rem] leading-relaxed text-mute/80">
            Služby jsou poskytovány v rámci příležitostné výdělečné činnosti v souladu s platnou
            legislativou.
          </p>
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
        className="mt-3 w-full border-0 border-b border-white/15 bg-transparent pb-3 text-foreground placeholder:text-mute/70 focus:border-white/50 focus:outline-none"
      />
    </div>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setMaxH(open ? ref.current.scrollHeight : 0);
  }, [open, a]);

  return (
    <div className="border-b border-white/10 py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 text-left font-serif text-lg md:text-xl"
      >
        <span>{q}</span>
        <span
          className={`shrink-0 text-mute transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`faq-panel ${open ? "is-open" : ""}`}
        style={{ maxHeight: `${maxH}px` }}
      >
        <p ref={ref} className="pt-4 text-sm leading-relaxed text-mute md:text-base">
          {a}
        </p>
      </div>
    </div>
  );
}

