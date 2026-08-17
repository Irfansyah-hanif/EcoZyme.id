import React from 'react';
import { History, Award, UserCheck, MapPin, Sparkles } from 'lucide-react';

export default function Sejarah() {
  return (
    <section id="sejarah" className="w-full py-12 md:py-16 bg-white">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full bg-gradient-to-br from-emerald-50/70 to-teal-50/40 rounded-3xl p-6 sm:p-10 md:p-14 border border-emerald-100/80 shadow-md relative overflow-hidden">
          
          {/* Watermark Icon */}
          <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
            <History className="w-64 h-64 text-emerald-900" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
            
            {/* Sisi Kiri: Profil Singkat & Tokoh */}
            <div className="w-full md:w-1/3 flex-shrink-0 text-center space-y-4">
              <div className="bg-white w-28 h-28 sm:w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-100">
                <Award className="w-14 h-14 sm:w-16 h-16 text-emerald-600" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-emerald-900 leading-tight">
                  Jejak Pelopor<br />
                  <span className="text-emerald-600">Blondo Celong</span>
                </h3>
                <p className="text-emerald-700/80 font-bold mt-1 text-sm sm:text-base">
                  Kutowinangun Kidul, Salatiga
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-emerald-100 text-left space-y-3 shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block">Ibu Angela Widyawati</span>
                    Tokoh Pelopor & Penggerak Warga (2020)
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block">Ecoenzyme Nusantara & Forsepsi</span>
                    Wadah Komunitas & Kolaborasi Kota Salatiga
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sisi Kanan: Uraian Sejarah Lengkap */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Sejarah Penerapan Eco Enzyme di Kelurahan Kutowinangun Kidul
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
                <p>
                  <strong>Eco Enzyme</strong> merupakan hasil fermentasi limbah organik berupa kulit buah dan sayuran yang dicampur dengan gula merah atau molase serta air. Produk ini dikenal memiliki berbagai manfaat, seperti mengurangi limbah organik rumah tangga, memperbaiki kualitas lingkungan, serta menjadi alternatif ramah lingkungan dalam kehidupan sehari-hari. Gerakan Eco Enzyme mulai berkembang di berbagai daerah di Indonesia sejak tahun 2020 melalui kegiatan sosialisasi yang dilakukan oleh para relawan dan komunitas lingkungan.
                </p>

                <p>
                  Di Kota Salatiga, penerapan Eco Enzyme mulai dikenal pada tahun 2020 melalui berbagai kegiatan edukasi dan pelatihan yang melibatkan komunitas peduli lingkungan. Gerakan tersebut kemudian berkembang hingga terbentuknya <strong>Ecoenzyme Nusantara</strong>, sebuah organisasi nirlaba yang secara resmi berdiri pada tahun 2021 sebagai wadah bagi para relawan Eco Enzyme di Indonesia. Organisasi ini memiliki <em>basecamp</em> yang tersebar di berbagai wilayah Kota Salatiga dan berperan aktif dalam mengembangkan gerakan pengelolaan sampah organik berbasis masyarakat.
                </p>

                <p>
                  Di Kelurahan Kutowinangun Kidul, sejarah penerapan Eco Enzyme dimulai pada tahun 2020. Salah satu tokoh yang memiliki peran penting dalam memperkenalkan sekaligus mengembangkan gerakan ini adalah <strong>Ibu Angela Widyawati</strong>. Melalui kegiatan sosialisasi, pendampingan, dan pemberdayaan masyarakat, beliau mendorong warga untuk mulai memilah sampah organik rumah tangga dan mengolahnya menjadi Eco Enzyme. Peran Ibu Angela Widyawati menjadi penting karena mampu membangun kesadaran masyarakat bahwa limbah organik tidak hanya menjadi sampah, tetapi dapat diolah menjadi produk yang bermanfaat bagi lingkungan.
                </p>

                <p>
                  Wilayah <strong>Blondo Celong</strong> kemudian menjadi pelopor penerapan Eco Enzyme di Kelurahan Kutowinangun Kidul. Berawal dari kelompok masyarakat yang mengikuti pelatihan dan praktik pembuatan Eco Enzyme, gerakan tersebut berkembang menjadi kegiatan rutin yang melibatkan berbagai kalangan, mulai dari ibu rumah tangga, pemuda, hingga komunitas peduli lingkungan. Masyarakat tidak hanya memproduksi Eco Enzyme untuk kebutuhan rumah tangga, tetapi juga menggunakannya dalam berbagai aksi pelestarian lingkungan.
                </p>

                <p>
                  Sebagai bagian dari gerakan tersebut, Ecoenzyme Nusantara menyelenggarakan berbagai kegiatan, seperti panen hasil fermentasi, penyemprotan Eco Enzyme pada area yang membutuhkan penanganan lingkungan, penuangan Eco Enzyme ke aliran sungai sebagai bentuk kepedulian terhadap ekosistem perairan, serta edukasi kepada masyarakat mengenai pentingnya pengelolaan sampah organik. Dalam pelaksanaannya, Ecoenzyme Nusantara juga menjalin kerja sama dengan <strong>Forsepsi</strong>, yaitu forum yang menghimpun berbagai organisasi peduli lingkungan di Kota Salatiga sehingga kegiatan pelestarian lingkungan dapat dilakukan secara kolaboratif.
                </p>

                {/* Highlight Callout TPA Ngronggo */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm my-5 text-left">
                  <div className="flex items-center gap-2 mb-1.5 text-emerald-800 font-bold text-sm sm:text-base">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    Aksi Peduli Lingkungan di TPA Ngronggo (Mronggo) Salatiga
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Salah satu kegiatan yang menjadi perhatian masyarakat adalah penyemprotan Eco Enzyme di TPA Ngronggo (Mronggo) Salatiga. Kegiatan ini dilakukan sebagai upaya membantu mengurangi bau tidak sedap, mendukung pengelolaan sampah, serta meningkatkan kesadaran masyarakat terhadap pentingnya menjaga kualitas lingkungan. Aksi tersebut juga menjadi simbol kerja sama antara komunitas, pemerintah, dan masyarakat dalam mengatasi persoalan sampah secara berkelanjutan.
                  </p>
                </div>

                <p>
                  Dari sudut pandang sejarah lokal, perkembangan Eco Enzyme di Kelurahan Kutowinangun Kidul menunjukkan adanya perubahan budaya masyarakat dalam mengelola sampah. Kehadiran tokoh penggerak seperti Ibu Angela Widyawati, dukungan Ecoenzyme Nusantara, serta partisipasi aktif masyarakat Blondo Celong menjadi faktor utama yang mendorong keberhasilan gerakan ini. Sejak dimulai pada tahun 2020, penerapan Eco Enzyme tidak hanya memberikan manfaat bagi lingkungan, tetapi juga membentuk budaya gotong royong, kepedulian sosial, dan kesadaran ekologis yang terus berkembang di tengah masyarakat.
                </p>

                <p className="font-semibold text-emerald-950 bg-emerald-100/50 p-4 rounded-xl border border-emerald-200">
                  Dengan demikian, sejarah penerapan Eco Enzyme di Kelurahan Kutowinangun Kidul merupakan bagian dari sejarah gerakan lingkungan berbasis masyarakat di Kota Salatiga. Gerakan yang dipelopori sejak tahun 2020 oleh Ibu Angela Widyawati bersama masyarakat setempat menjadi contoh nyata bagaimana inovasi sederhana dalam pengelolaan sampah organik mampu menciptakan perubahan sosial dan lingkungan yang berkelanjutan.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}