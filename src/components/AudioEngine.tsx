import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Square, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AudioEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm] = useState(126);
  const [synthGlow, setSynthGlow] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const schedulerTimerRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef<number>(0.0);
  const stepRef = useRef<number>(0);

  // Frequency visualizer data for rendering animated bars
  const [visualBars, setVisualBars] = useState<number[]>(new Array(16).fill(10));
  const animationRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // Initialize Audio Context on demand
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Create analyser node for the visualizer
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;
      analyser.connect(ctx.destination);
    }
  };

  // Noise buffer for High Hat
  const createNoiseBuffer = () => {
    if (!audioCtxRef.current) return null;
    const bufferSize = audioCtxRef.current.sampleRate * 0.1; // 100ms
    const buffer = audioCtxRef.current.createBuffer(1, bufferSize, audioCtxRef.current.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  };

  // Synthesize instruments
  const playKick = (time: number) => {
    const ctx = audioCtxRef.current;
    if (!ctx || !analyserRef.current) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(analyserRef.current);

    // Tech house deep kick frequency sweep
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.18);

    // Kick volume envelope
    gain.gain.setValueAtTime(1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.22);

    osc.start(time);
    osc.stop(time + 0.25);
  };

  const playHiHat = (time: number, accent: boolean = false) => {
    const ctx = audioCtxRef.current;
    const noiseBuffer = createNoiseBuffer();
    if (!ctx || !noiseBuffer || !analyserRef.current) return;

    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7000, time);

    const gain = ctx.createGain();
    
    source.connect(filter);
    filter.connect(gain);
    gain.connect(analyserRef.current);

    gain.gain.setValueAtTime(accent ? 0.25 : 0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (accent ? 0.08 : 0.05));

    source.start(time);
    source.stop(time + 0.1);
  };

  const playBass = (time: number, freq: number, duration: number) => {
    const ctx = audioCtxRef.current;
    if (!ctx || !analyserRef.current) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, time);
    filter.frequency.exponentialRampToValueAtTime(120, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(analyserRef.current);

    // Bassline envelope
    gain.gain.setValueAtTime(0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  };

  // Tech house bass notes (A minor / F major techno vibe)
  // Step 16 grid sequencer
  const scheduler = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const secondsPerBeat = 60.0 / bpm;
    const stepDuration = secondsPerBeat / 4; // 16th note

    while (nextNoteTimeRef.current < ctx.currentTime + 0.1) {
      const time = nextNoteTimeRef.current;
      const step = stepRef.current;

      // 1. Kick on beats 1, 5, 9, 13 (quarter notes)
      if (step % 4 === 0) {
        playKick(time);
      }

      // 2. Offbeat Hi-Hat on steps 2, 6, 10, 14
      if (step % 4 === 2) {
        playHiHat(time, true);
      } else if (step % 2 === 1 && Math.random() > 0.6) {
        // Subtle organic ghost hats
        playHiHat(time, false);
      }

      // 3. Techno acid/deep house bass pattern
      // Deep notes (MIDI A1 = 55Hz, G1 = 49Hz, F1 = 43.6Hz, C2 = 65.4Hz)
      const bassNotes = [55, 55, 65.4, 49, 55, 43.6, 55, 65.4, 55, 55, 65.4, 49, 55, 43.6, 65.4, 73.4];
      const bassTriggers = [
        false, false, true,  false, // beat 1
        true,  false, false, true,  // beat 2
        false, true,  true,  false, // beat 3
        true,  false, true,  false  // beat 4
      ];

      if (bassTriggers[step]) {
        playBass(time, bassNotes[step], stepDuration * 0.95);
      }

      // Trigger visual beats synced to the grid
      const visualStep = step;
      setTimeout(() => {
        setCurrentStep(visualStep);
        setSynthGlow(step % 4 === 0 ? 1 : 0.4);
      }, (time - ctx.currentTime) * 1000);

      // Advance step
      nextNoteTimeRef.current += stepDuration;
      stepRef.current = (stepRef.current + 1) % 16;
    }
  };

  // Sequencer loop
  useEffect(() => {
    if (isPlaying) {
      initAudio();
      const ctx = audioCtxRef.current;
      if (ctx) {
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
        nextNoteTimeRef.current = ctx.currentTime + 0.05;
        stepRef.current = 0;
        
        const intervalTime = 25.0; // poll every 25ms
        const runScheduler = () => {
          scheduler();
          schedulerTimerRef.current = window.setTimeout(runScheduler, intervalTime);
        };
        runScheduler();

        // Start visualizer frames
        const updateVisuals = () => {
          if (analyserRef.current) {
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
            analyserRef.current.getByteFrequencyData(dataArray);
            
            // Map the high-mid-low frequency blocks to 16 display bars
            const newBars = Array.from({ length: 16 }, (_, i) => {
              const dataIndex = Math.floor((i / 16) * dataArray.length * 0.6);
              const val = dataArray[dataIndex] || 0;
              return Math.max(5, (val / 255) * 60);
            });
            setVisualBars(newBars);
          }
          animationRef.current = requestAnimationFrame(updateVisuals);
        };
        updateVisuals();
      }
    } else {
      if (schedulerTimerRef.current) {
        clearTimeout(schedulerTimerRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setVisualBars(new Array(16).fill(6));
    }

    return () => {
      if (schedulerTimerRef.current) clearTimeout(schedulerTimerRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    initAudio();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center bg-brand-dark-gray/60 backdrop-blur-md rounded-2xl border border-white/10 p-5 w-full max-w-sm glow-red/20">
      <div className="flex items-center justify-between w-full mb-3">
        <div className="flex items-center gap-2">
          <Activity className="text-brand-red w-5 h-5 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
            RF Live Synth Engine
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-mono text-xs text-brand-red font-bold">
            {bpm}
          </span>
          <span className="font-mono text-[9px] text-gray-500">BPM</span>
        </div>
      </div>

      {/* Interactive visualizer board */}
      <div className="h-16 w-full flex items-end justify-between gap-[2px] bg-black/40 rounded-xl p-3 border border-white/5 mb-4 overflow-hidden relative">
        {/* Step indicator dot train */}
        <div className="absolute top-1 left-0 right-0 px-3 flex justify-between">
          {Array.from({ length: 16 }).map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-75 ${
                idx === currentStep
                  ? 'bg-brand-red scale-125 shadow-[0_0_8px_#ff003c]'
                  : isPlaying && idx % 4 === 0
                  ? 'bg-white/40'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Visual equalizer bars */}
        {visualBars.map((val, idx) => (
          <motion.div
            key={idx}
            className="w-full rounded-t-sm"
            style={{
              height: `${val}%`,
              background: `linear-gradient(to top, rgba(255, 0, 60, 0.4) 0%, rgba(255, 0, 60, 1) 100%)`,
              boxShadow: idx === currentStep ? '0 0 8px rgba(255,0,60,0.6)' : 'none',
            }}
            animate={{ height: isPlaying ? `${val}%` : '8%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 w-full">
        {/* Toggle play trigger */}
        <button
          onClick={togglePlayback}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-display text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
            isPlaying
              ? 'bg-brand-red hover:bg-brand-red-dark text-white shadow-lg glow-red-lg'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
          }`}
          id="btn-toggle-live-synth"
        >
          {isPlaying ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span>Desligar Som</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span>Ligar Som Ambient</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[10px] text-gray-500 font-mono mt-3 text-center">
        {isPlaying 
          ? 'Tocando batida de Tech House em tempo real via Web Audio API' 
          : 'Clique para ativar a batida de fundo gerada em tempo real'}
      </p>
    </div>
  );
}
