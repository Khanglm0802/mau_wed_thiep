import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Music } from 'lucide-react';
import { useConfig } from '../../context/ConfigContext';
import { triggerPoeticConfetti } from '../../utils/confetti';

export const FloralGateIntro: React.FC = () => {
  const { isGateOpen, openGate, config } = useConfig();
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (isDone) return null;

  const handleOpen = () => {
    setIsOpening(true);
    triggerPoeticConfetti();
    openGate();

    setTimeout(() => {
      setIsDone(true);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!isGateOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none">
          {/* Left Door Panel */}
          <motion.div
            initial={{ x: 0 }}
            animate={isOpening ? { x: '-102%' } : { x: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#FFF5F7] via-[#FFF0F4] to-[#FAF2EE] border-r-2 border-rosegold/50 shadow-[10px_0_30px_rgba(221,167,165,0.25)] flex flex-col justify-between p-4 sm:p-12 overflow-hidden"
          >
            {/* Subtle floral pattern texture */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F472B6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Top Left Vintage Corner Vignette */}
            <div className="relative z-10 w-16 h-16 sm:w-36 sm:h-36 border-t-2 border-l-2 border-rosegold/60 rounded-tl-2xl sm:rounded-tl-3xl p-2 sm:p-3">
              <span className="font-serif italic text-[10px] sm:text-xs tracking-widest text-rosegold-dark">
                POETIC NO. 01
              </span>
            </div>

            {/* Floral Arch Silhouette */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-72 h-64 sm:h-96 border-r-4 border-rosegold/30 rounded-r-full pointer-events-none opacity-40" />

            {/* Bottom Left Branch Decor */}
            <div className="relative z-10 font-script text-lg sm:text-3xl text-rosegold/70">
              Spring Blossom
            </div>
          </motion.div>

          {/* Right Door Panel */}
          <motion.div
            initial={{ x: 0 }}
            animate={isOpening ? { x: '102%' } : { x: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#FFF5F7] via-[#FFF0F4] to-[#FAF2EE] border-l-2 border-rosegold/50 shadow-[-10px_0_30px_rgba(221,167,165,0.25)] flex flex-col justify-between items-end p-4 sm:p-12 overflow-hidden"
          >
            {/* Subtle floral pattern texture */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F472B6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Top Right Vintage Corner Vignette */}
            <div className="relative z-10 w-16 h-16 sm:w-36 sm:h-36 border-t-2 border-r-2 border-rosegold/60 rounded-tr-2xl sm:rounded-tr-3xl p-2 sm:p-3 text-right">
              <span className="font-serif italic text-[10px] sm:text-xs tracking-widest text-rosegold-dark">
                ROMANCE // 2026
              </span>
            </div>

            {/* Floral Arch Silhouette */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-72 h-64 sm:h-96 border-l-4 border-rosegold/30 rounded-l-full pointer-events-none opacity-40" />

            {/* Bottom Right Branch Decor */}
            <div className="relative z-10 font-script text-lg sm:text-3xl text-rosegold/70">
              Sweet Symphony
            </div>
          </motion.div>

          {/* Central Wax Seal & Touch Trigger Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isOpening ? { scale: 1.3, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: isOpening ? 0.6 : 0.8 }}
            className="relative z-30 flex flex-col items-center justify-center text-center px-3 w-full max-w-xs sm:max-w-sm"
          >
            {/* Soft Radiant Halo */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-pink-300/30 via-rose-200/40 to-champagne-gold/30 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />

            {/* Golden Floral Medallion Card */}
            <div className="relative p-5 sm:p-9 rounded-[36px] sm:rounded-full bg-white/95 border-2 border-rosegold/80 shadow-[0_20px_60px_rgba(221,167,165,0.45)] backdrop-blur-xl flex flex-col items-center justify-center w-full">
              {/* Ring of flower decor */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rosegold-light via-pink-100 to-white border border-rosegold/50 flex items-center justify-center mb-3 sm:mb-4 shadow-inner">
                <span className="text-2xl sm:text-4xl animate-bounce">🌸</span>
              </div>

              <div className="font-serif italic text-[11px] sm:text-xs uppercase tracking-[0.2em] text-rosegold-dark mb-1">
                Kính gửi lời mời trân quý
              </div>

              <h2 className="font-script text-2xl sm:text-4xl text-poetic-text mb-1">
                {config.event.ownerName}
              </h2>

              <p className="font-serif text-[11px] sm:text-xs text-poetic-muted tracking-wider mb-5 sm:mb-6">
                Chạm để bước vào khu vườn thơ & thưởng nhạc
              </p>

              {/* Main Interactive CTA Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="group relative w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-rosegold-dark via-rosegold to-rose-400 text-white font-serif font-semibold text-xs sm:text-base tracking-wider shadow-[0_10px_25px_rgba(183,110,121,0.45)] hover:shadow-[0_15px_35px_rgba(183,110,121,0.65)] transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Soft Shimmer highlight */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer-soft pointer-events-none" />

                <Sparkles className="w-3.5 h-3.5 text-pink-100 animate-spin-slow flex-shrink-0" />
                <span className="relative z-10 whitespace-nowrap">Chạm Để Mở Cửa Không Gian</span>
                <Music className="w-3.5 h-3.5 text-pink-100 animate-pulse flex-shrink-0" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
