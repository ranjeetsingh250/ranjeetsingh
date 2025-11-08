'use client';

import { useState, useEffect } from 'react';
import { Trophy, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
              Ranjeet Singh
            </h1>
            <div className="text-8xl md:text-9xl font-black text-yellow-400 leading-none animate-in zoom-in duration-700 delay-300">
              30
            </div>
          </div>

          <div className="space-y-4 animate-in slide-in-from-bottom duration-700 delay-500">
            <div className="flex items-center justify-center gap-3 text-white text-lg md:text-xl">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="font-semibold">70/86 MATCH PASSED RECORD</span>
              <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            </div>

            <div className="flex items-center justify-center gap-3 text-white text-lg md:text-xl">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="font-semibold">Oldest CRICKET Tipper Since 2011</span>
              <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            </div>

            <div className="flex items-center justify-center gap-3 text-white text-lg md:text-xl">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="font-semibold">44/42 BBL MATCHES PASSED RECORD</span>
              <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            </div>
          </div>

          <div className="pt-8 space-y-4 animate-in slide-in-from-bottom duration-700 delay-700">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl md:text-2xl px-12 py-8 rounded-lg shadow-2xl transform transition-all hover:scale-105 uppercase tracking-wide"
            >
              <span>SUBSCRIBE RANJEET SINGH TELEGRAM</span>
              <Send className="ml-3 w-6 h-6" />
            </Button>

            <div className="text-white text-base md:text-lg">
              FREE JOINING ENDS IN...
              <span className="text-yellow-400 font-bold text-2xl md:text-3xl ml-2">{countdown}</span>
            </div>
          </div>

          <div className="pt-6 animate-in slide-in-from-bottom duration-700 delay-1000">
            <p className="text-white text-2xl md:text-3xl font-bold">
              99% Right Accuracy ke sath best result
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
}
