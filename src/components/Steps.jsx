import React from 'react';
import { ListTodo, Sparkles } from 'lucide-react';
import { stepsData } from '../data/ecoData';

export default function Steps({ activeStep, setActiveStep }) {
  return (
    <section id="cara-pembuatan" className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Langkah Praktis</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Panduan Langkah Pembuatan</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Ikuti 6 langkah standar di bawah ini. Klik setiap langkah untuk menampilkan <strong>Tips Rahasia Anti-Gagal</strong>.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-2.5">
            {stepsData.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeStep === index
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl translate-x-1'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <div className={`w-9 h-9 sm:w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 ${
                  activeStep === index ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-xs sm:text-sm md:text-base leading-tight">
                    {step.title}
                  </p>
                </div>
                <div className={`w-7 h-7 sm:w-8 h-8 rounded-full flex items-center justify-center transition-transform ${activeStep === index ? 'bg-white/10 text-white' : 'text-emerald-600'}`}>
                  <step.icon className="w-4 h-4 sm:w-5 h-5" />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm min-h-[340px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Langkah {activeStep + 1} dari 6
                </span>
                <div className="h-1 bg-slate-200 flex-grow rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-500" 
                    style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <ListTodo className="w-5 h-5 sm:w-6 h-6 text-emerald-600" />
                {stepsData[activeStep].title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {stepsData[activeStep].desc}
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-1.5 sm:p-2 rounded-xl text-amber-700 flex-shrink-0"><Sparkles className="w-4 h-4 sm:w-5 h-5" /></div>
                <div>
                  <h4 className="font-extrabold text-amber-900 text-xs sm:text-sm uppercase tracking-wider mb-1">Tips Pro Anti-Gagal:</h4>
                  <p className="text-amber-950 text-xs sm:text-sm font-medium leading-relaxed">{stepsData[activeStep].proTip}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}