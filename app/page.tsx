"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {
  CalendarDays,
  Car,
  ChevronRight,
  Clock,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Navigation,
  Phone,
  Star,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const phone = "0711587156";
const whatsapp = "https://wa.me/254711587156?text=Hello%20Hongfei%20Palm%20Restaurant%2C%20I%27d%20like%20to%20reserve%20a%20table.";
const tiktok = "https://www.tiktok.com/@chineeserestaurant_kenya";
const mapEmbed =
  "https://www.google.com/maps?q=Hong%20fei%20palm%20restaurant%20Limuru%20Kenya&output=embed";
const mapLink =
  "https://www.google.com/maps/place/Hong+fei+palm+restaurant/@-1.1100535,36.612815,17z";

const navItems = ["Home", "Menu", "Experience", "Gallery", "Reservations", "Contact"];

const localImage = (name: string) => `/hongfei/${name}`;

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.64 2c.34 2.92 1.95 4.66 4.72 4.84v3.28a8.55 8.55 0 0 1-4.7-1.42v6.33c0 3.2-2.02 6.24-6.13 6.24-3.53 0-6.02-2.35-6.02-5.64 0-3.61 2.83-5.9 6.8-5.62v3.43c-1.8-.28-3.34.5-3.34 2.05 0 1.31 1.05 2.16 2.45 2.16 1.77 0 2.52-1.08 2.52-2.84V2h3.7Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2.25a9.69 9.69 0 0 0-8.28 14.72L2.7 21.75l4.9-1.03a9.67 9.67 0 1 0 4.44-18.47Zm0 17.55a7.77 7.77 0 0 1-3.96-1.08l-.28-.17-2.9.61.62-2.83-.18-.3a7.8 7.8 0 1 1 6.7 3.77Zm4.28-5.84c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.92-.14.16-.27.18-.5.06-.24-.12-.99-.36-1.88-1.16-.7-.62-1.16-1.38-1.3-1.61-.13-.24-.01-.36.1-.48.1-.1.23-.27.35-.4.12-.14.16-.24.24-.4.08-.15.04-.3-.02-.42-.06-.12-.52-1.25-.72-1.72-.19-.45-.38-.39-.52-.4h-.45c-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.18 1.1.15 1.51.09.46-.07 1.38-.56 1.58-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.45-.28Z" />
    </svg>
  );
}

const experienceImages = [
  {
    title: "Weekend Escape",
    copy: "A cool-air lunch outside Nairobi, set among timber, gardens, and quiet Limuru light.",
    image: localImage("IMG-20260525-WA0134.jpg")
  },
  {
    title: "Garden Tables",
    copy: "Open-air seating for couples, friends, and families who want the drive to feel worth it.",
    image: localImage("IMG-20260525-WA0136.jpg")
  },
  {
    title: "Birthday Gatherings",
    copy: "Warm private-style tables for celebrations, group dinners, and slow shared meals.",
    image: localImage("IMG-20260525-WA0223.jpg")
  },
  {
    title: "Easy Parking",
    copy: "A relaxed arrival point for road-trippers heading through Limuru and beyond.",
    image: localImage("IMG-20260525-WA0228.jpg")
  },
  {
    title: "Scenic Limuru Atmosphere",
    copy: "Green lawns, bright skies, and a countryside pause close to the highway.",
    image: localImage("IMG-20260525-WA0229.jpg")
  }
];

const gallery = [
  ["A-frame garden hut", localImage("IMG-20260525-WA0134.jpg")],
  ["Wooden exterior and flowers", localImage("IMG-20260525-WA0135.jpg")],
  ["Covered veranda dining", localImage("IMG-20260525-WA0136.jpg")],
  ["Round garden tables", localImage("IMG-20260525-WA0139.jpg")],
  ["Chinese welcome sign", localImage("IMG-20260525-WA0141.jpg")],
  ["Garden sign and blue sky", localImage("IMG-20260525-WA0142.jpg")],
  ["Signature Chinese dish", localImage("IMG-20260525-WA0153.jpg")],
  ["Birthday hut setup", localImage("IMG-20260525-WA0223.jpg")],
  ["Scenic group escape", localImage("IMG-20260525-WA0224.jpg")],
  ["Hongfei Palm guests", localImage("IMG-20260525-WA0226.jpg")],
  ["Parking beside the garden", localImage("IMG-20260525-WA0227.jpg")],
  ["Family garden seating", localImage("IMG-20260525-WA0228.jpg")],
  ["Crisped Chinese lamb", localImage("IMG-20260525-WA0229.jpg")],
  ["Whole fish in sauce", localImage("IMG-20260525-WA0231.jpg")]
];

function SectionLabel({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#C6A972]">{eyebrow}</p>
      <h2 className="font-serif text-5xl font-semibold leading-none text-[#F5F1E8] md:text-7xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#F5F1E8]/62 md:text-lg">{copy}</p>
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="fixed left-0 right-0 top-4 z-50 px-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled
            ? "border-white/10 bg-[#0B0B0B]/72 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            : "border-white/5 bg-white/[0.02] backdrop-blur-sm"
        }`}
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Hongfei Palm Restaurant home">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#C6A972]/45 bg-[#F5F1E8] shadow-[0_0_30px_rgba(198,169,114,0.18)]">
            <Image src="/hongfei/logo.png" alt="" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-[#F5F1E8] sm:block">Hongfei Palm</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="group relative text-xs uppercase tracking-[0.18em] text-[#F5F1E8]/70 transition hover:text-[#F5F1E8]">
              {item}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C6A972] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="h-10 bg-[#4B1E24] px-4 text-[11px] text-[#F5F1E8] shadow-[0_18px_50px_rgba(75,30,36,0.28)] hover:bg-[#5A2630] sm:px-5 sm:text-xs">
            <a href="#reservations"><span className="hidden sm:inline">Reserve Table</span><span className="sm:hidden">Reserve</span></a>
          </Button>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#F5F1E8] lg:hidden"
          >
            {open ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#0B0B0B]/90 p-5 backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm uppercase tracking-[0.2em] text-[#F5F1E8]/80">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.35]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const slowVideo = () => {
      video.playbackRate = 0.62;
    };

    const softenLoop = () => {
      if (!video.duration || video.duration < 1) return;
      if (video.duration - video.currentTime < 0.22) {
        video.currentTime = 0.08;
        void video.play();
      }
    };

    video.addEventListener("loadedmetadata", slowVideo);
    video.addEventListener("play", slowVideo);
    video.addEventListener("timeupdate", softenLoop);
    slowVideo();

    return () => {
      video.removeEventListener("loadedmetadata", slowVideo);
      video.removeEventListener("play", slowVideo);
      video.removeEventListener("timeupdate", softenLoop);
    };
  }, []);

  return (
    <section id="home" className="cinematic-section relative min-h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <video
          ref={videoRef}
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hongfei/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(198,169,114,0.08),transparent_24rem),linear-gradient(90deg,rgba(11,11,11,0.7)_0%,rgba(11,11,11,0.44)_42%,rgba(11,11,11,0.12)_100%),linear-gradient(180deg,rgba(11,11,11,0.03),rgba(11,11,11,0.42))]" />
        <div className="fog-layer" />
        <div className="fog-layer slow" />
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="bokeh"
            style={{
              width: 10 + (i % 4) * 14,
              height: 10 + (i % 4) * 14,
              left: `${54 + (i % 5) * 9}%`,
              top: `${20 + (i % 6) * 11}%`,
              background: i % 3 === 0 ? "#C6A972" : i % 3 === 1 ? "#F5F1E8" : "#4B1E24",
              animationDelay: `${i * 0.35}s`
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-32 md:px-8">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.7 } } }} className="max-w-4xl">
          <motion.p variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }} className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C6A972]">
            Hongfei Palm Restaurant
          </motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 42 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-6xl font-semibold leading-[0.88] text-[#F5F1E8] sm:text-7xl md:text-8xl lg:text-9xl">
            Leave Nairobi Behind
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }} className="mt-8 max-w-xl text-lg leading-8 text-[#F5F1E8]/70 md:text-xl">
            Contemporary Chinese dining hidden in the cool hills of Limuru, minutes from the highway and far from the city rush.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-[#4B1E24] text-[#F5F1E8] shadow-[0_22px_70px_rgba(75,30,36,0.36)] hover:bg-[#5A2630]">
              <a href="#reservations">Reserve Table <ChevronRight size={18} /></a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#menu">View Menu</a>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function MenuSection() {
  const [view, setView] = useState<"page1" | "page2">("page1");
  const menuPages = [
    { key: "page1", title: "Menu Page 1", src: "/hongfei/menu-a3-1.pdf" },
    { key: "page2", title: "Menu Page 2", src: "/hongfei/menu-a3-2.pdf" }
  ];
  const activeMenu = menuPages.find((page) => page.key === view) ?? menuPages[0];

  return (
    <section id="menu" className="cinematic-section relative overflow-hidden px-5 py-24 md:px-8 md:py-36">
      <div className="absolute inset-0 bg-[#0b0b0d]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C6A972]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#1F3A2E]/18 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#C6A972]">Menu</p>
          <h2 className="font-serif text-5xl font-semibold leading-none text-[#F5F1E8] md:text-7xl">Our Menu</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#F5F1E8]/62 md:text-lg">
            Browse the original Hongfei Palm menu in a calm, framed viewing experience made for planning your Limuru detour.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mx-auto mt-10 grid max-w-xl gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:grid-cols-2"
          role="tablist"
          aria-label="Menu view options"
        >
          {menuPages.map((page) => (
            <button
              key={page.key}
              onClick={() => setView(page.key as "page1" | "page2")}
              className={`rounded-[1rem] border px-5 py-3 text-sm transition-all duration-500 ${
                view === page.key
                  ? "border-[#C6A972]/55 bg-[#C6A972]/16 text-[#F5F1E8] shadow-[0_0_36px_rgba(198,169,114,0.13)]"
                  : "border-transparent text-[#F5F1E8]/58 hover:border-white/10 hover:bg-white/[0.04] hover:text-[#F5F1E8]"
              }`}
              role="tab"
              aria-selected={view === page.key}
            >
              {page.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111113]/90 p-3 shadow-[0_40px_140px_rgba(0,0,0,0.48)] backdrop-blur-xl md:p-5"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[1.45rem] border border-[#C6A972]/16 bg-[#0B0B0B]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#F5F1E8]/58">{activeMenu.title}</p>
                <span className="h-2 w-2 rounded-full bg-[#C6A972]/70 shadow-[0_0_20px_rgba(198,169,114,0.65)]" />
              </div>
              <iframe
                src={`${activeMenu.src}#toolbar=1&navpanes=0&view=FitH`}
                title={`${activeMenu.title} PDF viewer`}
                className="h-[620px] w-full bg-[#F5F1E8] md:h-[820px]"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-8">
          <p className="text-sm leading-7 text-[#F5F1E8]/64">Prefer a guided recommendation? Message us and we will help you choose dishes for couples, family hotpot, or group dining.</p>
          <Button asChild className="mt-5 bg-[#4B1E24] text-[#F5F1E8] hover:bg-[#5A2630]">
            <a href={whatsapp} target="_blank" rel="noreferrer">
              Order or Reserve on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="The experience" title="A Calm Detour" copy="For Nairobi residents, road-trippers, couples, and friends looking for a stylish pause between city and countryside." />
        <div className="mt-16 grid gap-5 md:grid-cols-5">
          {experienceImages.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.75 }} className="group relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 md:col-span-1 md:[&:nth-child(1)]:col-span-2 md:[&:nth-child(5)]:col-span-2">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-78 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="font-serif text-3xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/66">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);
  return (
    <section id="gallery" className="bg-[#F5F1E8] px-5 py-28 text-[#0B0B0B] md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-center text-xs uppercase tracking-[0.42em] text-[#4B1E24]">Gallery</p>
        <h2 className="mx-auto max-w-3xl text-center font-serif text-5xl font-semibold leading-none md:text-7xl">The Long Way Home</h2>
        <div className="masonry mt-16">
          {gallery.map(([alt, src], index) => (
            <motion.button key={alt} onClick={() => setActive([alt, src])} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className={`group relative w-full overflow-hidden rounded-[1.4rem] bg-[#0B0B0B] ${index % 2 ? "h-[360px]" : "h-[500px]"}`}>
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/22" />
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/82 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <div className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem]" onClick={(event) => event.stopPropagation()}>
              <Image src={active[1]} alt={active[0]} fill sizes="90vw" className="object-cover" />
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur-xl" aria-label="Close image">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    "It felt like leaving Nairobi without planning a whole trip.",
    "Calm, elegant, and exactly the kind of detour we wanted after a long week.",
    "The hotpot table turned a family dinner into a full evening."
  ];
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="flex gap-5">
          {[...quotes, ...quotes].map((quote, index) => (
            <motion.article key={`${quote}-${index}`} animate={{ x: ["0%", "-110%"] }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="min-w-[82vw] rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl sm:min-w-[420px]">
              <div className="mb-8 flex gap-1 text-[#C6A972]">{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div>
              <p className="font-serif text-3xl leading-tight text-[#F5F1E8]">"{quote}"</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#121212] px-5 py-28 md:px-8 md:py-36">
      <div className="road-lines absolute inset-0 opacity-30" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.42em] text-[#C6A972]">Location</p>
          <h2 className="mt-6 font-serif text-5xl font-semibold leading-none md:text-7xl">Minutes From The Highway</h2>
          <p className="mt-7 text-lg leading-8 text-[#F5F1E8]/65">Hongfei Palm Restaurant sits in Limuru, Kenya, positioned for weekend escapes from Nairobi and stylish stops toward Naivasha, Nakuru, and the surrounding highlands.</p>
          <div className="mt-9 grid gap-4 text-sm text-[#F5F1E8]/72">
            <p className="flex gap-3"><MapPin className="mt-1 text-[#C6A972]" size={18} /> Hongfei Palm Restaurant, Limuru, Kenya</p>
            <p className="flex gap-3"><Car className="mt-1 text-[#C6A972]" size={18} /> Parking available for road-trippers, families, and groups.</p>
            <p className="flex gap-3"><Clock className="mt-1 text-[#C6A972]" size={18} /> Open daily: 11:00 AM - 10:30 PM</p>
            <p className="flex gap-3"><Navigation className="mt-1 text-[#C6A972]" size={18} /> Near the Nairobi-Limuru highway corridor.</p>
          </div>
          <Button asChild variant="gold" className="mt-8">
            <a href={mapLink} target="_blank" rel="noreferrer">Open Directions</a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-2xl shadow-black/30">
          <iframe title="Hongfei Palm Restaurant map" src={mapEmbed} className="h-[520px] w-full border-0 grayscale invert-[0.9] saturate-50" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Reservations() {
  const [guests, setGuests] = useState("2");
  return (
    <section id="reservations" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-white/10 bg-[#F5F1E8] p-5 text-[#0B0B0B] shadow-2xl shadow-black/30 md:grid-cols-[0.82fr_1.18fr] md:p-10">
        <div className="rounded-[1.4rem] bg-[#0B0B0B] p-8 text-[#F5F1E8] md:p-10">
          <p className="text-xs uppercase tracking-[0.42em] text-[#C6A972]">Reserve</p>
          <h2 className="mt-6 font-serif text-5xl font-semibold leading-none">Your Detour Starts Here</h2>
          <p className="mt-6 leading-8 text-[#F5F1E8]/64">Book ahead for private rooms, weekend lunches, evening cocktails, or family hotpot.</p>
          <div className="mt-10 space-y-4">
            <a href={`tel:${phone}`} className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 text-sm transition hover:border-[#C6A972]/40"><Phone size={18} /> {phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-[#C6A972]/30 bg-[#C6A972]/12 p-4 text-sm transition hover:bg-[#C6A972]/18"><MessageCircle size={18} /> Book on WhatsApp</a>
          </div>
        </div>
        <form className="grid content-center gap-5" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">Name<input required className="h-14 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#C6A972] focus:ring-4 focus:ring-[#C6A972]/20" placeholder="Your name" /></label>
            <label className="space-y-2 text-sm font-medium">Phone<input required className="h-14 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#C6A972] focus:ring-4 focus:ring-[#C6A972]/20" placeholder="0711 587 156" /></label>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <label className="space-y-2 text-sm font-medium">Date<input type="date" className="h-14 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#C6A972] focus:ring-4 focus:ring-[#C6A972]/20" /></label>
            <label className="space-y-2 text-sm font-medium">Time<input type="time" className="h-14 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#C6A972] focus:ring-4 focus:ring-[#C6A972]/20" /></label>
            <label className="space-y-2 text-sm font-medium">Guests<select value={guests} onChange={(event) => setGuests(event.target.value)} className="h-14 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#C6A972] focus:ring-4 focus:ring-[#C6A972]/20">{["1", "2", "3", "4", "5", "6", "8", "10+"].map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          <label className="space-y-2 text-sm font-medium">Special requests<textarea className="min-h-32 w-full rounded-2xl border border-black/10 bg-white p-4 outline-none transition focus:border-[#C6A972] focus:ring-4 focus:ring-[#C6A972]/20" placeholder="Private room, birthday setup, hotpot preference..." /></label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" className="bg-[#0B0B0B] text-[#F5F1E8] hover:bg-[#121212]"><CalendarDays size={18} /> Request Reservation</Button>
            <Button asChild variant="gold" className="text-[#0B0B0B]">
              <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Booking</a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 py-16 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(198,169,114,0.14),transparent_24rem)]" />
      <span className="steam-line left-[18%]" />
      <span className="steam-line left-[72%] [animation-delay:1.6s]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><span className="relative h-12 w-12 overflow-hidden rounded-full border border-[#C6A972]/45 bg-[#F5F1E8]"><Image src="/hongfei/logo.png" alt="" fill sizes="48px" className="object-cover" /></span><span className="uppercase tracking-[0.24em]">Hongfei Palm</span></div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#F5F1E8]/58">Contemporary Chinese dining in Limuru for the beautiful pause between Nairobi and the open road.</p>
        </div>
        <div className="grid gap-3 text-sm text-[#F5F1E8]/62">
          <a href="#menu">Menu</a><a href="#experience">Experience</a><a href="#gallery">Gallery</a><a href="#reservations">Reservations</a>
        </div>
        <div className="space-y-4 text-sm text-[#F5F1E8]/62">
          <p>Daily 11:00 AM - 10:30 PM</p>
          <a href={`tel:${phone}`} className="block">{phone}</a>
          <div className="flex flex-col items-start gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-medium text-[#0B0B0B] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(37,211,102,0.22)]">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp reservations
            </a>
            <a href={tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#C6A972] transition hover:text-[#F5F1E8]">
              <TikTokIcon className="h-4 w-4" /> TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0B0B0B] shadow-[0_18px_60px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8] md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.84 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <div className="noise" />
      <Navbar />
      <Hero />
      <MenuSection />
      <Experience />
      <Gallery />
      <Testimonials />
      <Location />
      <Reservations />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
