import React, { useState } from 'react';
import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { faqs } from '../data/ecoData';

export default function Troubleshooting({ activeFaq, toggleFaq }) {
  // State lokal fallback jika prop tidak dilewatkan dari App.jsx
  const [localFaq, setLocalFaq] = useState(null);

  const currentActiveFaq = activeFaq !== undefined ? activeFaq : localFaq;
  const handleToggle = (idx) => {
    if (toggleFaq) {
      toggleFaq(idx);
    } else {
      setLocalFaq(localFaq === idx ? null : idx);
    }
  };

  return (
    <section id="troubleshooting" className="w-full py-16 md:py-20 bg-white border-t border-b border-slate-100">
      {/* Mengubah max-w-7xl mx-auto menjadi w-full px-4 sm:px-8 md:px-12 lg:px-16 */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Klinik Pertanyaan
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Panduan Solusi Masalah</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Menghadapi kendala saat fermentasi? Cek panduan penanganan masalah darurat di bawah ini.
          </p>
        </div>

        {/* FAQ List Accordion */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {faqs && faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center px-5 py-4 bg-slate-50/70 hover:bg-slate-100/80 text-left gap-3 transition-colors cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base text-slate-800 flex items-center gap-2.5">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 
                  {faq.question}
                </span>
                {currentActiveFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {currentActiveFaq === idx && (
                <div className="px-5 py-4 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed text-justify animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}