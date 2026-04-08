"use client";

import { Compass } from 'lucide-react';
import { useState, useEffect } from "react";

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Narrative", href: "/#about" },
    { name: "Skillset", href: "/#skills" },
    { name: "Journey", href: "/#journey" },
    { name: "Projects", href: "/#projects" },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <nav className={`
        flex items-center gap-8 px-6 py-3 rounded-full border transition-all duration-700 pointer-events-auto
        ${scrolled 
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-stone-200 dark:border-stone-800 shadow-2xl scale-95" 
          : "bg-transparent border-transparent scale-100"}
      `}>
        
        {/* LOGO BOX */}
        <a href="/#" className="flex items-center group">
          <div className="p-1.5 rounded-full transition-all duration-500 group-hover:bg-stone-100 dark:group-hover:bg-stone-900">
            <Compass 
              size={18} 
              className="text-stone-500 dark:text-stone-400 group-hover:rotate-[360deg] transition-transform duration-1000" 
            />
          </div>
        </a>

        {/* NAVIGATION LINKS - CLEAN & MONO */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          
          <div className="h-3 w-[1px] bg-stone-200 dark:bg-stone-800" />
          
          <a 
            href="https://github.com/LilyAtrophy" 
            target="_blank" 
            className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:scale-110"
          >
            <GithubIcon />
          </a>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          @apply font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-100 transition-all relative;
        }
        .nav-link::after {
          content: '';
          @apply absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-400 dark:bg-stone-600 transition-all duration-300;
        }
        .nav-link:hover::after {
          @apply w-full;
        }
      `}</style>
    </div>
  );
}
