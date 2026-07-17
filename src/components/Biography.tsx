import React from 'react';
import { motion } from 'motion/react';
import { Music, Award, Disc, Compass } from 'lucide-react';

interface BiographyProps {
  crowdImg: string;
  sittingImg: string;
}

export default function Biography({ crowdImg, sittingImg }: BiographyProps) {
  return (
    <section id="biografia" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Decorative Red Laser Background Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red font-semibold">
            The Artist
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 glow-red-text">
            Biografia
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Part 1: Main Bio & Crowd Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-brand-red bg-brand-red/10 p-2.5 rounded-lg border border-brand-red/20">
                <Disc className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </span>
              <h3 className="font-display text-2xl font-bold tracking-wide uppercase text-white">
                Longa Conexão com a Música
              </h3>
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed font-light">
              Rafa Freitas é um DJ brasileiro com uma longa conexão com a música eletrônica, iniciada ainda na adolescência. 
              Aos 15 anos, deu seus primeiros passos profissionais ao realizar seu curso de DJ na antiga casa 
              <strong className="text-white font-medium"> Se Clone</strong>, em Taubaté, sob orientação do DJ Marcelo Paixão. 
              Foi nesse ambiente que nasceu sua paixão pelas pick-ups e pela cultura da música eletrônica.
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              A inspiração veio ainda antes, ouvindo o tradicional programa <strong className="text-white font-medium">DJ Time</strong>, 
              transmitido pela Rádio 93 FM de Taubaté, que apresentou a Rafa os primeiros sets e mixes da cena eletrônica, 
              despertando o desejo de um dia estar do outro lado da cabine. 
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              Sua trajetória ganhou força quando se tornou DJ residente da antiga casa <strong className="text-white font-medium">Revolution Café</strong>, 
              em Taubaté, uma das referências da noite na região na época. Ali teve a oportunidade de dividir a cabine com DJs de grande calibre, 
              consolidando seu nome e refinando sua identidade sonora.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="block font-display text-2xl font-bold text-white">15+</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">Anos de Carreira</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-brand-red">93FM</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">Primeira Inspiração</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-white">TAUBATÉ</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">Cidade Natal</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Outer frame neon line */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-red to-black rounded-2xl opacity-30 group-hover:opacity-60 transition duration-500 blur-xl" />
              <div className="relative bg-brand-dark-gray p-2.5 rounded-2xl border border-white/10 overflow-hidden">
                <img
                  src={crowdImg}
                  alt="DJ Rafa Freitas no palco agitando a multidão com CO2 explodindo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-red font-bold">
                    Palco Sound Sessions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Part 2: Inner Bio (Sitting) & Core Trajectory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-l from-brand-red/40 to-black rounded-2xl opacity-40 group-hover:opacity-70 transition duration-500 blur-xl" />
              <div className="relative bg-brand-dark-gray p-2.5 rounded-2xl border border-white/10 overflow-hidden">
                <img
                  src={sittingImg}
                  alt="DJ Rafa Freitas sentado em ambiente de estúdio com estilo urbano"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">
                    Estilo & Atitude
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-brand-red bg-brand-red/10 p-2.5 rounded-lg border border-brand-red/20">
                <Award className="w-5 h-5" />
              </span>
              <h3 className="font-display text-2xl font-bold tracking-wide uppercase text-white">
                Trajetória e Influência
              </h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              O DJ brasileiro <strong className="text-brand-red font-medium">Rafa Freitas</strong> iniciou sua jornada aos 15 anos em Taubaté, 
              fortemente influenciado pelo icônico programa de rádio <strong className="text-white font-medium">DJ Time</strong>. 
              Formado tecnicamente pelo veterano Marcelo Paixão na conceituada casa <strong className="text-white font-medium">Se Clone</strong>, 
              ele absorveu os fundamentos da mixagem clássica e da leitura de pista com precisão cirúrgica.
            </p>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              Consolidou seu estilo musical marcante e versátil ao assumir a residência do lendário <strong className="text-white font-medium">Revolution Café</strong>. 
              Neste consagrado templo da noite paulista, teve o privilégio de compartilhar cabines de som e realizar sets inesquecíveis 
              ao lado de lendas locais como <strong className="text-white font-medium">Luis Mauro</strong>, <strong className="text-white font-medium">Marcelo Paixão</strong>, 
              e <strong className="text-white/90 font-medium">Alex Andrade</strong> — este último, uma de suas principais fontes de inspiração artística.
            </p>

            <div className="p-5 bg-brand-dark-gray/50 rounded-xl border border-white/5 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-red font-semibold block">
                Sonoridade Atual
              </span>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Seus sets atuais mesclam as tendências quentes do Tech House, a agressividade polida do Techno e as atmosferas envolventes do Melodic & Progressive House. Essa curadoria apurada confere ao artista uma assinatura sonora singular e energia ininterrupta na pista.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
