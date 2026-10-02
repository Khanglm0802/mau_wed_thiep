import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useConfig } from '../../context/ConfigContext';

export const LightboxModal: React.FC = () => {
  const { lightboxState, closeLightbox, openLightbox, config } = useConfig();
  const { galleryPhotos } = config.images;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState.isOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        const next = (lightboxState.activeIndex + 1) % galleryPhotos.length;
        openLightbox(next);
      } else if (e.key === 'ArrowLeft') {
        const prev =
          (lightboxState.activeIndex - 1 + galleryPhotos.length) %
          galleryPhotos.length;
        openLightbox(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, galleryPhotos.length, closeLightbox, openLightbox]);

  if (!lightboxState.isOpen) return null;

  const currentPhoto = galleryPhotos[lightboxState.activeIndex];
  if (!currentPhoto) return null;

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    openLightbox((lightboxState.activeIndex + 1) % galleryPhotos.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    openLightbox(
      (lightboxState.activeIndex - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeLightbox}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-4 select-none"
      >
        {/* Close Button with Safe Area */}
        <button
          onClick={closeLightbox}
          style={{
            top: 'max(1rem, env(safe-area-inset-top))',
            right: 'max(1rem, env(safe-area-inset-right))',
          }}
          className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/30 text-white hover:bg-rose-500 hover:border-rose-400 flex items-center justify-center transition-all z-20 shadow-lg cursor-pointer active:scale-95"
          aria-label="Đóng"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Ảnh trước"
          className="absolute left-2 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/30 text-white hover:bg-rose-400 hover:text-white flex items-center justify-center transition-all z-20 shadow-lg cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Ảnh kế tiếp"
          className="absolute right-2 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/30 text-white hover:bg-rose-400 hover:text-white flex items-center justify-center transition-all z-20 shadow-lg cursor-pointer active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Main Image Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-4xl max-h-[88dvh] flex flex-col items-center justify-center px-4"
        >
          <motion.div
            key={lightboxState.activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-white p-1.5 sm:p-2"
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption}
              className="max-w-full max-h-[64vh] sm:max-h-[74vh] object-contain rounded-xl sm:rounded-2xl"
            />
          </motion.div>

          {/* Caption & Counter */}
          <div className="mt-3 sm:mt-4 text-center max-w-lg px-2">
            <div className="font-serif italic text-[11px] sm:text-xs text-rose-300 mb-1">
              KHOẢNH KHẮC // [ 0{lightboxState.activeIndex + 1} / 0{galleryPhotos.length} ] • Vuốt ngang để chuyển
            </div>
            <p className="font-serif text-xs sm:text-base text-rose-100 line-clamp-2">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
