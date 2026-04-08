"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Cpu, Moon, Sun, Fingerprint, X, AlertTriangle 
} from 'lucide-react';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// --- CUSTOM ICONS ---
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const DiscordIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// --- TYPEWRITER ---
const TypewriterEffect = () => {
  const words = ['Privacy Maniac', 'Linux User', 'Self-Taught Pseudoengineer', 'Crazy', 'ADHD'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-stone-500 dark:text-stone-400 font-medium">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-1 text-foreground">|</span>
    </span>
  );
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isHovered, setIsHovered] = useState(false);
  const [discordText, setDiscordText] = useState("");
  const fullUsername = "lilyyy72";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (showDiscord) {
      let i = 0; setDiscordText("");
      const interval = setInterval(() => {
        setDiscordText(fullUsername.slice(0, i));
        i++;
        if (i > fullUsername.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [showDiscord]);

  const skillPool = [
    { name: "Arch Linux", cat: "core" },
    { name: "Privacy Hardening", cat: "sec" },
    { name: "Jailbreaking", cat: "sec" },
    { name: "Shell Scripting", cat: "core" },
    { name: "Raspberry Pi", cat: "core" },
    { name: "Soldering", cat: "hardware" },
    { name: "PCB Repair", cat: "hardware" },
    { name: "Calculus II", cat: "theory" },
    { name: "LaTeX", cat: "theory" },
    { name: "Psychiatry", cat: "bio" },
    { name: "Psychopharmacology", cat: "bio" },
    { name: "Linguistics", cat: "bio" },
    { name: "Embedded C", cat: "core" },
    { name: "Reverse Engineering", cat: "sec" },
    { name: "Kernel Hardening", cat: "sec" },
    { name: "NixOS", cat: "core" },
    { name: "Ghidra", cat: "sec" },
    { name: "Neuroscience", cat: "bio" },
    { name: "Circuit Design", cat: "hardware" },
    { name: "Firmware Dev", cat: "core" },
  ];

  const filters = ["all", "core", "sec", "hardware", "bio", "theory"];

  const schools = [
    { name: "Escola Básica São Sebastião", years: "2015 — 2018", logo: "/images/es1.png", desc: "Foundational years where my curiosity for structured learning first sparked." },
    { name: "EBI do Carregado", years: "2018 — 2024", logo: "/images/es2.png", desc: "The pivot point: Mastery of English, deep-dives into mathematics, and my first encounter with the Linux kernel and programming logic." },
    { name: "Escola Secundária Damião de Goes", years: "2024 — Present", logo: "/images/es3.png", desc: "Current specialization in hardware security and reverse engineering. Integrating high-level calculus, physics, and chemistry into tangible electronics projects." }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-foreground transition-colors duration-500">
      
      {/* --- THEME TOGGLE --- */}
      <button 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-8 right-8 z-50 p-4 rounded-full bg-background shadow-xl border border-stone-200 dark:border-stone-800 transition-all hover:scale-110 active:scale-95 group"
      >
        {theme === 'dark' ? <Sun size={22} className="text-yellow-500" /> : <Moon size={22} className="text-stone-400" />}
      </button>

      {/* --- HERO SECTION --- */}
      <section id="about" className="min-h-screen pt-44 flex flex-col justify-center px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="group relative w-64 h-64 md:w-96 md:h-96 rounded-[4rem] overflow-hidden border-4 border-background shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 shrink-0"
          >
            <img src="/images/Lily.jpg" className="w-full h-full object-cover object-[center_30%] grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Lily" />
            <div className="absolute inset-0 bg-stone-900/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500 p-8 text-center cursor-help">
              <Fingerprint className="text-stone-500 mb-4 animate-pulse" size={40} />
              <p className="font-mono text-[10px] text-stone-300 uppercase tracking-widest leading-relaxed">
                Kernel: 6.8.2-arch1-1<br/>Status: Verified User<br/>Location: Portugal
              </p>
            </div>
          </motion.div>

          <div className="space-y-8 flex-1 text-center md:text-left">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] font-serif italic text-foreground">
              Hello, I'm <span className="text-stone-400/60 block md:inline">Liliana!</span>
            </h1>
            
            <div className="text-2xl md:text-4xl font-mono min-h-[50px] opacity-80 text-foreground">
              <TypewriterEffect />
            </div>

            <p className="max-w-xl text-stone-500 italic font-serif text-xl leading-relaxed">
              "A 17-year-old self-taught engineer from Portugal. I build things that bridge the gap between hardware and the human mind."
            </p>
            
            <div className="flex gap-8 justify-center md:justify-start pt-4">
              <a href="https://github.com/LilyAtrophy" target="_blank" className="flex items-center gap-2 hover:text-stone-400 transition-colors font-mono uppercase tracking-widest text-sm text-foreground"><GithubIcon size={20}/> Github</a>
              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-stone-400 transition-colors font-mono uppercase tracking-widest text-sm text-foreground"><LinkedinIcon size={20}/> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

{/* --- FILTERABLE INFINITE MARQUEE --- */}
<section id="skills" className="py-24 overflow-hidden scroll-mt-24 border-y border-stone-100 dark:border-stone-900">
  <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-wrap justify-center gap-4 md:gap-8">
    {filters.map((f) => (
      <button
        key={f}
        onClick={() => setActiveFilter(f)}
        className={`font-mono text-[10px] uppercase tracking-[0.4em] transition-all relative px-4 py-2 border rounded-full ${
          activeFilter === f 
          ? "text-foreground border-stone-800 dark:border-stone-200" 
          : "text-stone-400 border-transparent hover:text-stone-600"
        }`}
      >
        {f}
      </button>
    ))}
  </div>

  <div 
    className="flex cursor-default group"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ 
        // We use a single constant duration, but we manipulate the 
        // timeScale/speed via CSS or Framer's internal clock.
        // For a simpler "gradual" fix without complex hooks:
        duration: isHovered ? 5 : 120, 
        repeat: Infinity, 
        ease: "linear",
        // This 'layout' prop helps Framer handle the transition between durations smoothly
        layout: true 
      }}
      // This Tailwind transition handles the "gradual" speed change for the animation-play-state
      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
      className="flex gap-20 whitespace-nowrap items-center py-4 transition-all duration-700"
    >
      {[...skillPool, ...skillPool, ...skillPool, ...skillPool].map((skill, idx) => {
        const isDimmed = activeFilter !== "all" && skill.cat !== activeFilter;
        return (
          <div 
            key={idx} 
            className={`flex items-center gap-20 transition-all duration-1000 ${
              isDimmed ? "opacity-10 scale-90 blur-[1px]" : "opacity-100 scale-100"
            }`}
          >
            <span className="font-playfair italic text-3xl md:text-5xl text-foreground">
              {skill.name}
            </span>
            <span className="text-stone-200 dark:text-stone-800 text-2xl font-light">/</span>
          </div>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* --- ACADEMIC JOURNEY --- */}
      <section id="journey" className="py-32 px-6 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="font-serif italic text-5xl mb-24 px-4 border-l-4 border-stone-200 dark:border-stone-800 ml-4 text-foreground">
          Academic Journey
        </h2>
        <div className="relative space-y-24">
          <div className="absolute left-[82px] top-4 bottom-4 w-[1px] bg-stone-200 dark:bg-stone-800 hidden md:block" />
          {schools.map((school, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-12 items-center md:items-start group">
              <div className="z-10 flex-shrink-0 w-44 h-24 rounded-2xl shadow-sm flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-105 border bg-zinc-100 border-slate-200 dark:bg-zinc-200 dark:border-zinc-700">
                <img src={school.logo} className="w-full h-full object-contain filter brightness-100 invert-0 dark:brightness-110" alt={school.name} />
              </div>

              <div className="flex-1 pt-2 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                  <h3 className="text-3xl md:text-4xl font-serif italic tracking-tight text-foreground">{school.name}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500">{school.years}</span>
                </div>
                <p className="max-w-2xl text-stone-600 dark:text-stone-500 font-serif italic text-xl leading-relaxed border-t md:border-t-0 md:border-l border-stone-200 dark:border-stone-800 pt-4 md:pt-0 md:pl-8">
                  {school.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="font-serif italic text-5xl mb-20 text-center text-foreground">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div whileHover={{ y: -5 }} className="group cursor-pointer">
            <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 relative border-2 border-dashed border-stone-300 dark:border-stone-800 flex flex-col items-center justify-center bg-[#0a0a0a]">
              <Cpu size={48} className="text-stone-300 dark:text-stone-800 mb-4 group-hover:text-stone-100 transition-colors" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400">Error: No project found</p>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div animate={{ y: ["0%", "100%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-full h-[1px] bg-stone-300/20 dark:bg-stone-800/20" />
              </div>
            </div>
            <div className="px-6">
              <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">Null</span>
              <h3 className="text-4xl font-serif italic underline mt-2 mb-4 text-foreground">Undefined</h3>
              <p className="text-stone-700/85 dark:text-stone-500 text-lg font-serif italic leading-relaxed">The directory is currently empty. Project in development...</p>
            </div>
          </motion.div>

          <div className="group opacity-80">
            <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 relative border-2 border-dashed border-stone-300 dark:border-stone-800 flex flex-col items-center justify-center bg-[#0a0a0a]">
              <AlertTriangle size={48} className="text-stone-300 dark:text-stone-800 mb-4" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">ERROR: NO PROJECT FOUND</p>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div animate={{ y: ["0%", "100%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-full h-[1px] bg-stone-300/20 dark:bg-stone-800/20" />
              </div>
            </div>
            <div className="px-6">
              <span className="font-mono text-xs text-stone-600 uppercase tracking-widest">Null</span>
              <h3 className="text-4xl font-serif italic mt-2 mb-4 text-stone-700 underline decoration-dotted">Undefined</h3>
              <p className="text-stone-400/50 text-lg font-serif italic leading-relaxed">The directory is currently empty. Project in development...</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section className="py-24 text-center px-6 border-t border-stone-200 dark:border-stone-800 max-w-2xl mx-auto relative">
        <h2 className="text-4xl font-bold tracking-tight mb-8 font-serif italic text-foreground">Let's Connect.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="mailto:Liliana.mail@proton.me" className="bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 p-5 rounded-3xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all flex items-center justify-center gap-3">
            <Mail size={18} /> Send Email
          </a>
          <button onClick={() => setShowDiscord(true)} className="border border-stone-200 dark:border-stone-800 p-5 rounded-3xl font-bold uppercase tracking-widest text-xs hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-all flex items-center justify-center gap-3 text-foreground group">
            <DiscordIcon size={18} /> Discord
          </button>
        </div>

        <AnimatePresence>
          {showDiscord && (
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="absolute inset-x-6 -top-24 z-50 flex justify-center pointer-events-none">
              <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl shadow-2xl border border-stone-700 w-full max-w-sm font-mono text-left relative overflow-hidden pointer-events-auto">
                <div className="flex gap-1.5 mb-4 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <span className="text-[9px] text-stone-500 ml-2 uppercase tracking-tighter">Identity_Protocol.sh</span>
                  <button onClick={() => setShowDiscord(false)} className="ml-auto text-stone-500 hover:text-white transition-colors">
                    <X size={14} />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-700 bg-stone-800">
                     <img src="/images/320d5a40d309f942.png" className="w-full h-full object-cover" alt="PFP" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">User identified:</p>
                    <p className="text-purple-400 text-lg">{discordText}<span className="animate-pulse">_</span></p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-800 text-[9px] text-stone-600 leading-relaxed uppercase tracking-tighter">
                  ssh connection established...<br/>
                  status: active_listening
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <footer className="py-20 text-center opacity-30 font-mono text-[10px] uppercase tracking-[0.5em] text-foreground">
        Lily // Carregado, PT // 2026
      </footer>
    </div>
  );
}
