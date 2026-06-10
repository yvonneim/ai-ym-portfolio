import React, { useRef, useEffect, useState } from 'react'

export default function PortfolioHome({ setView }) {
  const audioUrl = "/welcome.wav";
  const audioRef = useRef(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoaded = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const pct = Number(e.target.value);
    if (duration > 0) {
      audio.currentTime = pct * duration;
      setCurrentTime(audio.currentTime);
    }
  };

  const progress = duration > 0 ? Math.min(1, currentTime / duration) : 0;

  return (
    <div className="w-full max-w-5xl mx-auto px-16 md:px-24 py-16 text-center flex flex-col items-center justify-center bg-white">
      <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#3B82F6] px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8">
        • ENTERPRISE AI OPERATIONS & INFRASTRUCTURE
      </div>

      <h1 className="font-serif font-normal tracking-tight text-[#111827] text-5xl md:text-6xl max-w-3xl mx-auto leading-tight mb-6">
        Fuel your <span className="italic text-purple-600 font-normal">infinite growth.</span>
      </h1>

      <p className="text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed mb-8">
        Hi, I'm Yvonne. I leverage over a decade of enterprise systems analysis to architect, deploy, and scale advanced generative AI applications. I specialize in model integration, secure data pipeline orchestration, and end-to-end technical enablement.
      </p>

      <button
        type="button"
        onClick={() => setView('forward-moves')}
        className="bg-[#030712] hover:bg-[#111827] text-white text-xs font-bold tracking-wider px-8 py-4 rounded-xl shadow-sm transition-all hover:-translate-y-0.5 mb-8"
      >
        EXPLORE FORWARD MOVES AI →
      </button>

      <div className="w-full max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm shadow-gray-100/60">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-[#9CA3AF] font-semibold mb-1">Audio Overview</div>
            <div className="text-xs text-[#6B7280] font-light">• {Math.round(duration)}s • Playback preview</div>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded-full">
            1x
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <button
            type="button"
            onClick={togglePlay}
            className="bg-[#1D4ED8] text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="flex-1">
            <input
              type="range"
              min={0}
              max={1}
              step={0.001}
              value={progress}
              onChange={handleSeek}
              className="w-full"
            />
            <div className="h-3 rounded-full bg-[#E5E7EB] overflow-hidden mt-2">
              <div
                className="h-full rounded-full bg-[#1D4ED8]"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
          <div className="text-xs text-[#6B7280] font-light w-20 text-right">
            {new Date(currentTime * 1000).toISOString().substr(14, 5)}
          </div>
        </div>
      </div>
    </div>
  )
}
