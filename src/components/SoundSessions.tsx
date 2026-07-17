import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, Calendar, Clock, Music, Youtube, CheckCircle, Disc, Flame } from 'lucide-react';
import { Guest } from '../types';

interface SoundSessionsProps {
  flyerImg: string;
}

export default function SoundSessions({ flyerImg }: SoundSessionsProps) {
  // Populate realistic data for the guests shown in the prompt flyer screenshot
  const guests: Guest[] = [
    {
      id: 'jovit',
      name: 'JOVIT',
      date: 'QUIN 14 05',
      time: '19:00',
      genre: 'Tech House / Minimal Deep Tech',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-jovit',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-jovit',
      description: 'Sets repletos de graves gordos, groove contagiante e drops marcantes da cena Minimal Tech.',
      tracklist: [
        '1. Rafa Freitas - Intro Set (Live)',
        '2. Jovit - Back To Deep (Original Mix)',
        '3. Dennis Cruz - El Sueño (Original Mix)',
        '4. Jovit - ID (Unreleased Track)',
        '5. Pawsa - Roll Play (Extended Mix)',
        '6. Cloonee - Sippin Yak (Original Mix)'
      ]
    },
    {
      id: 'bass-bella',
      name: 'BASS BELLA',
      date: 'QUIN 04 06',
      time: '19:00',
      genre: 'Progressive House & Melodic Techno',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-bass-bella',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-bass-bella',
      description: 'Uma jornada sensorial pelo Progressive House, combinando harmonias melódicas e batidas imersivas.',
      tracklist: [
        '1. Guy J - State Of Sage (Original Mix)',
        '2. Bass Bella - Nebula (Intro Mix)',
        '3. Yotto - Cooper\'s Cup (Original Mix)',
        '4. Patrice Bäumel - Roar (Adana Twins Remix)',
        '5. Tale Of Us - Nova (Original Mix)'
      ]
    },
    {
      id: 'saab',
      name: 'SAAB',
      date: 'QUIN 11 06',
      time: '19:00',
      genre: 'Deep Tech & Afro House',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-saab',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-saab',
      description: 'Focado na união perfeita de percussão orgânica com sintetizadores profundos e quentes.',
      tracklist: [
        '1. Black Coffee - Drive (Intro Mix)',
        '2. Saab - Sahara Dust (Original Mix)',
        '3. Keinemusik - Muyè (Original Mix)',
        '4. &ME - The Rapture Pt.III (Original Mix)',
        '5. Saab - ID (Unreleased Dub)'
      ]
    },
    {
      id: 'paulo-lc',
      name: 'PAULO LC',
      date: 'QUIN 21 05',
      time: '19:00',
      genre: 'Tech House & Bass House',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-paulo-lc',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-paulo-lc',
      description: 'O melhor do Tech House nacional em um set de alta octanagem feito para explodir pistas de dança.',
      tracklist: [
        '1. Fisher - Take It Off (Original Mix)',
        '2. Paulo LC - Pump Up (Original Mix)',
        '3. Martin Ikin - Oscill8 (Extended Mix)',
        '4. Chris Lake - More Baby (Original Mix)',
        '5. Paulo LC - ID (Bootleg Mix)'
      ]
    },
    {
      id: 'duque',
      name: 'DUQUE',
      date: 'QUIN 28 05',
      time: '19:00',
      genre: 'Peak Time Techno & Industrial Beats',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-duque',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-duque',
      description: 'Um set dinâmico e enérgico, conduzido por batidas rápidas, texturas ácidas e sintetizadores modulares.',
      tracklist: [
        '1. Adam Beyer - Desert Rose (Original Mix)',
        '2. Duque - Core Generator (Intro Mix)',
        '3. Charlotte de Witte - Overdrive (Original Mix)',
        '4. Enrico Sangiuliano - Sound Of Space (Original Mix)',
        '5. Duque - Modulation Decay (Original Dub)'
      ]
    },
    {
      id: 'robson-nogueira',
      name: 'ROBSON NOGUEIRA',
      date: 'QUIN 18 06',
      time: '19:00',
      genre: 'Acid House & Raw Techno',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-robson-nogueira',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-robson-nogueira',
      description: 'Relembrando as origens do clubbing com loops hipnóticos de Roland TB-303 e caixas industriais.',
      tracklist: [
        '1. Josh Wink - Higher State of Consciousness (Original Mix)',
        '2. Robson Nogueira - 303 Resurrection (Intro Mix)',
        '3. Richie Hawtin - Plastikman Loop (Edit)',
        '4. Robson Nogueira - Raw Sector (Original Mix)'
      ]
    },
    {
      id: 'lekz',
      name: 'LEKZ',
      date: 'QUIN 30 04',
      time: '19:00',
      genre: 'Afro House / Melodic House',
      soundcloudUrl: 'https://soundcloud.com/rafafreitasdj/sound-sessions-lekz',
      youtubeUrl: 'https://youtube.com/watch?v=sound-sessions-lekz',
      description: 'Um set rítmico, guiado por percussões africanas sofisticadas e acordes menores melancólicos.',
      tracklist: [
        '1. Rampa - Les Gout (Original Mix)',
        '2. Lekz - Tribal Sync (Original Mix)',
        '3. Maz - Banho de Folhas (Remix)',
        '4. Lekz - ID (Sintonia Dub)'
      ]
    },
  ];

  const [activeGuest, setActiveGuest] = useState<Guest>(guests[0]);

  return (
    <section id="sound-sessions" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black relative">
      {/* Visual neon beam lines across background */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red font-semibold">
            Radio Show & Label
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 glow-red-text">
            Sound Sessions
          </h2>
          <p className="text-gray-400 text-sm mt-3 uppercase tracking-widest font-mono">
            Um DJ Convidado Toda Semana no SoundCloud e YouTube
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Show Introduction, Poster & Guest List selection (LHS) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center bg-brand-dark-gray/50 p-6 rounded-2xl border border-white/5">
              <div className="w-32 h-32 flex-shrink-0 relative rounded-xl overflow-hidden border border-brand-red/30 glow-red">
                <img
                  src={flyerImg}
                  alt="Sound Sessions Radio Show Logotipo Oficial"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
                  <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-red font-bold">
                    ON-AIR SEMANAL
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-white">
                  Sound Sessions Radio Show
                </h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  Fundado e com curadoria de <strong className="text-white font-medium">Rafa Freitas</strong>, o programa semanal reúne os melhores nomes da cena underground nacional para apresentar sets exclusivos de 1 hora de duração.
                </p>
              </div>
            </div>

            {/* Scrollable Guest Episode Selectors */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400">
                  Histórico de Convidados
                </h4>
                <span className="text-[10px] font-mono text-brand-red uppercase">
                  {guests.length} episódios no ar
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-2">
                {guests.map((g) => {
                  const isActive = activeGuest.id === g.id;
                  return (
                    <motion.button
                      key={g.id}
                      onClick={() => setActiveGuest(g)}
                      className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border ${
                        isActive
                          ? 'bg-brand-red/10 border-brand-red shadow-[0_0_15px_rgba(255,0,60,0.15)]'
                          : 'bg-brand-dark-gray/30 border-white/5 hover:border-white/15'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-brand-red animate-ping' : 'bg-gray-600'}`} />
                          <span className="font-display text-sm font-black tracking-wider text-white uppercase">
                            {g.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-brand-red" />
                          {g.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block text-[9px] font-mono px-2 py-0.5 bg-white/5 text-gray-400 rounded">
                          {g.genre.split(' ')[0]}
                        </span>
                        <p className="text-[10px] text-gray-500 font-mono mt-1">19:00h</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Selected Guest Active Showcase & Media Control Mockup (RHS) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGuest.id}
                className="bg-brand-dark-gray/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between h-full glow-red/10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Showcase Header */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-brand-red font-bold block mb-1">
                        Destaque do Episódio
                      </span>
                      <h3 className="font-display text-3xl font-black text-white tracking-wider uppercase">
                        {activeGuest.name}
                      </h3>
                    </div>
                    <span className="bg-brand-red/20 text-brand-red font-mono text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-brand-red/30">
                      EPISÓDIO
                    </span>
                  </div>

                  {/* Date & Time metadata */}
                  <div className="flex gap-4 p-3 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      <span>{activeGuest.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-red" />
                      <span>{activeGuest.time}H UTC-3</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 font-mono">
                      Gênero Musical:
                    </h4>
                    <p className="text-white text-sm font-semibold tracking-wide">
                      {activeGuest.genre}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 font-mono">
                      Apresentação:
                    </h4>
                    <p className="text-gray-300 text-xs font-light leading-relaxed">
                      {activeGuest.description}
                    </p>
                  </div>

                  {/* Tracklist Section */}
                  {activeGuest.tracklist && (
                    <div className="pt-2">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                        <Music className="w-3.5 h-3.5 text-brand-red" />
                        Tracklist Exclusivo
                      </h4>
                      <div className="bg-black/40 rounded-xl border border-white/5 p-3.5 max-h-[160px] overflow-y-auto space-y-1.5">
                        {activeGuest.tracklist.map((track, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-gray-400 hover:text-white transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red/50" />
                            <span className="font-mono text-[10px] text-brand-red font-medium">[{i+1}]</span>
                            <span className="truncate font-light">{track}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Platform Redirects */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/15">
                  <a
                    href={activeGuest.soundcloudUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#ff5500] hover:bg-[#e04b00] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Music className="w-4 h-4" />
                    <span>SoundCloud</span>
                  </a>
                  <a
                    href={activeGuest.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#ff0000] hover:bg-[#cc0000] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
