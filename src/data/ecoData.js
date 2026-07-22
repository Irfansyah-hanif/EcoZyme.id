import { 
  Wrench, 
  Leaf, 
  Droplets, 
  FlaskConical, 
  CheckCircle2, 
  CalendarClock,
  Video,
  Sprout,
  Sparkles,
  Bug,
  Paintbrush
} from 'lucide-react';

export const stepsData = [
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
  },
  {
    title: "Video Panduan Tutorial",
    icon: Video,
    isVideo: true,
    // ID video YouTube aktif (Tutorial Pembuatan Eco-Enzyme)
    videoUrl: "https://www.youtube-nocookie.com/embed/3zAoGn2T4WY",
    desc: "Simak video demonstrasi pembuatan Eco-Enzyme secara langsung dan visual untuk mempermudah praktik kamu di rumah.",
    proTip: "Pastikan rasio bahan baku 1 (gula) : 3 (sampah organik) : 10 (air) diterapkan dengan presisi tinggi saat mengikuti tutorial video."
  }
];

export const faqs = [
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
    answer: "Jamur baik berwarna putih bersih, tipis seperti selaput (sering disebut Mamma Enzyme). Biarkan saja karena ini tanda sukses. Jamur jahat berwarna hitam, hijau pekat, atau abu-abu berbulu tebal. Jika ini muncul disertai bau busuk, segera lakukan penyelamatkan dengan menambahkan gula merah seperti solusi bau busuk."
  },
  {
    question: "Bolehkah saya mencampur sisa makanan berminyak atau dimasak?",
    answer: "Sangat tidak boleh. Sampah organik yang diperbolehkan hanyalah sisa sayuran mentah segar dan kulit buah yang belum dimasak, belum layu busuk, bebas minyak, dan bebas bahan kimia/sabun."
  }
];

export const hasilEnzymeData = [
  {
    id: "tanaman",
    title: "Pupuk Organik Cair Menyuburkan Tanaman",
    icon: Sprout,
    badge: "Pertanian & Kebun",
    color: "emerald",
    ratioText: "1 ml Eco-Enzyme : 1 Liter Air (Rasio 1:1000)",
    materials: [
      "1 ml Cairan Eco-Enzyme murni saringan",
      "1 Liter Air sumur atau air bersih matang dingin",
      "Botol semprot tanaman (sprayer)"
    ],
    steps: [
      "Masukkan 1 liter air bersih ke dalam wadah atau botol semprot.",
      "Teteskan tepat 1 ml Eco-Enzyme murni ke dalam air menggunakan pipet atau takaran presisi.",
      "Kocok botol perlahan sampai cairan menyatu sepenuhnya.",
      "Semprotkan tipis-tipis ke permukaan tanah dekat perakaran tanaman atau langsung ke permukaan daun.",
      "Gunakan maksimal 1-2 kali dalam seminggu pada pagi hari sebelum pukul 09.00 WIB."
    ],
    proTip: "Jangan berikan larutan terlalu pekat karena kadar keasaman (pH) eco-enzyme yang pekat justru dapat merusak atau mematikan jaringan sel tanaman."
  },
  {
    id: "lantai",
    title: "Pembersih & Pewangi Lantai Antiseptik",
    icon: Paintbrush,
    badge: "Kebersihan Rumah",
    color: "blue",
    ratioText: "1 tutup botol Eco-Enzyme : 1 Ember Air Pel",
    materials: [
      "10-20 ml Eco-Enzyme murni (setara 1-2 tutup botol)",
      "1 ember air bersih (sekitar 3-5 liter)",
      "Kain pel bersih"
    ],
    steps: [
      "Siapkan ember berisi air bersih yang biasa digunakan untuk mengepel lantai.",
      "Tuangkan 1 hingga 2 tutup botol cairan Eco-Enzyme murni ke dalam ember tersebut.",
      "Aduk air dengan gagang pel agar cairan menyebar merata.",
      "Gunakan campuran air ini untuk mengepel seluruh lantai rumah secara berkala.",
      "Biarkan mengering secara alami. Lantai akan menjadi bersih, steril dari kuman, dan kesat."
    ],
    proTip: "Lantai yang menggunakan pembersih eco-enzyme cenderung jarang dihinggapi semut, lalat, dan kecoak karena aroma fermentasi segar yang tidak disukai serangga."
  },
  {
    id: "piring",
    title: "Cairan Pencuci Piring Ekstra Busa Lerak",
    icon: Sparkles,
    badge: "Dapur Sehat",
    color: "amber",
    ratioText: "1 bagian Eco-Enzyme : 1 bagian Ekstrak Lerak : 5 bagian Air",
    materials: [
      "100 ml Eco-Enzyme murni",
      "100 ml Ekstrak buah Lerak (sebagai penghasil busa alami)",
      "500 ml Air bersih",
      "Botol dispenser sabun pump bekas"
    ],
    steps: [
      "Rebus 5-10 buah lerak kering dalam air selama 15 menit untuk mengekstrak busa saponinnya, saring dan dinginkan.",
      "Campurkan cairan ekstrak lerak dingin dengan cairan Eco-Enzyme murni di dalam wadah.",
      "Tambahkan air bersih sesuai takaran lalu aduk perlahan agar tercampur rata.",
      "Masukkan larutan ke dalam botol sabun pump.",
      "Sabun cuci piring alami siap digunakan menggunakan spons gosok biasa."
    ],
    proTip: "Sabun ini sangat ramah lingkungan, tidak panas di kulit sensitif, dan limbah air bekas cuciannya aman dibuang langsung ke tanah atau selokan tanpa merusak ekosistem air."
  },
  {
    id: "hama",
    title: "Pestisida Alami Pengusir Serangga & Hama",
    icon: Bug,
    badge: "Perlindungan Rumah",
    color: "rose",
    ratioText: "15 ml Eco-Enzyme : 1 Liter Air (Rasio 1:65)",
    materials: [
      "15 ml Eco-Enzyme murni (sekitar 1.5 sendok makan)",
      "1 Liter Air bersih",
      "Botol semprot pemicu (trigger sprayer)"
    ],
    steps: [
      "Tuangkan air bersih ke dalam botol semprot sprayer berukuran 1 liter.",
      "Tambahkan 15 ml cairan Eco-Enzyme murni ke dalamnya.",
      "Kocok kuat botol hingga larutan tercampur sempurna.",
      "Semprotkan pada sudut rumah yang sering dilalui kecoak/semut, atau pada batang tanaman yang terserang kutu putih."
    ],
    proTip: "Campuran ini bekerja dengan mengganggu reseptor sensorik serangga dan merusak membran tubuh hama berukuran kecil tanpa menyisakan residu racun kimia di rumah Anda."
  }
];