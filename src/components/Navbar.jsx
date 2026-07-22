import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Download, Share } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, onResetAll }) {
  const [localMenuOpen, setLocalMenuOpen] = useState(false);
  const menuState = isMenuOpen !== undefined ? isMenuOpen : localMenuOpen;
  const toggleMenu = setIsMenuOpen || setLocalMenuOpen;

  const [activeMenu, setActiveMenu] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // ⚡ State PWA & Perangkat iOS
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(true); // Default true agar tombol selalu muncul
  const [isIOS, setIsIOS] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  // State pergerakan garis indikator
  const [indicatorState, setIndicatorState] = useState({ x: 0, width: 0, opacity: 0 });
  
  const navContainerRef = useRef(null);
  const itemRefs = useRef({});

  const menuItems = [
    { name: 'Beranda', id: '#hero' },
    { name: 'Panduan', id: '#cara-pembuatan' },
    { name: 'Kalkulator', id: '#kalkulator' },
    { name: 'Jadwal', id: '#perencana' },
    { name: 'Pengurus', id: '#struktur' },
  ];

  // 💡 Handler PWA & Pendeteksi iOS
  useEffect(() => {
    // 1. Deteksi iPhone / iPad
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 2. Cek apakah aplikasi sudah terinstall (mode standalone)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isStandalone) {
      setIsInstallable(false);
    }

    // 3. Listener PWA untuk Android/Chrome
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // 💡 Trigger Install Prompt
  const handleInstallClick = async () => {
    if (isIOS) {
      // Tampilkan petunjuk khusus pengguna iPhone
      setShowIosModal(true);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback jika dibuka di browser biasa yang tidak memicu prompt
      alert("Untuk menginstall aplikasi, buka menu opsi pada browser kamu lalu pilih 'Tambah ke Layar Utama' / 'Add to Home Screen'.");
    }
  };

  // 💡 Kalkulasi posisi & lebar garis
  const updateIndicator = useCallback((activeId) => {
    const activeElement = itemRefs.current[activeId];
    const containerElement = navContainerRef.current;

    if (activeElement && containerElement) {
      const activeRect = activeElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();

      setIndicatorState({
        x: activeRect.left - containerRect.left,
        width: activeRect.width,
        opacity: 1,
      });
    }
  }, []);

  useEffect(() => {
    updateIndicator(activeMenu);
  }, [activeMenu, updateIndicator]);

  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator(activeMenu);
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [activeMenu, updateIndicator]);

  // 💡 Handler Smooth Scroll
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveMenu(targetId);
    toggleMenu(false);

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 💡 Handler Logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setActiveMenu('#hero');

    if (onResetAll) {
      onResetAll();
    }

    toggleMenu(false);
  };

  // 💡 Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 160;

      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(menuItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveMenu(menuItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 ${
      isScrolled ? 'shadow-sm py-1.5 bg-white/95' : 'py-2.5'
    }`}>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Brand */}
          <a 
            href="#hero" 
            onClick={handleLogoClick}
            className="flex items-center gap-3.5 group cursor-pointer select-none focus:outline-none"
            title="EcoEnzyme - Beranda"
          >
            <div className="w-10 h-10 shadow-sm rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="bgGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#0D9488" />
                  </linearGradient>
                  <linearGradient id="accentGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>

                <rect width="512" height="512" rx="128" fill="url(#bgGradNav)"/>
                <path 
                  d="M256 100C256 100 150 240 150 330C150 388.54 197.46 436 256 436C314.54 436 362 388.54 362 330C362 240 256 100 256 100Z" 
                  fill="white" 
                  fillOpacity="0.12" 
                  stroke="white" 
                  strokeWidth="20" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M215 260C195 260 180 278 180 300C180 335 210 365 230 365C240 365 244 360 256 360C268 360 272 365 282 365C302 365 332 335 332 300C332 278 317 260 297 260C282 260 270 270 256 270C242 270 230 260 215 260Z" 
                  fill="white"
                />
                <path 
                  d="M256 260C256 225 285 195 320 185C320 220 291 250 256 260Z" 
                  fill="url(#accentGradNav)"
                />
              </svg>
            </div>

            <div className="flex items-center">
              <span className="font-serif text-xl font-bold tracking-tight text-emerald-800 group-hover:text-emerald-600 transition-colors">
                EcoEnzyme
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation & Install Button */}
          <div className="hidden md:flex items-center gap-6">
            <div 
              ref={navContainerRef} 
              className="flex space-x-6 lg:space-x-8 items-center relative py-2"
            >
              {menuItems.map((item) => (
                <a 
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  href={item.id} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`font-semibold text-sm transition-colors duration-200 pb-1 cursor-pointer whitespace-nowrap select-none ${
                    activeMenu === item.id 
                      ? 'text-emerald-600 font-bold' 
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <span 
                className="absolute bottom-0 h-[2.5px] bg-emerald-500 rounded-full pointer-events-none"
                style={{
                  width: `${indicatorState.width}px`,
                  transform: `translateX(${indicatorState.x}px)`,
                  opacity: indicatorState.opacity,
                  transition: 'transform 350ms cubic-bezier(0.4, 0, 0.2, 1), width 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease',
                  willChange: 'transform, width',
                }}
              />
            </div>

            {/* Tombol Install App Desktop */}
            {isInstallable && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Install Aplikasi</span>
              </button>
            )}
          </div>

          {/* Mobile Burger Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button"
              onClick={() => toggleMenu(!menuState)} 
              className="text-slate-600 hover:text-emerald-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {menuState ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuState && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 sm:px-8 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {menuItems.map((item) => (
            <a 
              key={item.id}
              href={item.id} 
              onClick={(e) => handleNavClick(e, item.id)}
              className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all select-none ${
                activeMenu === item.id
                  ? 'bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-500'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
              }`}
            >
              {item.name}
            </a>
          ))}

          {isInstallable && (
            <button
              onClick={() => {
                handleInstallClick();
                toggleMenu(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
            >
              <Download className="w-5 h-5" />
              <span>Install Aplikasi EcoZyme</span>
            </button>
          )}
        </div>
      )}

      {/* 📱 Pop-up Modal Petunjuk Khusus Pengguna iPhone / iPad */}
      {showIosModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl relative border border-slate-100">
            <button
              type="button"
              onClick={() => setShowIosModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Share className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Install di iPhone / iPad</h3>
              <p className="text-xs text-slate-500 mt-1">
                Ikuti 3 langkah mudah ini untuk memasang aplikasi di layar utama iPhone kamu:
              </p>
            </div>

            <ol className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              <li className="flex items-start gap-2.5">
                <span className="font-bold bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span>Pastikan kamu membuka website ini di browser <strong>Safari</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span>Tekan ikon tombol <strong>Bagikan (Share)</strong> <Share className="w-3.5 h-3.5 inline text-blue-500" /> di menu bagian bawah Safari.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span>Gulir ke bawah lalu pilih opsi <strong>"Tambahkan ke Layar Utama"</strong> (Add to Home Screen).</span>
              </li>
            </ol>

            <button
              type="button"
              onClick={() => setShowIosModal(false)}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}