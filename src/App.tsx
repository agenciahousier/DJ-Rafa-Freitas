import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Radio, User, Music, HelpCircle, ArrowRight, ShieldCheck, Mail, Heart, ExternalLink } from 'lucide-react';

import Logo from './components/Logo';
import AudioEngine from './components/AudioEngine';
import Biography from './components/Biography';
import SoundSessions from './components/SoundSessions';
import LinksHub from './components/LinksHub';
import PresskitModal from './components/PresskitModal';

// Static image references from the generated assets
const coverImg = '/src/assets/images/rafa_freitas_cover_1784373213866.jpg';
const crowdImg = '/src/assets/images/rafa_freitas_crowd_1784373226462.jpg';
const sittingImg = '/src/assets/images/rafa_freitas_sitting_1784373251124.jpg';
const spotlightImg = '/src/assets/images/rafa_freitas_spotlight_1784373266174.jpg';
const flyerImg = '/src/assets/images/sound_sessions_flyer_1784298969878.jpg';

export default function App() {
  const [isPresskitOpen, setIsPresskitOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white">
      
      {/* Sticky Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo brand */}
          <button 
            onClick={() => handleScrollTo('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Logo size={36} showText={false} />
            <span className="font-display font-black tracking-widest text-sm uppercase group-hover:text-brand-red transition-colors duration-300">
              Rafa Freitas
            </span>
          </button>

          {/* Nav Items */}
          <nav className="flex items-center gap-1 sm:gap-4">
            <button
              onClick={() => handleScrollTo('biografia')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === 'biografia' ? 'text-brand-red bg-brand-red/10 border border-brand-red/25' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bio</span>
            </button>

            <button
              onClick={() => handleScrollTo('sound-sessions')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === 'sound-sessions' ? 'text-brand-red bg-brand-red/10 border border-brand-red/25' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sound Sessions</span>
            </button>

            <button
              onClick={() => handleScrollTo('links')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === 'links' ? 'text-brand-red bg-brand-red/10 border border-brand-red/25' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Links & Presskit</span>
            </button>
          </nav>

          {/* Quick Contact proposal */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsPresskitOpen(true)}
              className="py-1.5 px-4 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-brand-red/30 cursor-pointer"
            >
              EPK Presskit
            </button>
          </div>

        </div>
      </header>

      {/* 1. Hero / Splash Cover Screen */}
      <section id="home" className="min-h-screen pt-16 flex flex-col justify-between relative overflow-hidden bg-black">
        {/* Red neon background ring tunnel graphics */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-brand-red/40 rounded-full animate-pulse-ring absolute" />
          <div className="w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] border border-brand-red/20 rounded-full animate-pulse-ring absolute" style={{ animationDelay: '1.5s' }} />
          <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] border border-brand-red/10 rounded-full animate-pulse-ring absolute" style={{ animationDelay: '3s' }} />
        </div>

        {/* Hero Top Content Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10 my-auto">
          
          {/* Cover Photo Frame (LHS) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Outer frame glow */}
              <div className="absolute -inset-1.5 bg-brand-red rounded-3xl opacity-20 blur-xl animate-pulse" />
              
              <div className="relative bg-brand-dark-gray p-3 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={coverImg}
                  alt="DJ Rafa Freitas Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                {/* Embedded dynamic HUD brand text overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-brand-black/70 backdrop-blur-md px-5 py-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-bold block">
                      DJ / Producer
                    </span>
                    <span className="text-white font-display text-sm font-black uppercase tracking-wider">
                      Rafa Freitas
                    </span>
                  </div>
                  <Logo size={32} showText={false} />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Title, Bio preview & Live Audio Engine (RHS) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.42em] text-brand-red font-bold">
                Official Electronic Press Kit
              </span>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                Rafa Freitas
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start items-center text-xs font-mono text-gray-400 mt-2">
                <span>TECH HOUSE</span>
                <span className="text-brand-red">•</span>
                <span>TECHNO</span>
                <span className="text-brand-red">•</span>
                <span>SOUND SESSIONS FOUNDER</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm font-light max-w-lg leading-relaxed">
              Descubra a sonoridade pulsante e refinada de Rafa Freitas. Explore sua biografia artística completa, acompanhe os lançamentos semanais do prestigiado label <strong className="text-white">Sound Sessions</strong>, acesse links de contato express e faça download direto do presskit profissional.
            </p>

            {/* Live synth engine preview module */}
            <div className="w-full max-w-sm">
              <AudioEngine />
            </div>

            {/* Quick buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm sm:max-w-md justify-center lg:justify-start">
              <button
                onClick={() => handleScrollTo('biografia')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs uppercase font-mono tracking-wider border border-white/10 transition-all cursor-pointer"
              >
                <span>Explorar Bio</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('links')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl text-xs uppercase font-mono tracking-wider transition-all hover:shadow-lg hover:shadow-brand-red/30 cursor-pointer"
              >
                <span>Social Links</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pb-8 flex justify-center z-10">
          <button 
            onClick={() => handleScrollTo('biografia')}
            className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-brand-red transition-colors font-mono text-[9px] uppercase tracking-widest"
          >
            <span>Rolar para Baixo</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-brand-red" />
            </motion.div>
          </button>
        </div>

      </section>

      {/* 2. Biography Section */}
      <Biography crowdImg={crowdImg} sittingImg={sittingImg} />

      {/* 3. Sound Sessions Radio Show Section */}
      <SoundSessions flyerImg={flyerImg} />

      {/* 4. Links & Contact EPK Section */}
      <LinksHub spotlightImg={spotlightImg} onOpenPresskit={() => setIsPresskitOpen(true)} />

      {/* Footer copyright */}
      <footer className="bg-black py-12 px-4 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size={28} showText={false} />
            <span className="font-mono text-xs text-gray-500">
              © 2026 RAFA FREITAS. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1 text-gray-500">
              Developed for electronic music fans
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 hover:text-brand-red transition-colors cursor-pointer" onClick={() => handleScrollTo('home')}>
              Voltar ao Topo
            </span>
          </div>
        </div>
      </footer>

      {/* Presskit download choices Modal */}
      <PresskitModal isOpen={isPresskitOpen} onClose={() => setIsPresskitOpen(false)} />

    </div>
  );
}
