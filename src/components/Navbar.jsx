import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, onResetAll }) {
  const [localMenuOpen, setLocalMenuOpen] = useState(false);
  const menuState = isMenuOpen !== undefined ? isMenuOpen : localMenuOpen;
  const toggleMenu = setIsMenuOpen || setLocalMenuOpen;

  const [activeMenu, setActiveMenu] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // State transformasi GPU-accelerated untuk pergerakan garis yang sangat rapi
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

  // 💡 Kalkulasi posisi & lebar garis secara presisi
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

  // Update indikator saat menu aktif berubah
  useEffect(() => {
    updateIndicator(activeMenu);
  }, [activeMenu, updateIndicator]);

  // Observer responsif saat ukuran layar atau elemen berubah
  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator(activeMenu);
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [activeMenu, updateIndicator]);

  // 💡 Handler Smooth Scroll untuk tombol navigasi
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

  // 💡 Handler Logo (Scroll mulus ke paling atas)
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

  // 💡 Scrollspy presisi tanpa jitter
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
      isScrolled ? 'shadow-md py-1 bg-white/95' : 'py-2'
    }`}>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Brand */}
          <a 
            href="#hero" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group cursor-pointer select-none"
            title="Kembali ke Beranda"
          >
            <div className="bg-emerald-500 p-2 rounded-xl shadow-md shadow-emerald-200 group-hover:bg-emerald-600 transition-colors">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-emerald-900 tracking-tight">
              Eco<span className="text-emerald-500">Zyme</span>.id
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div 
            ref={navContainerRef} 
            className="hidden md:flex space-x-6 lg:space-x-8 items-center relative py-2"
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

            {/* Garis Indikator Sliding Berkecepatan Tinggi & Mulus */}
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
        <div className="md:hidden bg-white border-t border-slate-100 px-4 sm:px-8 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
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
        </div>
      )}
    </nav>
  );
}