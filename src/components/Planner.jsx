import React, { useState } from 'react';
import { Calendar, CalendarClock, Bell, CalendarPlus } from 'lucide-react';

export default function Planner({ startDate, setStartDate }) {
  // Tanggal default hari ini (Format YYYY-MM-DD) jika prop tidak di-pass
  const today = new Date().toISOString().split('T')[0];
  const [localDate, setLocalDate] = useState(today);
  const [notifSent, setNotifSent] = useState(false);

  const currentDate = startDate || localDate;
  const updateDate = setStartDate || setLocalDate;

  const getFutureDateObj = (baseDate, daysToAdd) => {
    if (!baseDate) return null;
    const date = new Date(baseDate);
    if (isNaN(date.getTime())) return null;
    date.setDate(date.getDate() + daysToAdd);
    return date;
  };

  const getFutureDate = (baseDate, daysToAdd) => {
    const date = getFutureDateObj(baseDate, daysToAdd);
    if (!date) return '-';
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // 🔔 Handler Notifikasi Browser
  const handleEnableNotification = async () => {
    if (!('Notification' in window)) {
      alert('Browser Anda belum mendukung fitur Notifikasi Web.');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const harvestDateStr = getFutureDate(currentDate, 90);
      new Notification('EcoEnzyme - Pengingat Dijadwalkan! 🌱', {
        body: `Jangan lupa buang gas rutin selama 30 hari pertama. Jadwal Panen Raya Anda: ${harvestDateStr}.`,
        icon: '/pwa-192x192.png',
      });
      setNotifSent(true);
    } else {
      alert('Izin notifikasi ditolak oleh pengguna.');
    }
  };

  // 📅 Generator Link Google Calendar
  const createGoogleCalendarLink = (titleText, detailText, daysFromStart) => {
    const targetDate = getFutureDateObj(currentDate, daysFromStart);
    if (!targetDate) return '#';

    const title = encodeURIComponent(titleText);
    const details = encodeURIComponent(detailText);

    // Format ISO YYYYMMDDTHHMMSSZ
    const formattedDate = targetDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${formattedDate}/${formattedDate}`;
  };

  return (
    <section id="perencana" className="w-full py-16 md:py-20 bg-white">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Asisten Digital
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Rencana & Jadwal Pembuatan</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Tentukan tanggal di bawah ini, dan sistem akan menghitung jadwal penting proses fermentasi Anda hingga waktu panen.
          </p>
        </div>

        {/* Card Main Box */}
        <div className="w-full max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Calendar className="w-10 h-10 text-emerald-600 hidden sm:block flex-shrink-0" />
              <div>
                <label htmlFor="tanggal-mulai" className="block text-sm font-bold text-slate-500 uppercase tracking-wide">
                  Tanggal Mulai Pembuatan
                </label>
                <span className="text-xs text-slate-400">Pilih tanggal untuk memperbarui agenda di bawah</span>
              </div>
            </div>
            <input
              id="tanggal-mulai"
              type="date"
              value={currentDate}
              onChange={(e) => {
                updateDate(e.target.value);
                setNotifSent(false);
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none font-bold text-slate-700 shadow-sm bg-white cursor-pointer"
            />
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-emerald-600" /> Agenda Kegiatan Fermentasi Anda:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    Mulai & Buang Gas
                  </span>
                  <p className="font-extrabold text-slate-800 text-base sm:text-lg">
                    {getFutureDate(currentDate, 0)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Mulai proses fermentasi. Wajib buang gas harian selama 30 hari pertama.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Masuk Fase Tenang
                  </span>
                  <p className="font-extrabold text-slate-800 text-base sm:text-lg">
                    {getFutureDate(currentDate, 30)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Batas akhir buang gas harian. Gas mulai tenang, cukup diamati berkala.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    PANEN RAYA 🎉
                  </span>
                  <p className="font-extrabold text-emerald-800 text-lg sm:text-xl">
                    {getFutureDate(currentDate, 90)}
                  </p>
                  <p className="text-xs text-emerald-600 mt-2 font-medium leading-relaxed">
                    90 hari selesai! Eco-enzyme matang sempurna dan siap dipanen.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel Aksi Notifikasi */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleEnableNotification}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 rounded-xl shadow-xs transition-all cursor-pointer ${
                  notifSent
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>{notifSent ? 'Pengingat Browser Dibuat ✓' : 'Aktifkan Notifikasi Browser'}</span>
              </button>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                <a
                  href={createGoogleCalendarLink(
                    '💨 Buang Gas EcoEnzyme (Bulan Pertama)',
                    'Pengingat harian rutin untuk membuka dan menutup wadah EcoEnzyme sebentar guna membuang gas fermentasi.',
                    0
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold px-3 py-3 rounded-xl transition-all"
                >
                  <CalendarPlus className="w-4 h-4 text-amber-600" />
                  <span>+ Kalender (Buang Gas)</span>
                </a>

                <a
                  href={createGoogleCalendarLink(
                    '🌾 Panen Raya EcoEnzyme!',
                    'Selamat! Waktunya memanen cairan EcoEnzyme Anda yang telah difermentasi sempurna selama 90 hari.',
                    90
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold px-3 py-3 rounded-xl transition-all"
                >
                  <CalendarPlus className="w-4 h-4 text-emerald-600" />
                  <span>+ Kalender (Panen)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}