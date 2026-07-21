import React, { useState, useEffect } from 'react';
import { 
  Leaf, Droplets, FlaskConical, Info, CalendarClock, AlertTriangle, 
  CheckCircle2, Sprout, ArrowRight, Users, FileText, Wallet, Wrench, 
  Recycle, History, Award, Calendar, ChevronDown, ChevronUp, 
  HelpCircle, Menu, X, ListTodo, Sparkles, Shield, Lightbulb, Plus, Minus
} from 'lucide-react';

// ==========================================
// DATA UTAMA PLATFORM (STANDAR RESEP & FAQ)
// ==========================================
const stepsData = [
  {
    title: "Persiapan Wadah & Bahan",
    icon: Wrench,
    desc: "Siapkan wadah plastik bermulut lebar yang bersih dari sisa sabun, air sumur/air matang dingin, gula merah tebu/molase, dan pilahan sampah organik dapur yang masih segar.",
    proTip: "Gunakan wadah plastik fleksibel. Hindari wadah kaca atau logam karena logam mudah berkarat dan kaca berisiko pecah akibat tingginya tekanan gas saat fermentasi."
  },
  {
    title: "Pemotongan Sampah Organik",
    icon: Leaf,
    desc: "Potong-potong sisa sayuran mentah segar dan kulit buah pilihan menjadi ukuran lebih kecil (sekitar 2 hingga 3 sentimeter).",
    proTip: "Semakin kecil potongan, semakin luas area sentuh mikroba. Ini membuat proses ekstraksi enzim berjalan jauh lebih cepat dan merata."
  },
  {
    title: "Pelarutan Gula dalam Air",
    icon: Droplets,
    desc: "Masukkan air bersih ke dalam wadah plastik sesuai dengan takaran kalkulator, lalu tuangkan gula merah atau molase. Aduk secara merata hingga larut sepenuhnya.",
    proTip: "Jika menggunakan air PDAM langsung, endapkan terlebih dahulu selama 24 jam dalam wadah terbuka agar kandungan kaporitnya menguap sepenuhnya."
  },
  {
    title: "Memasukkan Sampah Organik",
    icon: FlaskConical,
    desc: "Masukkan seluruh potongan sampah organik yang sudah ditakar ke dalam larutan air gula. Aduk perlahan agar semua bagian basah terendam larutan.",
    proTip: "Pastikan menyisakan ruang kosong minimal 40% dari tinggi wadah. Ruang udara ini sangat krusial sebagai tempat sirkulasi akumulasi gas karbon dioksida."
  },
  {
    title: "Penutupan Wadah Rapat",
    icon: CheckCircle2,
    desc: "Tutup wadah dengan sangat rapat hingga kedap udara menggunakan penutup aslinya. Pastikan tidak ada celah udara luar yang masuk.",
    proTip: "Bila tutup terasa longgar, lapisi bibir wadah plastik dengan lembaran plastik bersih terlebih dahulu, kemudian ikat kuat dengan karet sebelum ditutup rapat."
  },
  {
    title: "Pelabelan & Penyimpanan",
    icon: CalendarClock,
    desc: "Tuliskan tanggal pembuatan, masa wajib buang gas (30 hari pertama), dan tanggal perkiraan panen (90 hari) pada kertas label lalu tempelkan pada wadah.",
    proTip: "Simpan wadah di sudut rumah yang teduh, sejuk, berventilasi baik, terhindar dari panas matahari langsung, serta jauh dari tumpukan sampah basah maupun saluran got."
  }
];

const faqs = [
  {
    question: "Bagaimana jika cairan Eco-Enzyme berbau got atau busuk?",
    answer: "Jangan dibuang! Bau busuk menandakan kegagalan fermentasi akibat kontaminasi bakteri jahat. Solusinya: Tambahkan gula/molase dengan takaran yang sama seperti resep awal, lalu tutup rapat wadah kembali. Fermentasi akan mengulang prosesnya dan bakteri baik akan mendominasi kembali dalam 30 hari."
  },
  {
    question: "Apakah aman jika muncul banyak ulat di dalam wadah?",
    answer: "Aman dan wajar terjadi jika wadah kurang rapat sehingga lalat sempat bertelur. Solusinya: Jemur wadah tertutup di bawah sinar matahari pagi selama 30 menit selama beberapa hari berturut-turut sampai ulat mati dan hancur terfermentasi menjadi asam amino berharga."
  },
  {
    question: "Bagaimana cara membedakan jamur baik dan jamur jahat?",
    answer: "Jamur baik berwarna putih bersih, tipis seperti selaput (sering disebut Mamma Enzyme). Biarkan saja karena ini tanda sukses. Jamur jahat berwarna hitam, hijau pekat, atau abu-abu berbulu tebal. Jika ini muncul disertai bau busuk, segera lakukan penyelamatan dengan menambahkan gula merah seperti solusi bau busuk."
  },
  {
    question: "Bolehkah saya mencampur sisa makanan berminyak atau dimasak?",
    answer: "Sangat tidak boleh. Sampah organik yang diperbolehkan hanyalah sisa sayuran mentah segar dan kulit buah yang belum dimasak, belum layu busuk, bebas minyak, dan bebas bahan kimia/sabun."
  }
];

const hasilEnzymeData = [
  {
    id: "tanaman",
    title: "Pupuk Alami Tanaman",
    ratio: "1 ml Eco-Enzyme : 1 Liter Air (1:1000)",
    icon: Sprout,
    colorClass: "bg-emerald-500 text-white",
    tabColor: "border-emerald-500 text-emerald-700 bg-emerald-50",
    alatBahan: [
      "1 ml cairan Eco-Enzyme murni",
      "1 Liter air sumur/air kran bersih (jangan air panas)",
      "Botol semprotan (*spray* tanaman)"
    ],
    langkah: [
      "Tuangkan 1 Liter air bersih ke dalam botol semprot.",
      "Masukkan 1 ml cairan Eco-Enzyme murni menggunakan pipet atau takaran mini (sangat encer).",
      "Kocok botol perlahan hingga cairan menyatu sempurna.",
      "Semprotkan langsung ke tanah di sekitar akar tanaman atau permukaan daun pada pagi/sore hari.",
      "Lakukan penyiraman ini cukup 1-2 kali saja dalam seminggu."
    ],
    warning: "Jangan menyemprotkan Eco-Enzyme murni tanpa diencerkan! Sifat asamnya yang kuat (pH < 4) bisa membuat akar dan daun tanaman hangus terbakar."
  },
  {
    id: "lantai",
    title: "Cairan Pembersih Lantai",
    ratio: "10-20 ml Eco-Enzyme : 1 Ember Air (~5 Liter)",
    icon: Droplets,
    colorClass: "bg-blue-500 text-white",
    tabColor: "border-blue-500 text-blue-700 bg-blue-50",
    alatBahan: [
      "15 ml (sekitar 1 sendok makan) Eco-Enzyme",
      "1 ember penuh air bersih untuk mengepel",
      "Kain pel rumah tangga"
    ],
    langkah: [
      "Isi ember pel dengan air bersih seperti biasa.",
      "Tambahkan 15 ml Eco-Enzyme ke dalam air, lalu aduk pelan dengan gagang pel.",
      "Gunakan cairan campuran tersebut untuk mengepel lantai seluruh ruangan rumah.",
      "Cairan ini efektif membunuh kuman, mengusir semut/kecoa, dan menetralisir aroma tidak sedap secara alami."
    ],
    warning: "Eco-Enzyme tidak menghasilkan busa karena bebas zat kimia surfaktan. Lantai akan tetap bersih kesat meskipun tanpa busa!"
  },
  {
    id: "sabun",
    title: "Sabun Cuci Piring Berbusa Alami",
    ratio: "1 Bagian Eco-Enzyme : 1 Bagian Sabun Lerak/Kelapa : 10 Bagian Air",
    icon: Sparkles,
    colorClass: "bg-amber-500 text-white",
    tabColor: "border-amber-500 text-amber-700 bg-amber-50",
    alatBahan: [
      "50 ml cairan Eco-Enzyme murni",
      "50 ml ekstrak buah lerak (sabun nabati) atau sabun kelapa cair standar kelurahan",
      "500 ml air bersih",
      "Wadah botol sabun cuci piring bekas"
    ],
    langkah: [
      "Campurkan ekstrak buah lerak/sabun kelapa dengan air di dalam wadah terpisah.",
      "Masukkan cairan Eco-Enzyme murni ke dalam campuran sabun lerak tersebut.",
      "Aduk rata lalu tuangkan ke dalam botol sabun cuci piring.",
      "Gunakan untuk mencuci peralatan dapur. Kombinasi ini menghasilkan busa alami pembabat minyak yang ampuh."
    ],
    warning: "Karena campuran ini menggunakan bahan organik tanpa pengawet buatan, buatlah dalam takaran kecil yang habis digunakan dalam waktu 1-2 minggu."
  },
  {
    id: "disinfektan",
    title: "Disinfektan & Pengusir Hama",
    ratio: "5 ml Eco-Enzyme : 500 ml Air (1:100)",
    icon: AlertTriangle,
    colorClass: "bg-red-500 text-white",
    tabColor: "border-red-500 text-red-700 bg-red-50",
    alatBahan: [
      "5 ml Eco-Enzyme murni",
      "500 ml air bersih",
      "Botol *hand sprayer* ukuran sedang"
    ],
    langkah: [
      "Masukkan air bersih sebanyak 500 ml ke dalam botol semprot.",
      "Campurkan 5 ml Eco-Enzyme ke dalamnya, lalu segel botol rapat-rapat dan kocok.",
      "Semprotkan pada meja makan, gagang pintu, tempat sampah, atau sudut ruangan yang sering didatangi lalat dan nyamuk.",
      "Aroma asam fermentasi segar kulit buah sangat tidak disukai oleh serangga pengganggu."
    ],
    warning: "Cairan campuran ini aman untuk permukaan benda mati, namun hindari area mata atau luka terbuka pada kulit."
  }
];

export default function App() {
  const [wasteAmount, setWasteAmount] = useState(300);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('#beranda');
  const [activeTab, setActiveTab] = useState("tanaman");
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTupoksi, setActiveTupoksi] = useState('ketua');
  const [activeStep, setActiveStep] = useState(0);

  const menuItems = [
    { name: 'Beranda', id: '#beranda' },
    { name: 'Kalkulator', id: '#kalkulator' },
    { name: 'Jadwal', id: '#perencana' },
    { name: 'Panduan', id: '#cara-pembuatan' },
    { name: 'Hasil', id: '#pemanfaatan-hasil' },
    { name: 'Pengurus', id: '#struktur' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.querySelector(item.id));
      const scrollPosition = window.scrollY + 110;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rumus Formula Emas 1:3:10
  const calculateMaterials = (waste) => {
    const numWaste = parseFloat(waste) || 0;
    const sugar = (numWaste / 3).toFixed(0);
    const water = ((numWaste / 3) * 10).toFixed(0);
    const totalVolumeMl = parseFloat(water) + parseFloat(sugar) + numWaste;
    const recommendedContainerLiter = ((totalVolumeMl / 0.6) / 1000).toFixed(1);
    return { sugar, water, waste: numWaste, recommendedContainer: recommendedContainerLiter };
  };

  const { sugar, water, waste, recommendedContainer } = calculateMaterials(wasteAmount);

  const getFutureDate = (baseDate, daysToAdd) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const currentHasilData = hasilEnzymeData.find(item => item.id === activeTab) || hasilEnzymeData[0];
  const CurrentHasilIcon = currentHasilData.icon;
  const currentStepData = stepsData[activeStep] || stepsData[0];
  const CurrentStepIcon = currentStepData.icon;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth w-full overflow-x-hidden">
      
      {/* ==========================================
          NAVBAR (Ultra-Wide Optimization)
      ========================================== */}
      <nav className="bg-white/95 backdrop-blur-md shadow-xs fixed top-0 left-0 right-0 z-50 w-full transition-all">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500 p-2.5 rounded-xl shadow-md shadow-emerald-200">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-black text-2xl lg:text-3xl text-emerald-900 tracking-tight">
                Eco<span className="text-emerald-500">Enzyme</span>.id
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center h-full">
              {menuItems.map((item) => (
                <a 
                  key={item.id}
                  href={item.id} 
                  onClick={() => setActiveMenu(item.id)}
                  className={`font-bold text-sm lg:text-base transition-all pb-1 border-b-2 cursor-pointer ${
                    activeMenu === item.id 
                      ? 'border-emerald-500 text-emerald-600 font-extrabold' 
                      : 'border-transparent text-slate-600 hover:text-emerald-600 hover:border-emerald-300'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2 rounded-lg hover:bg-slate-100">
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2 shadow-lg animate-fadeIn">
            {menuItems.map((item) => (
              <a 
                key={item.id} href={item.id} 
                onClick={() => { setActiveMenu(item.id); setIsMenuOpen(false); }} 
                className={`block px-4 py-3 rounded-xl text-base font-bold ${
                  activeMenu === item.id ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500' : 'text-slate-700'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ==========================================
          HERO SECTION (Full screen wide layouts)
      ========================================== */}
      <section id="beranda" className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white pt-32 pb-20 lg:pt-40 lg:pb-32 w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-400 opacity-10 blur-3xl"></div>

        <div className="relative max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 shadow-xs">
              <Sprout className="w-4 h-4" /> Pelopor Gerakan Eco-Enzyme Salatiga
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tight">
              Ubah Sampah Dapur Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Cairan Ajaib</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light">
              Platform edukasi interaktif untuk belajar membuat Eco-Enzyme secara presisi. Bersama mewujudkan Kelurahan Kutowinangun Kidul yang asri, bersih, dan berwawasan lingkungan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#kalkulator" className="inline-flex justify-center items-center px-8 py-4 text-base lg:text-lg font-black rounded-full text-emerald-950 bg-gradient-to-r from-emerald-300 to-teal-200 hover:from-emerald-200 hover:to-teal-100 shadow-xl shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5">
                Mulai Kalkulasi <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#sejarah" className="inline-flex justify-center items-center px-8 py-4 border border-emerald-400/40 text-base lg:text-lg font-bold rounded-full text-white hover:bg-white/10 transition-all">
                Kisah Pelopor RW 8
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 z-10">
            <div className="relative w-full aspect-square max-w-md xl:max-w-lg mx-auto rounded-3xl bg-emerald-800/20 border border-emerald-500/20 flex items-center justify-center p-8 shadow-2xl backdrop-blur-xs">
              <div className="text-center space-y-4">
                <FlaskConical className="w-36 h-36 lg:w-44 h-44 mx-auto text-emerald-300 opacity-90 drop-shadow-[0_10px_20px_rgba(16,185,129,0.4)]" />
                <p className="font-black text-3xl text-emerald-200 tracking-wider">Formula Eco Enzyme</p>
                <p className="text-emerald-100/80 text-lg lg:text-xl font-medium bg-emerald-950/40 px-4 py-1.5 rounded-xl border border-emerald-500/10 inline-block">1 Gula : 3 Sampah : 10 Air</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SEJARAH SECTION (Modular wide scale container)
      ========================================== */}
      <section id="sejarah" className="py-20 bg-white w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50/60 via-slate-50 to-teal-50/30 rounded-3xl p-6 sm:p-10 lg:p-16 border border-slate-200/60 shadow-xs relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none"><History className="w-72 h-72 text-emerald-900" /></div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">
              <div className="w-full lg:w-1/3 flex-shrink-0 text-center">
                <div className="bg-white w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-md border-4 border-emerald-100 mb-6">
                  <Award className="w-16 h-16 text-emerald-600" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-emerald-900 leading-tight">Jejak Pelopor<br/><span className="text-emerald-600">RW 08</span></h3>
                <p className="text-emerald-700 font-bold mt-2 text-sm lg:text-base">Kutowinangun Kidul, Tingkir, Salatiga</p>
              </div>
              <div className="w-full lg:w-2/3 space-y-4 text-slate-600 text-justify text-base lg:text-xl leading-relaxed">
                <p>Permasalahan sampah organik rumah tangga yang menumpuk sempat menjadi tantangan tersendiri bagi warga. Bau tak sedap mendorong sekelompok warga penggerak di <strong>RW 08 Kelurahan Kutowinangun Kidul, Tingkir, Kota Salatiga</strong> untuk mencari solusi cerdas yang berkelanjutan.</p>
                <p>Berbekal kepedulian tinggi, RW 08 mulai menginisiasi pengolahan sampah dapur segar menjadi Eco-Enzyme. Apa yang awalnya berupa gerakan kecil para kader lingkungan, kini telah berkembang menjadi aksi komunal terstruktur dengan dibentuknya Satgas khusus.</p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-xs">
                  <p className="text-emerald-800 font-bold italic text-base lg:text-lg">"RW 08 kini bukan hanya sekadar lingkungan tempat tinggal, melainkan telah menjadi pusat percontohan (role model). Keberhasilan produksi di RW ini diproyeksikan menjadi pemantik gerakan ramah lingkungan di seluruh Kelurahan."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          KALKULATOR SECTION (Pintu Lebar)
      ========================================== */}
      <section id="kalkulator" className="py-20 bg-slate-50 border-t border-b border-slate-200/40 w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Alat Ukur Akurat</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Kalkulator Pintar Eco-Enzyme</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">Masukkan berat sampah organik yang Anda miliki, dan sistem akan memecah kebutuhan resep lainnya secara instan.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl max-w-[95vw] xl:max-w-[90vw] 2xl:max-w-[1600px] mx-auto border border-slate-100 p-6 sm:p-10 lg:p-14">
            <div className="mb-10 text-center space-y-4">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Pilih Preset Cepat Sampah</span>
              <div className="flex flex-wrap gap-3 justify-center">
                {[150, 300, 500, 1000, 3000, 5000].map((amt) => (
                  <button 
                    key={amt} onClick={() => setWasteAmount(amt)}
                    className={`px-5 py-2.5 rounded-xl text-sm lg:text-base font-black border transition-all cursor-pointer ${
                      wasteAmount === amt ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-100' : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-500'
                    }`}
                  >
                    {amt >= 1000 ? `${amt/1000} kg` : `${amt} g`}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-14 text-center">
              <label className="block text-xs lg:text-sm font-extrabold text-slate-500 mb-3 uppercase tracking-wider">Masukkan Berat Sampah Organik Anda</label>
              <div className="relative max-w-xs mx-auto flex items-end justify-center border-b-4 border-slate-200 focus-within:border-emerald-500 pb-2 px-2 transition-colors">
                <input
                  type="number" min="0" value={wasteAmount === 0 ? '' : wasteAmount}
                  onChange={(e) => { const val = e.target.value; setWasteAmount(val === '' ? 0 : Math.max(0, parseFloat(val))); }}
                  className="w-2/3 text-center text-4xl lg:text-5xl font-black text-emerald-600 focus:outline-none bg-transparent appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                />
                <div className="flex items-center gap-2 text-slate-400 font-bold text-base lg:text-lg mb-1 ml-1 flex-shrink-0">
                  <span>gram</span>
                  <div className="flex flex-col bg-slate-100 rounded-lg p-0.5 border border-slate-200 shadow-xs">
                    <button onClick={() => setWasteAmount((prev) => (prev || 0) + 1)} type="button" className="p-0.5 hover:bg-emerald-500 hover:text-white rounded-md transition-colors cursor-pointer"><Plus className="w-3.5 h-3.5" /></button>
                    <button onClick={() => setWasteAmount((prev) => Math.max(0, (prev || 0) - 1))} type="button" className="p-0.5 hover:bg-red-500 hover:text-white rounded-md transition-colors cursor-pointer border-t border-slate-200/60"><Minus className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-amber-50 rounded-2xl p-6 lg:p-8 text-center border border-amber-100">
                <FlaskConical className="w-8 h-8 mx-auto text-amber-600 mb-4" />
                <h3 className="text-amber-950 font-black mb-1 lg:text-lg">Gula Merah / Molase</h3>
                <p className="text-2xl sm:text-3xl font-black text-amber-600">{sugar} <span className="text-sm font-normal text-amber-700">gram</span></p>
                <p className="text-xs text-amber-700 mt-3 font-bold bg-amber-200/40 inline-block px-3 py-1 rounded-full">Rasio 1</p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 lg:p-8 text-center border border-emerald-100">
                <Leaf className="w-8 h-8 mx-auto text-emerald-600 mb-4" />
                <h3 className="text-emerald-900 font-black mb-1 lg:text-lg">Sampah Organik</h3>
                <p className="text-2xl sm:text-3xl font-black text-emerald-600">{waste} <span className="text-sm font-normal text-emerald-700">gram</span></p>
                <p className="text-xs text-emerald-700 mt-3 font-bold bg-emerald-200/40 inline-block px-3 py-1 rounded-full">Rasio 3</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 lg:p-8 text-center border border-blue-100">
                <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                <h3 className="text-blue-900 font-black mb-1 lg:text-lg">Air Bersih</h3>
                <p className="text-2xl sm:text-3xl font-black text-blue-600">{water} <span className="text-sm font-normal text-blue-700">ml</span></p>
                <p className="text-xs text-blue-700 mt-3 font-bold bg-blue-200/40 inline-block px-3 py-1 rounded-full">Rasio 10</p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="flex gap-4 items-start">
                <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-800 lg:text-lg">Rekomendasi Kapasitas Wadah Plastik</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Demi sirkulasi udara gas, total volume disarankan mengisi maksimal <strong>60% wadah</strong>. Gunakan botol/ember dengan kapasitas minimal:</p>
                </div>
              </div>
              <div className="bg-white px-8 py-4 rounded-xl border border-emerald-200/80 text-center w-full lg:w-auto shadow-sm flex-shrink-0">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kapasitas Minimal</span>
                <span className="text-2xl lg:text-3xl font-black text-emerald-700">{recommendedContainer} <span className="text-sm font-normal">Liter</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PLANNER SECTION
      ========================================== */}
      <section id="perencana" className="py-20 bg-white w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Asisten Digital</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Rencana & Jadwal Pembuatan</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">Tentukan tanggal di bawah ini, dan sistem akan memetakan alur wajib pemantauan fermentasi secara berkala.</p>
          </div>

          <div className="max-w-[95vw] xl:max-w-[90vw] 2xl:max-w-[1600px] mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <Calendar className="w-12 h-12 text-emerald-600 hidden sm:block" />
                <div>
                  <label htmlFor="tanggal-mulai" className="block text-sm lg:text-base font-bold text-slate-500 uppercase tracking-wide">Tanggal Mulai Pembuatan</label>
                  <span className="text-xs text-slate-400">Pilih tanggal kalender untuk setup otomatis jadwal</span>
                </div>
              </div>
              <input
                id="tanggal-mulai" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none font-bold text-slate-700 text-base shadow-sm bg-white cursor-pointer"
              />
            </div>

            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-xs font-bold text-amber-600 uppercase block mb-1">Mulai & Buang Gas</span>
                  <p className="font-black text-slate-800 text-lg lg:text-xl">{getFutureDate(startDate, 0)}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Mulai inkubasi bahan. Wajib buka tutup wadah 5-10 detik setiap hari untuk membuang akumulasi gas.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-xs font-bold text-blue-600 uppercase block mb-1">Masuk Fase Tenang</span>
                  <p className="font-black text-slate-800 text-lg lg:text-xl">{getFutureDate(startDate, 30)}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Gas karbon dioksida mereda drastis. Penutupan wadah dikunci permanen tanpa perlu dibuka harian lagi.</p>
                </div>
                <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200 shadow-xs">
                  <span className="text-xs font-bold text-emerald-700 uppercase block mb-1">PANEN RAYA 🎉</span>
                  <p className="font-black text-emerald-800 text-xl lg:text-2xl">{getFutureDate(startDate, 90)}</p>
                  <p className="text-xs text-emerald-600 mt-2 font-semibold leading-relaxed">90 Hari Tuntas! Cairan matang sempurna dengan aroma segar, siap disaring dan dipisahkan dari ampas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          STEPS SECTION (Dual Grid Columns)
      ========================================== */}
      <section id="cara-pembuatan" className="py-20 bg-white border-t border-slate-100 w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Langkah Praktis</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Panduan Langkah Pembuatan</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">Klik tiap urutan langkah di bawah untuk memunculkan instruksi detail serta tips pro anti-gagal.</p>
          </div>

          <div className="max-w-[95vw] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {stepsData.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <button
                    key={index} onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                      activeStep === index ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl translate-x-1' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0 ${activeStep === index ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'}`}>{index + 1}</div>
                    <p className="font-bold text-sm lg:text-base flex-grow">{step.title}</p>
                    <StepIcon className={`w-5 h-5 ${activeStep === index ? 'text-white' : 'text-emerald-600'}`} />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs min-h-[360px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase">Langkah {activeStep + 1} dari 6</span>
                  <div className="h-1.5 bg-slate-200 flex-grow rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${((activeStep + 1) / 6) * 100}%` }}></div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 flex items-center gap-2 pt-2">
                  <ListTodo className="w-6 h-6 text-emerald-600" /> {stepsData[activeStep].title}
                </h3>
                <p className="text-slate-700 text-base lg:text-xl leading-relaxed text-justify">{stepsData[activeStep].desc}</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 relative overflow-hidden mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-xl text-amber-700 flex-shrink-0"><Sparkles className="w-5 h-5" /></div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-amber-900 text-sm lg:text-base uppercase tracking-wider">Tips Pro Anti-Gagal:</h4>
                    <p className="text-amber-950 text-sm lg:text-base font-medium leading-relaxed text-justify">{stepsData[activeStep].proTip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          TIMELINE SECTION (MODIFIKASI: Bulan 1, 2, dan 3 Lengkap)
      ========================================== */}
      <section id="panduan" className="py-20 bg-slate-50 border-t border-b border-slate-200/40 w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Panduan Teknis</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Perjalanan 90 Hari Fermentasi</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">Kenali dinamika perubahan pada cairan di dalam wadah dari bulan ke bulan.</p>
          </div>

          <div className="max-w-[95vw] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto space-y-8">
            {/* Bulan 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-full md:w-44 flex-shrink-0 bg-emerald-100/50 rounded-2xl p-6 text-center border border-emerald-200/50">
                <span className="block text-5xl font-black text-emerald-600 mb-1">1</span>
                <span className="block text-sm lg:text-base font-extrabold text-emerald-800 uppercase tracking-widest leading-tight">Bulan<br/>Pertama</span>
              </div>
              <div className="flex-grow w-full space-y-4">
                <h3 className="text-xl lg:text-2xl font-black text-slate-800">Fase Alkohol (Akumulasi Gas Tinggi)</h3>
                <p className="text-slate-600 text-sm lg:text-lg leading-relaxed text-justify">Ragi aktif bekerja memecah senyawa molekul gula menjadi alkohol dan gas karbon dioksida. Pada bulan pertama, tekanan udara di dalam wadah akan sangat tinggi.</p>
                <div className="rounded-2xl p-5 bg-slate-50 border border-slate-100 space-y-3.5">
                  <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" /><p className="text-xs lg:text-base text-slate-700"><strong>Wajib Buang Gas Harian:</strong> Buka tutup sedikit (5-10 detik) setiap hari untuk menghindari penumpukan gas berlebih.</p></div>
                  <div className="flex items-start gap-3 bg-red-50 p-3.5 rounded-xl border border-red-100"><AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><p className="text-xs lg:text-base text-red-800"><strong>Dilarang Dikocok:</strong> Mengocok wadah secara ekstrem dapat melipatgandakan gas instan dan berisiko merusak wadah.</p></div>
                </div>
              </div>
            </div>

            {/* Bulan 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-full md:w-44 flex-shrink-0 bg-blue-100/50 rounded-2xl p-6 text-center border border-blue-200/50">
                <span className="block text-5xl font-black text-blue-600 mb-1">2</span>
                <span className="block text-sm lg:text-base font-extrabold text-blue-800 uppercase tracking-widest leading-tight">Bulan<br/>Kedua</span>
              </div>
              <div className="flex-grow w-full space-y-4">
                <h3 className="text-xl lg:text-2xl font-black text-slate-800">Fase Asam Asetat (Fase Stabilisasi)</h3>
                <p className="text-slate-600 text-sm lg:text-lg leading-relaxed text-justify">Bakteri asam asetat mulai mengonversi senyawa alkohol menjadi asam asetat alami. Tekanan gas mereda total dan aroma berubah menjadi segar masam khas fermentasi.</p>
                <div className="rounded-2xl p-5 bg-slate-50 border border-slate-100 space-y-3.5">
                  <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><p className="text-xs lg:text-base text-slate-700"><strong>Jangan Diaduk Lagi:</strong> Biarkan lapisan selaput ragi putih pembawa protein (Mamma Enzyme) terbentuk merata di permukaan air.</p></div>
                </div>
              </div>
            </div>

            {/* MODIFIKASI: Menambahkan Kembali Bulan 3 yang Hilang */}
            <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-10 border-2 border-emerald-300/80 shadow-xs flex flex-col md:flex-row gap-6 md:gap-10 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Sparkles className="w-48 h-48 text-emerald-600" />
              </div>
              <div className="w-full md:w-44 flex-shrink-0 bg-emerald-600 rounded-2xl p-6 text-center text-white font-bold shadow-md">
                <span className="block text-5xl font-black mb-1">3</span>
                <span className="block text-sm lg:text-base uppercase tracking-widest leading-tight">Bulan<br/>Ketiga</span>
              </div>
              <div className="flex-grow w-full space-y-4 z-10">
                <h3 className="text-xl lg:text-2xl font-black text-emerald-900">Fase Panen Raya (Pematangan Enzim)</h3>
                <p className="text-emerald-800 text-sm lg:text-lg leading-relaxed text-justify">Proses fermentasi komunal selesai sempurna! Cairan telah jernih kecokelatan dan siap dipanen untuk sejuta kegunaan pembersihan sekunder rumah tangga.</p>
                <div className="bg-white rounded-2xl p-5 border border-emerald-100 space-y-3.5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs lg:text-base text-slate-700"><strong>Teknik Penyaringan:</strong> Gunakan kain saring tipis atau saringan halus untuk memisahkan ampas sisa buah dari inti cairan jernih.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs lg:text-base text-slate-700"><strong>Pemanfaatan Ampas:</strong> Jangan buang ampas organik hasil saringan; campurkan langsung ke media pekarangan sebagai bio-aktivator kompos bernutrisi tinggi.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          PASCAPANEN SECTION (Ultra Wide Layout)
      ========================================== */}
      <section id="pemanfaatan-hasil" className="py-20 bg-white w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Pascapanen</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Panduan Pengolahan Hasil Panen</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">Pilih opsi di bawah untuk melihat takaran pencampuran dan langkah aplikasi siap guna produk buatan Anda!</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10 max-w-5xl mx-auto">
            {hasilEnzymeData.map((item) => {
              const TabIcon = item.icon;
              return (
                <button
                  key={item.id} onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm lg:text-base font-black transition-all shadow-xs cursor-pointer ${
                    activeTab === item.id ? item.tabColor + ' border-2 scale-105 shadow-md' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <TabIcon className="w-4 h-4 sm:w-5 h-5" /> {item.title}
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-sm max-w-[95vw] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl shadow-md ${currentHasilData.colorClass}`}><CurrentHasilIcon className="w-6 h-6 lg:w-7 h-7" /></div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{currentHasilData.title}</h3>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Rekomendasi Formula Pascapanen</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="block text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Rasio Pengenceran Cairan:</span>
                <p className="font-black text-slate-800 text-base lg:text-lg leading-snug">{currentHasilData.ratio}</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-sm lg:text-base uppercase tracking-wide flex items-center gap-2"><span className="w-2 h-4 bg-emerald-500 rounded-full"></span> Kebutuhan Bahan Campuran:</h4>
                <ul className="space-y-2">
                  {currentHasilData.alatBahan.map((bahan, i) => (
                    <li key={i} className="text-sm lg:text-base text-slate-600 flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-xs">{bahan}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm lg:text-base uppercase tracking-wide flex items-center gap-2"><span className="w-2 h-4 bg-blue-500 rounded-full"></span> Langkah Pembuatan & Aplikasi Lapangan:</h4>
                <div className="space-y-3">
                  {currentHasilData.langkah.map((step, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center font-black text-xs sm:text-sm text-emerald-700 flex-shrink-0 mt-0.5">{idx + 1}</div>
                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed text-justify">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 relative overflow-hidden mt-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-red-900 text-sm lg:text-base uppercase tracking-wider">Aturan Penting Satgas:</h4>
                    <p className="text-red-950 text-sm lg:text-base font-medium leading-relaxed text-justify">{currentHasilData.warning}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          TUPOKSI SECTION (Wide Interactive Org Chart)
      ========================================== */}
      <section id="struktur" className="py-20 bg-slate-50 w-full border-t border-slate-200/40">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Kolaborasi Komunitas</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">Satgas Eco-Enzyme</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm lg:text-base font-medium">Struktur Kepengurusan Satuan Tugas di Wilayah Kelurahan Kutowinangun Kidul, Tingkir, Kota Salatiga</p>
          </div>

          <div className="max-w-5xl mx-auto mb-12 relative flex flex-col items-center">
            <div className="hidden md:block absolute w-0.5 bg-slate-200 top-14 bottom-14 left-1/2 transform -translate-x-1/2 -z-0"></div>
            
            {/* Pembina */}
            <div className="w-full sm:w-72 z-10 mb-8">
              <button onClick={() => setActiveTupoksi('pembina')} className={`w-full bg-white rounded-2xl border p-5 text-center transition-all cursor-pointer shadow-xs hover:shadow-md ${activeTupoksi === 'pembina' ? 'border-emerald-500 ring-4 ring-emerald-500/10 bg-emerald-50/10' : 'border-slate-200'}`}>
                <Shield className="w-6 h-6 text-slate-500 mx-auto mb-2" />
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider">Pembina</h3>
                <p className="text-slate-800 font-black text-lg">Ketua RW 08</p>
              </button>
            </div>

            {/* Ketua */}
            <div className="w-full sm:w-80 z-10 mb-14">
              <button onClick={() => setActiveTupoksi('ketua')} className={`w-full rounded-2xl p-6 text-center transition-all cursor-pointer shadow-md text-white ${activeTupoksi === 'ketua' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 ring-4 ring-emerald-500/20 scale-105' : 'bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600'}`}>
                <Award className="w-6 h-6 text-white mx-auto mb-2" />
                <h3 className="font-medium text-emerald-200 text-xs uppercase tracking-wider">Pimpinan Utama</h3>
                <p className="font-black text-xl tracking-wide">Ketua Satgas Eco-Enzyme</p>
              </button>
            </div>

            <div className="hidden md:block absolute w-[75%] h-0.5 bg-slate-200 top-[290px] left-1/2 transform -translate-x-1/2"></div>

            {/* Tiga Divisi */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
              <button onClick={() => setActiveTupoksi('sarpras')} className={`rounded-2xl p-6 border text-center transition-all cursor-pointer bg-white shadow-xs hover:shadow-md ${activeTupoksi === 'sarpras' ? 'border-emerald-500 ring-4 ring-emerald-500/10 bg-emerald-50/10' : 'border-slate-200'}`}>
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${activeTupoksi === 'sarpras' ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600'}`}><Wrench className="w-5 h-5" /></div>
                <h4 className="font-black text-slate-800 text-sm lg:text-base leading-tight">Divisi Sarana Prasarana</h4>
              </button>
              <button onClick={() => setActiveTupoksi('produksi')} className={`rounded-xl p-6 border text-center transition-all cursor-pointer bg-white shadow-xs hover:shadow-md ${activeTupoksi === 'produksi' ? 'border-teal-500 ring-4 ring-teal-500/10 bg-teal-50/10' : 'border-slate-200'}`}>
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${activeTupoksi === 'produksi' ? 'bg-teal-500 text-white' : 'bg-teal-50 text-teal-600'}`}><Recycle className="w-5 h-5" /></div>
                <h4 className="font-black text-slate-800 text-sm lg:text-base leading-tight">Divisi Produksi & Edukasi</h4>
              </button>
              <button onClick={() => setActiveTupoksi('humas')} className={`rounded-xl p-6 border text-center transition-all cursor-pointer bg-white shadow-xs hover:shadow-md ${activeTupoksi === 'humas' ? 'border-blue-500 ring-4 ring-blue-500/10 bg-blue-50/10' : 'border-slate-200'}`}>
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${activeTupoksi === 'humas' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600'}`}><Users className="w-5 h-5" /></div>
                <h4 className="font-black text-slate-800 text-sm lg:text-base leading-tight">Divisi Humas & Kemitraan</h4>
              </button>
            </div>
          </div>

          {/* Box Detail Penjelasan Tupoksi */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs transition-all min-h-[160px]">
            {activeTupoksi === 'pembina' && (
              <div className="animate-fadeIn space-y-2">
                <span className="inline-block bg-slate-100 text-slate-700 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">Tupoksi Pembina</span>
                <h4 className="text-base sm:text-lg font-black text-slate-800">Ketua RW 08 selaku Pembina</h4>
                <ul className="text-xs sm:text-sm lg:text-base text-slate-600 list-disc list-inside space-y-2 leading-relaxed">
                  <li>Melakukan pengawasan tertinggi serta memberikan restu legalitas program Satgas di lingkungan warga.</li>
                  <li>Menyediakan arahan strategis dan memfasilitasi koordinasi utama antar-RT di wilayah RW 08.</li>
                  <li>Menerima pelaporan hasil berkala mengenai efektivitas lingkungan dan hasil panen komunal.</li>
                </ul>
              </div>
            )}
            {activeTupoksi === 'ketua' && (
              <div className="animate-fadeIn space-y-2">
                <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">Tupoksi Utama</span>
                <h4 className="text-base sm:text-lg font-black text-slate-800">Ketua Satgas Eco-Enzyme</h4>
                <ul className="text-xs sm:text-sm lg:text-base text-slate-600 list-disc list-inside space-y-2 leading-relaxed">
                  <li>Memimpin, mengawasi, dan mengkoordinasikan semua rangkaian program pembuatan Eco-Enzyme di tingkat RW.</li>
                  <li>Merumuskan program sosialisasi, jadwal kerja, serta mengevaluasi kendala teknis dari tiap-tiap divisi.</li>
                  <li>Melaporkan berkala capaian hasil produksi dan pemanfaatan panen kepada Pembina.</li>
                </ul>
              </div>
            )}
            {activeTupoksi === 'sarpras' && (
              <div className="animate-fadeIn space-y-2">
                <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">Tupoksi Divisi</span>
                <h4 className="text-base sm:text-lg font-black text-slate-800">Sarana Prasarana (Sarpras)</h4>
                <ul className="text-xs sm:text-sm lg:text-base text-slate-600 list-disc list-inside space-y-2 leading-relaxed">
                  <li>Menyediakan, merawat, dan mencatat ketersediaan wadah fermentasi (ember/tong plastik).</li>
                  <li>Mengkoordinir penyediaan bahan pendukung seperti gula merah tebu/molase dan air bersih.</li>
                  <li>Mengatur titik lokasi pengumpulan sisa sampah kulit buah segar atau sayuran warga.</li>
                </ul>
              </div>
            )}
            {activeTupoksi === 'produksi' && (
              <div className="animate-fadeIn space-y-2">
                <span className="inline-block bg-teal-100 text-teal-800 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">Tupoksi Divisi</span>
                <h4 className="text-base sm:text-lg font-black text-slate-800">Produksi & Edukasi</h4>
                <ul className="text-xs sm:text-sm lg:text-base text-slate-600 list-disc list-inside space-y-2 leading-relaxed">
                  <li>Mengatur serta memandu proses pencampuran bahan baku dengan rasio baku 1:3:10.</li>
                  <li>Membuat kalender pemantauan harian, utamanya kontrol pembuangan gas pada bulan pertama.</li>
                  <li>Menilai kematangan fisik eco-enzyme pada masa akhir fermentasi 90 hari.</li>
                </ul>
              </div>
            )}
            {activeTupoksi === 'humas' && (
              <div className="animate-fadeIn space-y-2">
                <span className="inline-block bg-blue-100 text-blue-800 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">Tupoksi Divisi</span>
                <h4 className="text-base sm:text-lg font-black text-slate-800">Humas & Kemitraan</h4>
                <ul className="text-xs sm:text-sm lg:text-base text-slate-600 list-disc list-inside space-y-2 leading-relaxed">
                  <li>Menyosialisasikan manfaat cairan Eco-Enzyme kepada seluruh warga RW 08.</li>
                  <li>Menjembatani kerja sama dengan instansi luar seperti Kelurahan dan Dinas Lingkungan Hidup (DLH).</li>
                  <li>Mempromosikan pencapaian ramah lingkungan RW 08 Kutowinangun Kidul di media sosial.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          TROUBLESHOOTING SECTION (FAQ Grid)
      ========================================== */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Klinik Pertanyaan</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Panduan Solusi Masalah</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm lg:text-base">Menghadapi kendala saat fermentasi? Cek penanganan masalah darurat di bawah ini.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center px-6 py-4.5 bg-slate-50/50 hover:bg-slate-50 text-left gap-4 cursor-pointer">
                  <span className="font-bold text-slate-800 text-sm lg:text-base flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> {faq.question}
                  </span>
                  {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
                </button>
                {activeFaq === idx && (
                  <div className="px-6 py-5 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed text-justify animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER SECTION
      ========================================== */}
      <footer className="bg-slate-950 text-slate-400 py-16 w-full border-t border-slate-900">
        <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-xl"><Leaf className="w-6 h-6 text-white" /></div>
            <span className="font-black text-2xl text-white tracking-tight">Eco<span className="text-emerald-400">Zyme</span>.id</span>
          </div>
          <p className="text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Platform edukasi pengolahan limbah organik domestik. Berkontribusi nyata dari dapur rumah tangga untuk kelestarian lingkungan Kelurahan Kutowinangun Kidul, Salatiga.
          </p>
          <div className="border-t border-slate-900 pt-8 mt-8">
            <p className="text-[10px] sm:text-xs text-slate-600">&copy; 2026 EcoZyme Edu-Platform. Dibuat dengan penuh kepedulian lingkungan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}