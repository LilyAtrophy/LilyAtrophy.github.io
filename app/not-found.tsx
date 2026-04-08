"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Atom, Dna, Cog, ArrowRight, Fingerprint } from 'lucide-react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#0f1115]" />;

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#0f1115] text-[#d4d4d2] overflow-hidden p-6">
      
      {/* 1. The Background Layer: Technical "Drafting" Paper */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* 2. Interactive "Floating Parts" (You can drag these!) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div drag dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}} className="absolute top-[20%] left-[15%] pointer-events-auto cursor-grab active:cursor-grabbing text-stone-700 hover:text-stone-400 transition-colors">
          <Atom size={60} strokeWidth={0.5} />
        </motion.div>
        <motion.div drag dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}} className="absolute bottom-[25%] right-[10%] pointer-events-auto cursor-grab active:cursor-grabbing text-stone-700 hover:text-stone-400 transition-colors">
          <Dna size={80} strokeWidth={0.5} />
        </motion.div>
        <motion.div drag dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}} className="absolute top-[60%] left-[10%] pointer-events-auto cursor-grab active:cursor-grabbing text-stone-700 hover:text-stone-400 transition-colors">
          <Cog size={40} strokeWidth={0.5} className="animate-[spin_8s_linear_infinite]" />
        </motion.div>
      </div>

      {/* 3. The Main Control Panel */}
      <div className="relative z-10 w-full max-w-xl border border-stone-800 bg-[#121418]/50 backdrop-blur-xl p-1 px-1 rounded-sm shadow-2xl">
        <div className="border border-stone-800 p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-stone-600" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-stone-600" />

          <header className="flex justify-between items-start mb-12">
            <div className="space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-stone-500">System.State</p>
              <h2 className="font-serif italic text-xl text-stone-300 underline decoration-stone-800 underline-offset-4">Anomaly Detected</h2>
            </div>
            <Fingerprint size={24} className="text-stone-700" />
          </header>

          <h1 className="font-serif text-6xl md:text-8xl mb-6 text-stone-100 tracking-tighter opacity-90">
            404
          </h1>

          <p className="font-sans font-light text-stone-400 text-sm leading-relaxed max-w-sm mb-12 border-l border-stone-800 pl-6">
            The requested module has failed to initialize. The coordinates provided lead to a geometric void. Please recalibrate your navigation parameters.
          </p>

          <footer className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <Link href="/" className="group flex items-center gap-4 bg-stone-100 text-black px-6 py-3 rounded-full transition-all hover:pr-8 hover:bg-stone-200">
              <span className="font-sans font-bold text-[10px] uppercase tracking-widest">Restart Core</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-col font-mono text-[8px] text-stone-600 space-y-1 uppercase tracking-widest">
              <span>Status: Offline</span>
              <span>Ref: ERR_0x404</span>
            </div>
          </footer>
        </div>
      </div>

    </main>
  );
}
