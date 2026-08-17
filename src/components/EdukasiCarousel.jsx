import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  Maximize2 
} from 'lucide-react';
import posterSampah from '../assets/poster-sampah.jpg';
import posterKesehatan from '../assets/poster-kesehatan.jpg';
import posterEcoEnzyme from '../assets/poster-ecoenzyme.png';

const posters = [
  {
    id: 1,
    title: 'Pilah dan Kurangi Sampahmu',
    desc: 'Panduan jenis sampah, langkah pemilahan, dan 5 prinsip Mottainai.',
    image: posterSampah,
  },
  {
    id: 2,
    title: 'Waspada Penyakit Akibat Lingkungan',
    desc: 'Langkah melindungi diri, proteksi kesehatan, dan 6 langkah cuci tangan.',
    image: posterKesehatan,
  },
  {
    id: 3,
    title: 'Edukasi Produk Eco Enzyme',
    desc: 'Keunggulan, manfaat pemanfaatan rumah tangga, hingga peluang ekonomi warga.',
    image: posterEcoEnzyme,
  },
];

export default function EdukasiCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const prevSlide = () => {
    setZoomScale(1);
    setCurrentIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setZoomScale(1);
    setCurrentIndex((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => {
    setZoomScale(1);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setZoomScale(1);
    document.body.style.overflow = 'unset';
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  // Keyboard shortcut: ESC to close, Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (!isOpen) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="edukasi" className="w-full py-16 bg-white border-t border-slate-100">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Pojok Edukasi Lingkungan & Eco-Enzyme
          </h2>
          <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-700">
            Panduan Praktis Pemilahan Sampah, Perlindungan Kesehatan, dan Pemanfaatan Eco-Enzyme Warga
          </p>
        </div>

        {/* Carousel Box */}
        <div className="relative bg-slate-50 rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-sm">
          
          {/* Card Poster dengan Trigger Modal Zoom */}
          <div className="flex flex-col items-center">
            <div 
              onClick={openModal}
              className="group relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-white cursor-zoom-in"
            >
              <img
                src={posters[currentIndex].image}
                alt={posters[currentIndex].title}
                className="w-full h-auto object-contain max-h-[75vh] mx-auto transition-transform duration-300 group-hover:scale-102"
              />
              
              {/* Overlay Petunjuk Klik */}
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
                <Maximize2 className="w-5 h-5" />
                <span>Klik untuk memperbesar & zoom</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {posters[currentIndex].title}
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
                {posters[currentIndex].desc}
              </p>
            </div>
          </div>

          {/* Tombol Geser Slide */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 sm:p-3 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 sm:p-3 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indikator Dot */}
          <div className="flex justify-center gap-2 mt-6">
            {posters.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setZoomScale(1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-emerald-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* 🔍 MODAL POPUP & INTERACTIVE ZOOM LIGHTBOX */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-2 sm:p-6 animate-fadeIn">
          
          {/* Toolbar Navigasi & Zoom (Atas) */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 max-w-4xl mx-auto">
            <span className="text-white text-xs sm:text-sm font-semibold bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700 backdrop-blur-xs truncate max-w-[200px] sm:max-w-md">
              {posters[currentIndex].title} ({Math.round(zoomScale * 100)}%)
            </span>

            {/* Tombol Kontrol Zoom & Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-900/80 p-1 rounded-full border border-slate-700 backdrop-blur-xs">
              <button
                type="button"
                onClick={handleZoomIn}
                title="Zoom In"
                className="text-white hover:bg-slate-800 p-2 rounded-full transition cursor-pointer"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                title="Zoom Out"
                className="text-white hover:bg-slate-800 p-2 rounded-full transition cursor-pointer"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Zoom"
                className="text-white hover:bg-slate-800 p-2 rounded-full transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="w-[1px] h-5 bg-slate-700 mx-1" />
              <button
                type="button"
                onClick={closeModal}
                title="Tutup (Esc)"
                className="text-red-400 hover:bg-red-500/20 p-2 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Tombol Geser di Dalam Modal */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide in Modal"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-slate-900/70 hover:bg-slate-900 text-white p-3 rounded-full border border-slate-700 backdrop-blur-xs transition hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide in Modal"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-slate-900/70 hover:bg-slate-900 text-white p-3 rounded-full border border-slate-700 backdrop-blur-xs transition hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Area Gambar Zoomable */}
          <div className="w-full h-full flex items-center justify-center overflow-auto p-4 pt-16">
            <img
              src={posters[currentIndex].image}
              alt={posters[currentIndex].title}
              style={{ transform: `scale(${zoomScale})` }}
              className="max-h-[85vh] w-auto object-contain transition-transform duration-200 ease-out select-none shadow-2xl rounded-lg"
            />
          </div>

        </div>
      )}
    </section>
  );
}