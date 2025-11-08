'use client';

import { useState, useEffect } from 'react';
import { Trophy, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      {/* Background image (visible) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-1000 w-full">

          {/* Title */}
          <div className="space-y-3 px-3 sm:px-6">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white tracking-wider uppercase drop-shadow-lg">
              Ranjeet Singh
              <span className="block text-base sm:text-sm font-medium text-slate-300 mt-2 normal-case">Best Cricket Expert — Tips, Calls & Live Analysis</span>
            </h1>

            {/* Countdown (below name) */}
            <div className="text-5xl sm:text-6xl md:text-7xl font-black text-yellow-400 leading-none animate-in zoom-in duration-700 delay-300 mt-3">
              <span aria-live="polite">{countdown}</span>
            </div>
          </div>

          {/* Stats: responsive grid */}
          <div className="animate-in slide-in-from-bottom duration-700 delay-500 px-3 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base bg-white/3 rounded-lg py-3 px-4">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">70/86 MATCH PASSED RECORD</span>
                <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              </div>

              <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base bg-white/3 rounded-lg py-3 px-4">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Oldest CRICKET Tipper Since 2011</span>
                <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              </div>

              <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base bg-white/3 rounded-lg py-3 px-4">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">44/42 BBL MATCHES PASSED RECORD</span>
                <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Telegram Button */}
          <div className="pt-6 space-y-3 animate-in slide-in-from-bottom duration-700 delay-700 px-3 sm:px-6">
            <a
              href="https://t.me/+2CJAM_jm6C9jOTg1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto block"
            >
              <Button
                size="lg"
                className="w-full sm:inline-flex justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-[0_6px_30px_rgba(255,215,0,0.25)] transform transition-all hover:scale-105 uppercase tracking-wide"
              >
                <span>Subscribe — Join Telegram</span>
                <Send className="ml-3 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </a>

            <div className="text-white text-sm sm:text-base font-medium">
              FREE JOINING ENDS IN{' '}
              <span className="text-yellow-400 font-extrabold text-lg sm:text-xl ml-1">
                {countdown}s
              </span>
            </div>
          </div>

          {/* Bottom text */}
          <div className="pt-4 animate-in slide-in-from-bottom duration-700 delay-1000 px-3 sm:px-6">
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow-md">
              99% Right Accuracy ke sath best result
            </p>
          </div>
        </div>
      </div>

      {/* Floating Telegram badge - hidden on very small screens */}
      <a
        href="https://t.me/+2CJAM_jm6C9jOTg1"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 z-20"
        aria-label="Open Telegram channel"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-xl flex items-center justify-center ring-2 ring-white/20 hover:scale-105 transform transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" className="w-7 h-7">
            <path d="M22 2L11 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
}
