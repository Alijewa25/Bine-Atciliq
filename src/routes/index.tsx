import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { I18nProvider, useI18n } from "@/i18n/context";
import type { Lang } from "@/i18n/translations";
import { Logo } from "@/components/Logo";
import {
  Phone, Menu, X, ChevronDown, Clock, MapPin, Instagram, Facebook, MessageCircle,
  Calendar, Users, Sparkles, Send,
} from "lucide-react";

import heroImg from "@/assets/hero-race.jpg";
import horsePortrait from "@/assets/horse-portrait.jpg";
import whiteHorse from "@/assets/white-horse.jpg";
import entrance from "@/assets/entrance.jpg";
import jumping from "@/assets/jumping.jpg";
import ponyKid from "@/assets/pony-kid.jpg";
import carriage from "@/assets/carriage.jpg";
import polo from "@/assets/polo.jpg";

export const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Binə Atçılıq Mərkəzi — Bakının atçılıq kompleksi" },
      {
        name: "description",
        content:
          "Binə Atçılıq Mərkəzi — Bakıda müasir atçılıq kompleksi. At gəzintiləri, dərslər, tədbirlər və Elite Horse Garden restoranı.",
      },
      { property: "og:title", content: "Binə Atçılıq Mərkəzi" },
      {
        property: "og:description",
        content: "At gəzintiləri, dərslər, yarışlar və unudulmaz təcrübələr.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}

function Site() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Hours />
        <Services />
        <Events />
        <News />
        <Gallery />
        <MiniCards />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */

const NAV = [
  { key: "nav_home", href: "#home" },
  { key: "nav_about", href: "#about" },
  { key: "nav_services", href: "#services" },
  { key: "nav_events", href: "#events" },
  { key: "nav_gallery", href: "#gallery" },
  { key: "nav_news", href: "#news" },
  { key: "nav_contact", href: "#contact" },
] as const;

function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <Logo className="h-9 w-9 shrink-0" />
          <span className="truncate text-lg font-bold tracking-wide">BAİM</span>
        </a>
        <nav className="ml-6 hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(n.key)}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <a
            href="tel:+994502518337"
            className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:flex"
          >
            <Phone className="h-4 w-4" /> +994 50 251 83 37
          </a>
          <LanguageSwitcher />
          <a
            href="tel:+994502518337"
            className="gradient-brand hidden rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-transform hover:scale-105 sm:inline-flex"
          >
            {t("call_us")}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-background/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-4">
            {NAV.map((n) => (
              <a
                key={n.key}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {t(n.key)}
              </a>
            ))}
            <a
              href="tel:+994502518337"
              className="gradient-brand mt-2 rounded-full px-4 py-3 text-center text-sm font-medium text-white"
            >
              {t("call_us")} · +994 50 251 83 37
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const langs: Lang[] = ["az", "en", "ru"];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium uppercase text-muted-foreground hover:text-foreground"
      >
        {lang}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-24 overflow-hidden rounded-xl border border-white/10 bg-card shadow-xl">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`block w-full px-3 py-2 text-left text-xs uppercase hover:bg-white/5 ${
                l === lang ? "text-gradient-brand font-semibold" : "text-muted-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 md:px-6">
        <span className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
          {t("hero_badge")}
        </span>
        <h1
          className="animate-fade-up mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient-brand">{t("hero_title")}</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero_sub")}
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="gradient-brand glow-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            {t("hero_cta_book")}
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-white/10"
          >
            {t("hero_cta_events")}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>{t("scroll")}</span>
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </a>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  const { t } = useI18n();
  const stats = [
    { v: "632+", k: t("stat_posts"), icon: Sparkles },
    { v: "19.7K+", k: t("stat_followers"), icon: Users },
    { v: "4+", k: t("stat_breeds"), icon: Sparkles },
    { v: "7/7", k: t("stat_open"), icon: Calendar },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest">
            {t("about_kicker")}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {t("about_title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("about_body")}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-card/50 p-5 backdrop-blur"
              >
                <s.icon className="h-5 w-5 text-[--primary]" />
                <div className="text-gradient-brand mt-3 text-2xl font-bold md:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img
            src={horsePortrait}
            alt=""
            loading="lazy"
            width={1024}
            height={1280}
            className="col-span-1 row-span-2 h-full w-full rounded-3xl object-cover"
          />
          <img
            src={whiteHorse}
            alt=""
            loading="lazy"
            width={1280}
            height={1024}
            className="h-full w-full rounded-3xl object-cover"
          />
          <img
            src={entrance}
            alt=""
            loading="lazy"
            width={1280}
            height={1024}
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOURS ---------------- */

function Hours() {
  const { t } = useI18n();
  return (
    <section className="border-y border-white/10 bg-card/30 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
        <Info icon={Clock} title={t("hours_riding")} value="10:00 – 20:00" />
        <Info icon={Clock} title={t("hours_restaurant")} value="09:00 – 00:00" />
        <Info icon={MapPin} title={t("hours_address")} value="Bakı · Xəzər · Mərdəkan" />
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Clock;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="gradient-brand grid h-12 w-12 shrink-0 place-items-center rounded-2xl">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 font-semibold">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */

type Price = { label: string; items: { name: string; price: string }[] };
type SvcCat = { key: string; prices: Price[] };

function useServices(): SvcCat[] {
  const { t } = useI18n();
  return [
    {
      key: t("cat_riding"),
      prices: [
        {
          label: "Qum meydança / Sand arena",
          items: [
            { name: "10 min", price: "10 ₼" },
            { name: "30 min", price: "25 ₼" },
          ],
        },
        {
          label: "Böyük dövrə / Racetrack",
          items: [
            { name: "1", price: "20 ₼" },
            { name: "3", price: "45 ₼" },
          ],
        },
        {
          label: "Yaşıl sahə / Green field",
          items: [{ name: "20 min", price: "25 ₼" }],
        },
        {
          label: "Friz atı / Friesian",
          items: [
            { name: "10 min", price: "25 ₼" },
            { name: "20 min", price: "40 ₼" },
          ],
        },
      ],
    },
    {
      key: t("cat_kids"),
      prices: [
        {
          label: "Poni · qum meydança",
          items: [
            { name: "3", price: "5 ₼" },
            { name: "6", price: "10 ₼" },
          ],
        },
        { label: "Poni · yaşıl sahə", items: [{ name: "10 min", price: "15 ₼" }] },
      ],
    },
    {
      key: t("cat_carriage"),
      prices: [
        {
          label: "1 nəfər",
          items: [
            { name: "Kiçik", price: "5 ₼" },
            { name: "Böyük", price: "10 ₼" },
          ],
        },
      ],
    },
    {
      key: t("cat_lessons"),
      prices: [
        {
          label: "İş günləri / Weekdays",
          items: [
            { name: "1", price: "40 ₼" },
            { name: "8", price: "300 ₼" },
            { name: "12", price: "450 ₼" },
          ],
        },
        {
          label: "Həftəsonu / Weekends",
          items: [
            { name: "1", price: "40 ₼" },
            { name: "8", price: "350 ₼" },
            { name: "12", price: "500 ₼" },
          ],
        },
      ],
    },
    {
      key: t("cat_photo"),
      prices: [
        {
          label: "At foto sessiya",
          items: [
            { name: "1 at / 1 saat", price: "90 ₼" },
            { name: "2 at / 1 saat", price: "160 ₼" },
          ],
        },
        {
          label: "Friz atı",
          items: [
            { name: "1 at / 1 saat", price: "120 ₼" },
            { name: "2 at / 1 saat", price: "200 ₼" },
          ],
        },
        {
          label: "Poni",
          items: [
            { name: "30 min", price: "45 ₼" },
            { name: "1 saat", price: "70 ₼" },
          ],
        },
      ],
    },
  ];
}

function Services() {
  const { t } = useI18n();
  const cats = useServices();
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest">
            {t("services_kicker")}
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {t("services_title")}
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                active === i
                  ? "gradient-brand border-transparent text-white shadow-lg shadow-pink-500/20"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.key}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cats[active].prices.map((p) => (
            <div
              key={p.label}
              className="rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur transition-colors hover:border-white/20"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {p.label}
              </div>
              <ul className="mt-4 space-y-3">
                {p.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">{it.name}</span>
                    <span className="text-gradient-brand text-lg font-bold">
                      {it.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm text-yellow-100/80">
          <Sparkles className="h-5 w-5 shrink-0 text-yellow-400" />
          <p>{t("services_notice")}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */

const EVENTS: Record<string, { date: string; title: string }[]> = {
  July: [
    { date: "3–4", title: "PCL — Round 9" },
    { date: "4", title: "Race Day" },
    { date: "10–11", title: "PCL — Round 10" },
    { date: "18", title: '"Omar" Cup — Show Jumping' },
    { date: "24–25", title: "PCL — Round 11" },
  ],
  September: [
    { date: "5", title: "Race Day / Trotting" },
    { date: "11–12", title: "PCL — Round 12" },
    { date: "19", title: '"Omar" Cup — Show Jumping' },
    { date: "20", title: "Race Day" },
    { date: "25–26", title: "PCL — Round 13" },
  ],
  October: [
    { date: "3", title: "Race Day" },
    { date: "9–10", title: "PCL — Round 14" },
    { date: "16–17", title: "PCL — Round 15" },
    { date: "17", title: "Race Day" },
    { date: "20–21", title: "National Championship — Show Jumping" },
    { date: "23–24", title: "PCL — Round 16" },
  ],
};

function Events() {
  const { t } = useI18n();
  const [month, setMonth] = useState<keyof typeof EVENTS>("July");
  return (
    <section
      id="events"
      className="relative overflow-hidden border-y border-white/10 bg-card/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest">
          {t("events_kicker")}
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t("events_title")}</h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {Object.keys(EVENTS).map((m) => (
            <button
              key={m}
              onClick={() => setMonth(m as keyof typeof EVENTS)}
              className={`rounded-full border px-5 py-2 text-sm transition-all ${
                month === m
                  ? "gradient-brand border-transparent text-white"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="mt-8 divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/10 bg-background/40 backdrop-blur">
          {EVENTS[month].map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 transition-colors hover:bg-white/5 md:grid-cols-[80px_1fr_auto]"
            >
              <div className="text-gradient-brand hidden text-2xl font-bold md:block">
                {e.date}
              </div>
              <div className="min-w-0">
                <div className="text-gradient-brand text-lg font-bold md:hidden">
                  {e.date}
                </div>
                <div className="truncate font-medium">{e.title}</div>
              </div>
              <Calendar className="h-5 w-5 shrink-0 text-muted-foreground" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{t("events_note")}</p>
      </div>
    </section>
  );
}

/* ---------------- NEWS ---------------- */

const NEWS_ITEMS = [
  {
    date: "18.07.2026",
    title: "Yarış mövsümünün növbəti turu keçirildi",
    summary:
      "Azərbaycan Atçılıq Federasiyası növbəti yarış gününü Binə Atçılıq Mərkəzində keçirdi. 10 Qarabağ və 2 Dəliboz atının iştirakı ilə yarış yüksək səviyyədə keçdi.",
    image: heroImg,
  },
  {
    date: "12.07.2026",
    title: "BAİMTRUCK — hərəkətdə!",
    summary:
      "Mərkəzimizdə həm atlar üçün yem məhsulları, həm də ziyarətçilər üçün müxtəlif dadlı yeməklər təklif olunur.",
    image: entrance,
  },
  {
    date: "10.07.2026",
    title: "Badamlı ilə piknikinizə dad qatın!",
    summary:
      "Binə Atçılıq Mərkəzində Badamlı ilə birgə xüsusi piknik tədbiri — 12 iyul, 13:00 – 17:00.",
    image: whiteHorse,
  },
  {
    date: "05.07.2026",
    title: "Kentworld Baku — Polo turniri",
    summary:
      "Mərkəzimizdə keçirilən polo tədbirindən ən yaddaqalan anlar. Peşəkarlıq və zəriflik bir arada.",
    image: polo,
  },
];

function News() {
  const { t } = useI18n();
  return (
    <section id="news" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest">
          {t("news_kicker")}
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t("news_title")}</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NEWS_ITEMS.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur transition-all hover:border-white/20 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={n.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {n.date}
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{n.summary}</p>
                <button className="text-gradient-brand mt-4 self-start text-sm font-semibold">
                  {t("read_more")} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */

const GALLERY: Record<string, string[]> = {
  cat_horses: [horsePortrait, whiteHorse, carriage],
  cat_races: [heroImg, polo, jumping],
  cat_events: [jumping, entrance, polo],
  cat_for_kids: [ponyKid, carriage, whiteHorse],
};

function Gallery() {
  const { t } = useI18n();
  const cats = ["cat_horses", "cat_races", "cat_events", "cat_for_kids"] as const;
  const [active, setActive] = useState<(typeof cats)[number]>("cat_horses");
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section
      id="gallery"
      className="border-y border-white/10 bg-card/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest">
          {t("gallery_kicker")}
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          {t("gallery_title")}
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                active === c
                  ? "gradient-brand border-transparent text-white"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(c)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY[active].map((src, i) => (
            <button
              key={src + i}
              onClick={() => setLightbox(src)}
              className={`overflow-hidden rounded-3xl border border-white/10 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4 backdrop-blur"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-full max-w-full rounded-2xl" />
        </div>
      )}
    </section>
  );
}

/* ---------------- MINI CARDS: HALL + RESTAURANT ---------------- */

function MiniCards() {
  const { t } = useI18n();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <MiniCard
          image={entrance}
          title={t("hall_title")}
          desc={t("hall_desc")}
          phone="+994 50 251 83 39"
          cta={t("more_info")}
        />
        <MiniCard
          image={carriage}
          title={t("restaurant_title")}
          desc={t("restaurant_desc")}
          phone="+994 50 251 83 38"
          cta={t("more_info")}
          extra="09:00 – 00:00"
        />
      </div>
    </section>
  );
}

function MiniCard({
  image,
  title,
  desc,
  phone,
  cta,
  extra,
}: {
  image: string;
  title: string;
  desc: string;
  phone: string;
  cta: string;
  extra?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="relative z-10 flex min-h-[380px] flex-col justify-end p-8">
        <h3 className="text-3xl font-semibold md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-muted-foreground">{desc}</p>
        {extra && (
          <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
            <Clock className="mr-1 inline h-3 w-3" /> {extra}
          </div>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" /> {phone}
          </a>
          <button className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm backdrop-blur hover:bg-white/10">
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SOCIAL ---------------- */

function Social() {
  const { t } = useI18n();
  return (
    <section className="border-y border-white/10 bg-card/30 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <a
          href="https://instagram.com/bineatciliqmerkezi"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-background/40 p-6 backdrop-blur transition-all hover:border-white/20"
        >
          <div className="gradient-brand grid h-14 w-14 shrink-0 place-items-center rounded-2xl">
            <Instagram className="h-6 w-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate font-semibold">@bineatciliqmerkezi</div>
            <div className="text-sm text-muted-foreground">
              19.7K+ {t("stat_followers")}
            </div>
          </div>
          <span className="text-gradient-brand shrink-0 text-sm font-semibold">
            {t("follow")} →
          </span>
        </a>
        <a
          href="#"
          className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-background/40 p-6 backdrop-blur transition-all hover:border-white/20"
        >
          <div className="gradient-brand grid h-14 w-14 shrink-0 place-items-center rounded-2xl">
            <Facebook className="h-6 w-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate font-semibold">Binə Atçılıq Mərkəzi</div>
            <div className="text-sm text-muted-foreground">Facebook</div>
          </div>
          <span className="text-gradient-brand shrink-0 text-sm font-semibold">
            {t("follow")} →
          </span>
        </a>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest">
          {t("contact_kicker")}
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          {t("contact_title")}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur md:p-8"
          >
            <div className="space-y-4">
              <Field label={t("form_name")}>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none focus:border-pink-500/50"
                />
              </Field>
              <Field label={t("form_phone")}>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none focus:border-pink-500/50"
                />
              </Field>
              <Field label={t("form_message")}>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none focus:border-pink-500/50"
                />
              </Field>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                >
                  <Send className="h-4 w-4" /> {t("form_send")}
                </button>
                <a
                  href="https://wa.me/994502518337"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-300 hover:bg-green-500/20"
                >
                  <MessageCircle className="h-4 w-4" /> {t("form_whatsapp")}
                </a>
              </div>
            </div>
          </form>

          <div className="space-y-4">
            <PhoneCard title={t("contact_center")} phone="+994 50 251 83 37" />
            <PhoneCard title={t("contact_restaurant")} phone="+994 50 251 83 38" />
            <PhoneCard title={t("contact_hall")} phone="+994 50 251 83 39" />
            <div className="grid h-56 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-card/40">
              <div className="text-center text-sm text-muted-foreground">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-[--primary]" />
                Google Maps placeholder
                <div className="mt-1 text-xs">
                  {t("hours_address")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function PhoneCard({ title, phone }: { title: string; phone: string }) {
  return (
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/40 p-5 backdrop-blur transition-all hover:border-white/20"
    >
      <div className="gradient-brand grid h-12 w-12 shrink-0 place-items-center rounded-2xl">
        <Phone className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm text-muted-foreground">{title}</div>
        <div className="truncate font-semibold">{phone}</div>
      </div>
    </a>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-card/30 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <span className="text-lg font-bold">BAİM</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{t("footer_tagline")}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            {t("quick_links")}
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.key}>
                <a href={n.href} className="text-muted-foreground hover:text-foreground">
                  {t(n.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            {t("hours_title")}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{t("hours_riding")}: 10:00 – 20:00</li>
            <li>{t("hours_restaurant")}: 09:00 – 00:00</li>
            <li>{t("hours_address")}</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            {t("social_title")}
          </div>
          <div className="mt-3 flex gap-3">
            <a
              href="https://instagram.com/bineatciliqmerkezi"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:border-white/30"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:border-white/30"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/994502518337"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:border-white/30"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-muted-foreground md:px-6">
        © 2026 Binə Atçılıq Mərkəzi. {t("footer_rights")}
      </div>
    </footer>
  );
}
