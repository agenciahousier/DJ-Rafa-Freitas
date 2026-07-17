import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, Image, Clipboard, Check, Loader2, ArrowRight } from 'lucide-react';

interface PresskitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PresskitModal({ isOpen, onClose }: PresskitModalProps) {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [copiedRider, setCopiedRider] = useState(false);

  const downloadFile = (id: string, fileName: string, content: string) => {
    setDownloadingId(id);
    
    // Simulate a high-fidelity studio loading state
    setTimeout(() => {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloadingId(null);
    }, 1500);
  };

  const epkReleaseText = `=====================================================
DJ RAFA FREITAS - OFFICIAL EPK RELEASE (PRESSKIT)
=====================================================

NOME ARTÍSTICO: Rafa Freitas
NACIONALIDADE: Brasileiro
CIDADE DE ORIGEM: Taubaté, SP
GÊNEROS: Tech House, Techno, Progressive House, Melodic Techno

RESUMO BIOGRÁFICO:
Rafa Freitas é um DJ brasileiro com uma longa conexão com a música eletrônica, iniciada ainda na adolescência. Aos 15 anos, deu seus primeiros passos profissionais ao realizar seu curso de DJ na antiga casa Se Clone, em Taubaté, sob orientação do DJ Marcelo Paixão. 

Consolidou sua carreira como DJ residente do lendário Revolution Café, em Taubaté, onde dividiu as cabines de som com referências como Luis Mauro, Marcelo Paixão, e Alex Andrade. Hoje é o criador e curador do conceituado label e rádio show semanal "Sound Sessions".

ASSINATURA SONORA:
Marcada por percussões orgânicas, sub-bass intensos, grooves dinâmicos do Tech House clássico e nuances futuristas do Techno Peak Time.

REDES SOCIAIS & CONTATOS:
- Instagram: @djrafafreitas
- SoundCloud: soundcloud.com/rafafreitasdj
- YouTube: youtube.com/c/sound-sessions-radio
- Email para Booking: booking.rafafreitas@gmail.com
- WhatsApp: +55 (12) 99999-9999

=====================================================
Copyright © 2026 Rafa Freitas. Todos os direitos reservados.
=====================================================`;

  const riderTecnicoText = `=====================================================
DJ RAFA FREITAS - RIDER TÉCNICO & INPUT LIST 2026
=====================================================

Para garantir a melhor qualidade sonora e performance artística, os seguintes equipamentos técnicos mínimos devem ser disponibilizados e testados com antecedência (Soundcheck) de no mínimo 1 hora antes da abertura da casa.

REQUISITOS DE CABINE (BOOTH DESIGN):
1. ESPAÇO: Cabine rígida, estável e livre de vibrações (mínimo de 2m de largura por 1m de profundidade). Altura padrão de 1.00m.

2. EQUIPAMENTOS DE DJ (PLAYER & MIXER):
   - 02x Pioneer CDJ-3000 ou CDJ-2000 Nexus 2 (atualizados com firmware mais recente).
   - 01x Mixer Pioneer DJM-900 Nexus 2 ou Pioneer DJM-V10.
   - Todos os equipamentos interconectados via cabo de rede LAN (Hub Link ativo).

3. RETORNO (BOOTH MONITORING):
   - 02x Caixas de Retorno ativas de alta qualidade (Preferencialmente d&b Audiotechnik, Meyer Sound, ou L-Acoustics).
   - Posicionados na altura dos ouvidos do DJ, um de cada lado (L e R).
   - Controle de volume independente na mesa de som acessível ao artista na cabine.

4. ALIMENTAÇÃO ELÉTRICA:
   - 04x Tomadas aterradas (110V ou 220V devidamente etiquetadas) exclusivas para a cabine.
   - No-Break (UPS) de no mínimo 1.5kVA dedicado aos CDJs e Mixer.

HOSPITALIDADE & LOGÍSTICA (CATERING):
- 04x Garrafas de Água Mineral (Sem gás, em temperatura ambiente).
- 02x Toalhas de rosto limpas e pretas de algodão na cabine.
- 04x Latas de Energético.

=====================================================
CONTATO TÉCNICO ROADIE/PRODUÇÃO:
Telefone/WhatsApp: +55 (12) 99999-9999
Email: tech.rafafreitas@gmail.com
=====================================================`;

  const handleCopyRider = () => {
    navigator.clipboard.writeText(riderTecnicoText);
    setCopiedRider(true);
    setTimeout(() => setCopiedRider(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay blur */}
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal body */}
        <motion.div
          className="bg-brand-dark-gray border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden relative z-10 glow-red-lg"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-white/5 bg-black/40 flex items-center justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-red font-bold block mb-1">
                Central de Downloads
              </span>
              <h3 className="font-display text-xl font-black text-white uppercase tracking-wider">
                Rafa Freitas Presskit
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-brand-red hover:text-white text-gray-400 transition-colors"
              id="btn-close-presskit-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content */}
          <div className="p-6 space-y-6">
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Selecione o arquivo desejado para baixar diretamente em seu dispositivo. Estes arquivos contêm o material de divulgação oficial atualizado para produtores, contratantes e assessoria de imprensa.
            </p>

            {/* List of files to download */}
            <div className="space-y-4">
              {/* File 1: Full EPK Release */}
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-red/10 border border-brand-red/20 rounded-lg text-brand-red">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                      EPK Release Oficial
                    </h4>
                    <p className="text-[10px] text-gray-500 font-mono">TEXT_RELEASE.TXT (1.8 KB)</p>
                  </div>
                </div>

                <button
                  onClick={() => downloadFile('release', 'Rafa_Freitas_EPK_Release.txt', epkReleaseText)}
                  disabled={downloadingId !== null}
                  className="flex items-center gap-1.5 py-2 px-3 bg-white/10 hover:bg-brand-red text-white hover:shadow-md hover:shadow-brand-red/20 text-[11px] font-mono uppercase tracking-wider rounded-lg transition-all"
                >
                  {downloadingId === 'release' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>{downloadingId === 'release' ? 'Baixando...' : 'Baixar'}</span>
                </button>
              </div>

              {/* File 2: Tech Rider */}
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-red/10 border border-brand-red/20 rounded-lg text-brand-red">
                    <Clipboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                      Rider Técnico & Input List
                    </h4>
                    <p className="text-[10px] text-gray-500 font-mono">RIDER_TECNICO.TXT (2.4 KB)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Action 1: Copy to clipboard */}
                  <button
                    onClick={handleCopyRider}
                    className="p-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors"
                    title="Copiar Rider para Área de Transferência"
                  >
                    {copiedRider ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Clipboard className="w-4 h-4" />
                    )}
                  </button>

                  {/* Action 2: Download */}
                  <button
                    onClick={() => downloadFile('rider', 'Rafa_Freitas_Rider_Tecnico.txt', riderTecnicoText)}
                    disabled={downloadingId !== null}
                    className="flex items-center gap-1.5 py-2 px-3 bg-white/10 hover:bg-brand-red text-white hover:shadow-md hover:shadow-brand-red/20 text-[11px] font-mono uppercase tracking-wider rounded-lg transition-all"
                  >
                    {downloadingId === 'rider' ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    <span>{downloadingId === 'rider' ? 'Baixando...' : 'Baixar'}</span>
                  </button>
                </div>
              </div>

              {/* File 3: Promo Photos ZIP */}
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-red/10 border border-brand-red/20 rounded-lg text-brand-red">
                    <Image className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                      Fotos de Divulgação HD
                    </h4>
                    <p className="text-[10px] text-gray-500 font-mono">PROMO_PHOTOS.ZIP (MOCK INDEX)</p>
                  </div>
                </div>

                <button
                  onClick={() => downloadFile('photos', 'Rafa_Freitas_Fotos_EPK.txt', `DOWLOAD LINKS DAS FOTOS DE DIVULGAÇÃO OFICIAIS DO DJ RAFA FREITAS:
1. Cover Portrait Shot: ${window.location.origin}/src/assets/images/rafa_freitas_cover_1784298903387.jpg
2. Crowd Atmosphere Stage: ${window.location.origin}/src/assets/images/rafa_freitas_crowd_1784298917842.jpg
3. Sitting Streetwear Pose: ${window.location.origin}/src/assets/images/rafa_freitas_sitting_1784298932520.jpg
4. DJ Decks Spotlight Frame: ${window.location.origin}/src/assets/images/rafa_freitas_spotlight_1784298949638.jpg

Copie os links acima para obter os arquivos JPG originais de alta qualidade!`)}
                  disabled={downloadingId !== null}
                  className="flex items-center gap-1.5 py-2 px-3 bg-white/10 hover:bg-brand-red text-white hover:shadow-md hover:shadow-brand-red/20 text-[11px] font-mono uppercase tracking-wider rounded-lg transition-all"
                >
                  {downloadingId === 'photos' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>{downloadingId === 'photos' ? 'Baixando...' : 'Baixar'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Booking Fast Link */}
            <div className="p-4 bg-brand-red/5 rounded-xl border border-brand-red/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white block">Quer contratar o artista?</span>
                <span className="text-[10px] text-gray-400 block font-light">Envie uma proposta de data</span>
              </div>
              <a
                href="mailto:booking.rafafreitas@gmail.com?subject=Contratação%20DJ%20Rafa%20Freitas"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-red hover:text-white transition-colors"
              >
                <span>Contato Express</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
