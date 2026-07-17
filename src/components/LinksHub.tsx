import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Youtube, Music, Download, Heart, ExternalLink, CalendarDays } from 'lucide-react';
import { LinkItem } from '../types';

interface LinksHubProps {
  spotlightImg: string;
  onOpenPresskit: () => void;
}

export default function LinksHub({ spotlightImg, onOpenPresskit }: LinksHubProps) {
  // Configured high-fidelity links
  const links: LinkItem[] = [
    {
      id: 'instagram',
      name: 'Instagram @djrafafreitas',
      iconName: 'Instagram',
      url: 'https://instagram.com/djrafafreitas',
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      glowColor: 'shadow-[0_0_15px_rgba(238,42,123,0.3)] hover:shadow-[0_0_25px_rgba(238,42,123,0.6)]'
    },
    {
      id: 'whatsapp',
      name: 'Contrate via WhatsApp',
      iconName: 'Phone',
      url: 'https://wa.me/5512999999999?text=Ol%C3%A1%20DJ%20Rafa%20Freitas!%20Gostaria%20de%20solicitar%20uma%20proposta%20de%20data%20para%20evento.',
      color: 'bg-[#25D366]',
      glowColor: 'shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]'
    },
    {
      id: 'youtube',
      name: 'Inscreva-se no YouTube',
      iconName: 'Youtube',
      url: 'https://youtube.com/c/sound-sessions-radio',
      color: 'bg-[#FF0000]',
      glowColor: 'shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]'
    },
    {
      id: 'soundcloud',
      name: 'Ouça no SoundCloud',
      iconName: 'Music',
      url: 'https://soundcloud.com/rafafreitasdj',
      color: 'bg-[#FF5500]',
      glowColor: 'shadow-[0_0_15px_rgba(255,85,0,0.3)] hover:shadow-[0_0_25px_rgba(255,85,0,0.6)]'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-white" />;
      case 'Phone':
        return <MessageCircle className="w-5 h-5 text-white" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5 text-white" />;
      case 'Music':
        return <Music className="w-5 h-5 text-white" />;
      default:
        return <Music className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="links" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-gray/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Subtitle / CTA header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red font-semibold block mb-2">
            Links & Contatos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white glow-red-text">
            Conecte-se com o DJ
          </h2>
          <p className="text-gray-400 text-xs mt-3 uppercase tracking-widest font-mono">
            Clique no ícone para abrir ou baixar materiais
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Spotlight Cover Photo Panel (LHS on Desktop) */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative group max-w-sm mx-auto">
              {/* Outer double red ring background glow */}
              <div className="absolute -inset-1 bg-brand-red rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500 animate-pulse-ring" />
              <div className="relative bg-brand-dark-gray p-2 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={spotlightImg}
                  alt="DJ Rafa Freitas na cabine sob um feixe dramático de luz"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating On-stage metadata badge */}
                <div className="absolute top-4 right-4 bg-brand-red/90 text-white font-mono text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md shadow-md border border-brand-red-dark">
                  LIVE PERFORMER
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Panel & Big Download Button (RHS on Desktop) */}
          <div className="md:col-span-7 space-y-6 order-1 md:md:order-2">
            
            {/* Interactive bouncy link buttons */}
            <div className="space-y-4">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-4 bg-brand-dark-gray/70 backdrop-blur-md rounded-xl border border-white/10 text-white hover:border-white/20 transition-all duration-300 ${link.glowColor}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Rounded customized icon badge */}
                    <div className={`p-2.5 rounded-lg ${link.color} shadow-inner`}>
                      {renderIcon(link.iconName)}
                    </div>
                    <span className="font-display font-bold text-sm tracking-wider uppercase text-left">
                      {link.name}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Huge, Epic Download Presskit Trigger Button */}
            <motion.button
              onClick={onOpenPresskit}
              className="w-full flex flex-col items-center justify-center p-6 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl shadow-lg glow-red-lg border border-brand-red-dark relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="btn-trigger-presskit"
            >
              {/* Animated scanning lines across the button background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="flex items-center gap-3.5 mb-1.5 relative z-10">
                <Download className="w-6 h-6 text-white animate-bounce" />
                <span className="font-display text-lg font-black uppercase tracking-widest">
                  Baixar Presskit
                </span>
              </div>
              <p className="text-[10px] text-white/75 font-mono uppercase tracking-widest relative z-10">
                Rider Técnico + Release + Fotos HD de Divulgação
              </p>
            </motion.button>

            {/* Direct quick gig inquiry prompt */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 pt-2">
              <CalendarDays className="w-4 h-4 text-brand-red" />
              <span>Agenda de Booking 2026 Aberta</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
