import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import KayAI from './components/KayAI';
import { Bot, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isKayAIOpen, setIsKayAIOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">karthikshambuni.in</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setIsKayAIOpen(true)}
            className="group relative flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-lg shadow-blue-900/20"
          >
            <Bot className="w-4 h-4 text-white" />
            <span className="text-white font-medium text-sm">Personalized KayAI</span>
            <Sparkles className="w-3 h-3 text-blue-200 animate-pulse" />
            
            {/* Tooltip-like effect */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-zinc-300 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-700">
              Automate tasks with KayAI
            </div>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <LandingPage />
      </main>

      {/* KayAI Agent Interface */}
      <KayAI isOpen={isKayAIOpen} onClose={() => setIsKayAIOpen(false)} />

      {/* Floating Action Button (Mobile) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsKayAIOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/40 sm:hidden"
      >
        <Bot className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  );
}
