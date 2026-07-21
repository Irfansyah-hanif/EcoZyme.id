import React from 'react';
import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { faqs } from '../data/ecoData';

export default function Troubleshooting({ activeFaq, toggleFaq }) {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Klinik Pertanyaan</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Panduan Solusi Masalah</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Menghadapi kendala saat fermentasi? Cek panduan penanganan masalah darurat di bawah ini.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center px-5 py-4 bg-slate-50/50 hover:bg-slate-50 text-left gap-3"
              >
                <span className="font-bold text-sm sm:text-base text-slate-800 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> {faq.question}
                </span>
                {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
              </button>
              {activeFaq === idx && (
                <div className="px-5 py-4 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
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