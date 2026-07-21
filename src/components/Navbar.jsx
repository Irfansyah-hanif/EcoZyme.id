import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  // State untuk melacak menu mana yang sedang aktif
  const [activeMenu, setActiveMenu] = useState('#beranda');

  // MODIFIKASI: Urutan array disesuaikan persis dengan posisi section dari atas ke bawah di App.jsx
  const menuItems = [
    { name: 'Beranda', id: '#beranda' },
    { name: 'Kalkulator', id: '#kalkulator' },
    { name: 'Jadwal', id: '#perencana' },
    { name: 'Panduan', id: '#cara-pembuatan' }, // Sekarang Panduan naik ke urutan 4
    { name: 'Hasil', id: '#pemanfaatan-hasil' }, // Hasil bergeser ke urutan 5 setelah Timeline/Panduan
    { name: 'Pengurus', id: '#struktur' },
  ];

  // Efek samping untuk mendeteksi posisi scroll layar secara otomatis (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.querySelector(item.id));
      const scrollPosition = window.scrollY + 100; // Sedikit dinaikkan ke 100 agar trigger perpindahan garis lebih pas

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveMenu(menuItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-xl shadow-md shadow-emerald-200">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-emerald-900 tracking-tight">
              Eco<span className="text-emerald-500">Zyme</span>.id
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={item.id} 
                onClick={() => setActiveMenu(item.id)}
                className={`font-semibold text-sm transition-all pb-1 border-b-2 cursor-pointer ${
                  activeMenu === item.id 
                    ? 'border-emerald-500 text-emerald-600 font-bold' 
                    : 'border-transparent text-slate-600 hover:text-emerald-600 hover:border-emerald-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Burger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-600 hover:text-emerald-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
          {menuItems.map((item) => (
            <a 
              key={item.id}
              href={item.id} 
              onClick={() => {
                setActiveMenu(item.id);
                setIsMenuOpen(false);
              }} 
              className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
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