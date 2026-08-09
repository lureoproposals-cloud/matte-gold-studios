import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Lock, Menu, X } from "lucide-react";
import ucetniScreenshot from "../assets/ucetni-sluzby.png";
import autoservisScreenshot from "../assets/autoservis-koncept.png";
import burgerScreenshot from "../assets/burger-koncept.png";
import { BeforeAfter } from "../components/BeforeAfter";
import { HeroIntro } from "../components/HeroIntro";
import { Reveal } from "../components/Reveal";
import { AmbientBubbles } from "../components/AmbientBubbles";
import { CookieConsent } from "../components/CookieConsent";




export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lureo — Weby pro malé firmy a projekty" },
      { name: "description", content: "Studentské studio pro tvorbu webů na míru. Rychlé dodání, transparentní ceny, přímá komunikace." },
      { property: "og:title", content: "Lureo — Weby pro malé firmy a projekty" },
      { property: "og:description", content: "Studentské studio pro tvorbu webů na míru. Rychlé dodání, transparentní ceny, přímá komunikace." },
      { property: "og:image", content: "https://matte-gold-studios.lovable.app/__l5e/assets-v1/35e62c1f-b18c-4ccf-b7ac-46b0447ccc76/og-lureo.png" },
      { name: "twitter:image", content: "https://matte-gold-studios.lovable.app/__l5e/assets-v1/35e62c1f-b18c-4ccf-b7ac-46b0447ccc76/og-lureo.png" },
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
    title: "Správa sociálních sítí",
    desc: "Pravidelná správa Instagramu a Facebooku pro firmy, které mají web a chtějí konzistentní online přítomnost. Měsíční plánování, jednotný vizuální styl a přehled o tom, co vaše publikum zaujme.",
    soon: true,
  },
];

const portfolio = [
  {
    name: "Účetní služby",
    tag: "Web",
    meta: "2026",
    description: "Web pro OSVČ účetní — kompletní prezentace služeb, FAQ a kontaktní formulář.",
    link: "https://lk-ucetnictvi.cz",
    image: ucetniScreenshot,
  },
  {
    name: "Koncept: web pro burger bistro",
    tag: "Koncept",
    meta: "2026",
    description: "Ukázkový projekt — responzivní web s menu, informacemi o rozvozu a kontaktními údaji.",
    image: burgerScreenshot,
  },
  {
    name: "Koncept: web pro autoservis",
    tag: "Koncept",
    meta: "2026",
    description: "Ukázkový projekt — prezentace služeb, sekce o firmě a kontaktní formulář.",
    image: autoservisScreenshot,
  },
];

const pricing = [
  {
    name: "Start",
    price: "1 900",
    tagline: "Jednostránkový web pro jasnou prezentaci",
    items: [
      "Jednostránkový web s kotvovou navigací",
      "Responzivní design pro mobil i desktop",
      "Kontaktní formulář napojený na váš e-mail",
      "Základní SEO — meta tagy, sitemap, rychlé načítání",
      "Nastavení Google Search Console a Google Business Profilu",
    ],
  },
  {
    name: "Standard",
    price: "5 900",
    tagline: "Web do 5 podstránek s možností úprav obsahu",
    items: [
      "Až 5 podstránek s vlastní URL",
      "Systém pro úpravu obsahu bez programátora",
      "Napojení analytiky návštěvnosti",
      "Rozšířené SEO — struktura stránek pro Google",
      "Nastavení Google Search Console a Google Business Profilu",
      "Technická podpora 3 měsíce — opravy chyb a drobné úpravy po předání",
    ],
    featured: true,
  },
];

const socialPricing = [
  {
    name: "Sociální sítě — Basic",
    price: "2 900",
    period: "měsíc",
    tagline: "Pravidelný obsah pro klidný růst",
    items: [
      "4 příspěvky měsíčně na Instagram a Facebook",
      "Jednotný vizuální styl příspěvků",
      "Návrh témat a základní komunikační plán",
      "Bez Stories, bez správy reklam",
    ],
  },
  {
    name: "Sociální sítě — Premium",
    price: "5 900",
    period: "měsíc",
    tagline: "Komplexní péče o vaši online přítomnost",
    items: [
      "8 příspěvků měsíčně na Instagram a Facebook",
      "Stories v ceně (až 12 kusů měsíčně)",
      "Jednotný vizuální styl a brand voice",
      "Základní měsíční přehled výkonu",
      "Možnost správy reklam po domluvě",
    ],
    featured: true,
  },
];

// Získej zdarma na https://web3forms.com (jen zadáš e-mail, žádný účet) a vlož sem.
const WEB3FORMS_ACCESS_KEY = "658a1c2b-7a94-4c64-97ab-d70807063be8";

const process = [
  { title: "Konzultace", desc: "Probereme, co potřebujete a jak má web fungovat. Nezávazně a zdarma." },
  { title: "Návrh", desc: "Připravím design a strukturu webu. Uvidíte ho ještě předtím, než se cokoliv finalizuje." },
  { title: "Schválení a platba", desc: "Až budete s návrhem spokojeni, teprve tehdy řešíme platbu. Nic neplatíte předem." },
  { title: "Dokončení a předání", desc: "Web dolaďím, otestuji a předám i s krátkým zaškolením, jak si obsah sami upravovat." },
];

const faqs = [
  { q: "Musím platit předem?", a: "Ne. Platba se řeší až po schválení návrhu webu — do té doby nic nedlužíte." },
  { q: "Co když se mi návrh nebude líbit?", a: "Návrh společně upravíme, dokud nebude odpovídat vaší představě. Teprve po schválení postupujeme k platbě a dokončení." },
  { q: "Jak dlouho trvá dodání webu?", a: "Obvykle do 5–7 dnů od konzultace — maximálně týden i u rozsáhlejších webů." },
  { q: "Musím rozumět technice?", a: "Ne. Web vám předám s jednoduchým návodem, jak si sami upravovat texty a obsah." },
  { q: "Co když budu chtít později něco změnit?", a: "Ozvěte se — drobné úpravy vyřešíme, větší rozšíření webu naceníme zvlášť a předem." },
];

const navLinks = [
  { href: "#o-mne", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#postup", label: "Jak to probíhá" },
  { href: "#faq", label: "FAQ" },
  { href: "#cenik", label: "Ceník" },
  { href: "#kontakt", label: "Kontakt" },
];

function Index() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  return (
    <div className="relative z-[2] min-h-screen text-foreground">
      <AmbientBubbles />
      <HeroIntro />
      <CookieConsent />
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="font-serif text-lg tracking-tight">
            Lureo <span className="text-mute">·</span>
          </a>
          <nav className="hidden gap-8 text-sm text-mute md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden border border-gold bg-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#141210] transition-opacity duration-200 hover:opacity-90 md:inline-block"
          >
            Konzultace
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Otevřít menu"
            aria-expanded={menuOpen}
            className="text-foreground transition-opacity duration-200 hover:opacity-70 md:hidden"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobilní menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <span className="font-serif text-lg tracking-tight">
            Lureo <span className="text-mute">·</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Zavřít menu"
            className="text-foreground transition-opacity duration-200 hover:opacity-70"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center px-6">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`border-b border-white/10 py-4 font-serif text-2xl tracking-tight transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="px-6 pb-10">
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="block border border-gold bg-gold px-8 py-4 text-center text-xs uppercase tracking-[0.24em] text-[#141210] transition-opacity duration-200 hover:opacity-90"
          >
            Domluvit konzultaci
          </a>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="max-w-3xl">
          <span className="eyebrow hero-stagger hero-stagger-1 inline-block">LUREO · EST. 2026</span>
          <h1 className="hero-sweep mt-8 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl hero-stagger hero-stagger-2">
            Weby s klidem <em className="italic text-gold">řemesla.</em>
          </h1>
          <span className="gold-underline mt-10 w-40" />
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-mute hero-stagger hero-stagger-3">
            Malé studentské studio pro majitele menších firem a projektů, kteří chtějí prezentaci
            odpovídající kvalitě své práce. Bez šablon, bez zbytečností.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8 hero-stagger hero-stagger-4">
            <Magnetic>
              <a
                href="#kontakt"
                className="border border-gold bg-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-[#141210] transition-opacity duration-200 hover:opacity-90"
              >
                Domluvit konzultaci
              </a>
            </Magnetic>
            <a href="#portfolio" className="text-sm text-mute underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline">
              Prohlédnout práce
            </a>
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="o-mne" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
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
                Zastaralý nebo žádný web znamená jediné — zákazníci, kteří vás hledají, skončí
                u konkurence, která se na Googlu objeví jako první. U malé firmy stačí pár
                takových hledání týdně a rozdíl je na tržbách znát.
              </p>
              <p className="font-serif text-xl text-foreground md:text-2xl">Tohle řeším.</p>
              <p>
                Jsem student a weby tvořím moderním, AI-asistovaným procesem — od průzkumu a
                obsahu až po finální design. Proto dodám kvalitní web rychle a za cenu, která
                dává malé firmě smysl.
              </p>
              <p>
                Beru si jen několik zakázek najednou, takže každá dostane plnou pozornost.
                Termíny držím, ceny říkám dopředu a o platbě se bavíme až po schválení návrhu —
                žádná překvapení.
              </p>
            </div>
            <dl className="mt-14 border-t border-white/10 pt-10">
              <div>
                <dt className="eyebrow">Obvyklé dodání webu</dt>
                <dd className="mt-3 font-serif text-3xl md:text-4xl">do 1 týdne</dd>
              </div>
            </dl>
          </div>
        </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="sluzby" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
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
                <span className="font-mono text-sm text-mute">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-mute md:text-base">{s.desc}</p>
              </div>
              <div className="mt-10 h-px w-10 bg-white/20" />
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl">Vybraná práce.</h2>
          </div>
          <p className="max-w-sm text-sm text-mute">
            Výběr z dosavadní práce — od reálných zakázek po vlastní koncepty.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, idx) => (
            <article key={idx} className="card-hover border border-white/10 bg-card">
              <BeforeAfter image={p.image} name={p.name} tag={p.tag} />
              <div className="px-6 py-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-lg">{p.name}</h3>
                  <span className="shrink-0 pl-3 text-xs text-mute">{p.meta}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-mute underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
                  >
                    lk-ucetnictvi.cz
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="postup" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
        <span className="eyebrow">Jak to probíhá</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl">Čtyři kroky k hotovému webu.</h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {process.map((s, i) => (
            <article
              key={s.title}
              className="card-hover relative flex flex-col justify-between border border-white/10 bg-card p-8 md:p-10"
            >

              <div>
                <span className="font-mono text-sm text-mute">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-mute md:text-base">{s.desc}</p>
              </div>
              <div className="mt-10 h-px w-10 bg-white/20" />
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
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
        </Reveal>
      </section>


      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="cenik" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">Ceník</span>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl">Weby a sociální sítě, transparentně.</h2>
          <p className="mt-6 text-base leading-relaxed text-mute">
            Uvedené ceny jsou orientační a slouží pro první představu. Přesnou nabídku připravím
            po úvodní konzultaci — vždy zdarma a nezávazně.
          </p>
          <p className="mt-6 border-l-2 border-gold pl-4 text-base text-foreground">
            Nic neplatíte předem — platbu řešíme až po schválení návrhu.
          </p>
          <div className="mt-10 grid gap-8 border border-white/10 bg-card p-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-lg">Jednostránkový web</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                Vše na jedné stránce s kotvovými odkazy — jako tenhle web. Ideální pro jasnou,
                stručnou prezentaci.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg">Web do 5 podstránek</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                Samostatné stránky s vlastní URL (Domů, Služby, Portfolio, Kontakt…). Hodí se,
                když je obsahu víc, nebo když záleží na SEO jednotlivých stránek.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-2xl">Weby — jednorázová realizace</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-2xl">Správa sociálních sítí — měsíční služba</h3>
          <p className="mt-3 max-w-2xl text-sm text-mute">
            Samostatná měsíční péče pro firmy, které už web mají a chtějí pravidelnou přítomnost na
            Instagramu a Facebooku. Lze kombinovat s webem nebo objednat samostatně.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {socialPricing.map((p) => (
              <div
                key={p.name}
                className="relative flex flex-col border border-white/[0.07] bg-card p-8 opacity-[0.58] saturate-50 md:p-10"
              >
                <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 border border-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-mute">
                  <Lock size={11} strokeWidth={1.5} />
                  Připravujeme
                </span>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{p.name}</h3>
                </div>
                <p className="mt-3 text-sm text-mute">{p.tagline}</p>
                <div className="mt-10 flex items-baseline gap-2">
                  <span className="font-serif text-5xl">{p.price}</span>
                  <span className="text-sm text-mute">{p.period ? `Kč / ${p.period}` : "Kč"}</span>
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
                <span
                  aria-disabled="true"
                  className="mt-10 cursor-not-allowed border border-white/10 px-6 py-3 text-center text-xs uppercase tracking-[0.22em] text-mute"
                >
                  Poptat balíček
                </span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="h-px w-full bg-white/10" /></div>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
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
                <dd className="mt-2">Celá ČR · konzultace online i osobně dle domluvy</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formEl = e.currentTarget;
              const data = new FormData(formEl);
              // Honeypot — boti vyplní skryté pole, odeslání tiše ignorujeme
              if (data.get("web_url")) {
                formEl.reset();
                setFormStatus("sent");
                return;
              }
              setFormStatus("sending");
              data.append("access_key", WEB3FORMS_ACCESS_KEY);
              data.append("subject", "Nová poptávka z webu Lureo");
              try {
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: data,
                });
                const result = await res.json();
                if (result.success) {
                  setFormStatus("sent");
                  formEl.reset();
                } else {
                  setFormStatus("error");
                }
              } catch {
                setFormStatus("error");
              }
            }}
            className="md:col-span-7 border border-white/10 bg-card p-8 md:p-12"
          >
            <div className="space-y-8">
              <Field label="Jméno" name="name" placeholder="Jan Novák" required />
              <Field label="E-mail" name="email" type="email" placeholder="jan@firma.cz" required />
              <div>
                <label className="eyebrow" htmlFor="msg">Popis projektu</label>
                <textarea
                  id="msg"
                  name="message"
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
                  name="budget"
                  className="mt-3 w-full border-0 border-b border-white/15 bg-transparent pb-3 text-foreground focus:border-white/50 focus:outline-none"
                >
                  <option className="bg-card">Do 15 000 Kč</option>
                  <option className="bg-card">15 000 – 40 000 Kč</option>
                  <option className="bg-card">40 000 Kč a více</option>
                </select>
              </div>
              {/* Honeypot proti spamu — skryté mimo obrazovku, reálný uživatel ho nevyplní */}
              <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="web_url">Webová stránka</label>
                <input
                  id="web_url"
                  name="web_url"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="mt-12 border border-gold bg-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-[#141210] transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formStatus === "sending"
                ? "Odesílám…"
                : formStatus === "sent"
                ? "Odesláno · děkuji"
                : "Odeslat poptávku"}
            </button>
            {formStatus === "error" && (
              <p className="mt-4 text-sm text-red-400">
                Něco se nepovedlo. Zkuste to prosím znovu, nebo mi napište přímo na{" "}
                <a href="mailto:lureoproposals@gmail.com" className="underline">
                  lureoproposals@gmail.com
                </a>
                .
              </p>
            )}
          </form>
        </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs text-mute">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Lureo · Studentské studio pro tvorbu webů</span>
            <span className="uppercase tracking-[0.2em]">Působím po celé ČR</span>
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

/**
 * Magnetický hover — obal se jemně posune směrem ke kurzoru.
 * Aktivní jen pro myš a pouze bez prefers-reduced-motion.
 */
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={ref}
      className="magnetic"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${(x * 0.18).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
    >
      {children}
    </span>
  );
}
