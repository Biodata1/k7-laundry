import { useState } from "react";

const WashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="12" cy="13" r="4"/>
    <path d="M7 7h2"/>
  </svg>
);

const IronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <path d="M3 17h18l-3-7H6L3 17z"/>
    <path d="M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3"/>
    <line x1="9" y1="17" x2="9" y2="20"/>
    <line x1="15" y1="17" x2="15" y2="20"/>
  </svg>
);

const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const FoldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <path d="M3 10h18"/>
    <path d="M12 10v10"/>
  </svg>
);

const BikeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M5.5 17.5L12 7l2 5h4"/>
    <path d="M12 7h3"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const services = [
  { icon: <WashIcon />, name: "Cuci Komplit", desc: "Dicuci bersih + dikeringkan + dilipat rapi", badge: "Terpopuler" },
  { icon: <FoldIcon />, name: "Cuci Lipat", desc: "Dicuci bersih dan dilipat dengan rapi", badge: null },
  { icon: <IronIcon />, name: "Setrika", desc: "Pakaian disetrika halus dan rapi", badge: null },
  { icon: <SpeedIcon />, name: "One Day Service", desc: "Selesai dalam 1 hari kerja", badge: "Cepat" },
  { icon: <SpeedIcon />, name: "Express", desc: "Prioritas antrian, selesai super cepat", badge: "Super Cepat" },
  { icon: <WashIcon />, name: "Cuci Kering Express", desc: "Hanya cuci dan keringkan, tanpa lipat", badge: null },
];

const pricelist = [
  { layanan: "Cuci Komplit", harga: "Rp 7.000", satuan: "/kg", tipe: "Reguler" },
  { layanan: "Cuci Lipat", harga: "Rp 5.000", satuan: "/kg", tipe: "Reguler" },
  { layanan: "Setrika", harga: "Rp 5.000", satuan: "/kg", tipe: "Reguler" },
  { layanan: "One Day Service", harga: "Rp 10.000", satuan: "/kg", tipe: "Express" },
  { layanan: "Express", harga: "Rp 13.000", satuan: "/kg", tipe: "Express" },
  { layanan: "Cuci Kering Express", harga: "Rp 3.000", satuan: "/kg", tipe: "Express" },
];

const WA_NUMBER = "6283899785900";

export default function K7Laundry() {
  const [form, setForm] = useState({
    nama: "", hp: "", alamat: "", layanan: "", tanggalMasuk: "", estimasiSelesai: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const { nama, hp, alamat, layanan, tanggalMasuk, estimasiSelesai } = form;
    if (!nama || !hp || !alamat || !layanan) {
      alert("Mohon lengkapi semua field yang wajib diisi.");
      return;
    }
    const msg = encodeURIComponent(
      `Halo K7 Laundry! Saya ingin memesan laundry.\n\n` +
      `*Nama:* ${nama}\n*No. HP:* ${hp}\n*Alamat:* ${alamat}\n` +
      `*Layanan:* ${layanan}\n*Tanggal Masuk:* ${tanggalMasuk || "-"}\n*Estimasi Selesai:* ${estimasiSelesai || "-"}\n\n` +
      `Mohon diproses ya, terima kasih! 🙏`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-sm">K7</div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">K7 Laundry</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <button onClick={() => scrollTo("layanan")} className="hover:text-green-600 transition-colors">Layanan</button>
            <button onClick={() => scrollTo("harga")} className="hover:text-green-600 transition-colors">Harga</button>
            <button onClick={() => scrollTo("order")} className="hover:text-green-600 transition-colors">Order</button>
            <button onClick={() => scrollTo("kontak")} className="hover:text-green-600 transition-colors">Kontak</button>
          </div>
          <button
            onClick={() => scrollTo("order")}
            className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Order Sekarang
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-green-50 to-white px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              ✓ FREE ONGKIR · Siap Antar Jemput
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-3">
              Laundry Bersih,<br />
              <span className="text-green-600">Rapi & Wangi</span>
            </h1>
            <p className="text-gray-500 text-lg mb-2 font-medium italic">
              "Bersih – Rapi – Extra Wangi"
            </p>
            <p className="text-gray-500 mb-8 max-w-md mx-auto md:mx-0">
              Percayakan cucian Anda kepada kami. Antar jemput gratis, hasil terjamin bersih dan wangi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("order")}
                className="bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-700 transition-colors text-base shadow"
              >
                Order Sekarang
              </button>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 font-bold px-6 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-base"
              >
                <WhatsAppIcon /> Chat WhatsApp
              </a>
            </div>
          </div>
          {/* Visual card */}
          <div className="flex-shrink-0 w-64 h-64 bg-green-600 rounded-3xl flex flex-col items-center justify-center text-white shadow-xl">
            <div className="text-6xl mb-3">👕</div>
            <div className="text-center">
              <p className="font-black text-2xl">K7</p>
              <p className="text-sm font-medium opacity-90">Laundry</p>
            </div>
            <div className="mt-4 bg-red-500 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide">
              Free Ongkir!
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYANAN ── */}
      <section id="layanan" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Layanan Kami</h2>
            <p className="text-gray-500">Pilih layanan yang sesuai kebutuhanmu</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="relative border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-md transition-all bg-white">
                {s.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="text-green-600 mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{s.name}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARGA ── */}
      <section id="harga" className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Daftar Harga</h2>
            <p className="text-gray-500">Harga transparan, tidak ada biaya tersembunyi</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-green-600 text-white text-sm font-bold px-6 py-3">
              <span>Layanan</span>
              <span className="text-center">Harga</span>
              <span className="text-right">Tipe</span>
            </div>
            {pricelist.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 px-6 py-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100 last:border-0`}
              >
                <span className="font-medium text-gray-800 text-sm">{item.layanan}</span>
                <span className="text-center">
                  <span className="font-black text-green-600">{item.harga}</span>
                  <span className="text-gray-400 text-xs">{item.satuan}</span>
                </span>
                <span className="text-right">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    item.tipe === "Express"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {item.tipe}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terbaru.
          </p>
        </div>
      </section>

      {/* ── FORM ORDER ── */}
      <section id="order" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Order Sekarang</h2>
            <p className="text-gray-500">Isi form di bawah, kami siap antar jemput!</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Lengkap <span className="text-red-500">*</span></label>
                <input
                  name="nama" value={form.nama} onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nomor HP / WhatsApp <span className="text-red-500">*</span></label>
                <input
                  name="hp" value={form.hp} onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Alamat Lengkap <span className="text-red-500">*</span></label>
                <textarea
                  name="alamat" value={form.alamat} onChange={handleChange}
                  placeholder="Jl. contoh No. 1, RT/RW, Kelurahan, Kecamatan..."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Pilih Layanan <span className="text-red-500">*</span></label>
                <select
                  name="layanan" value={form.layanan} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition bg-white"
                >
                  <option value="">-- Pilih Layanan --</option>
                  {services.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tanggal Masuk</label>
                <input
                  type="date" name="tanggalMasuk" value={form.tanggalMasuk} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Estimasi Selesai</label>
                <input
                  type="date" name="estimasiSelesai" value={form.estimasiSelesai} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-base shadow"
            >
              <WhatsAppIcon /> Kirim Order via WhatsApp
            </button>
            <p className="text-center text-gray-400 text-xs mt-3">
              Anda akan diarahkan ke WhatsApp untuk konfirmasi order
            </p>
          </div>
        </div>
      </section>

      {/* ── KONTAK ── */}
      <section id="kontak" className="py-16 px-4 bg-green-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Hubungi Kami</h2>
            <p className="text-green-100">Siap melayani Anda setiap hari</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">WhatsApp</p>
                <p className="font-bold text-gray-800">0838 9978 5900</p>
                <p className="text-green-600 text-xs font-medium mt-0.5">Klik untuk chat →</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <MapPinIcon />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Alamat</p>
                <p className="font-bold text-gray-800 text-sm leading-snug">
                  Jl. Budi Mulia No. 39<br />
                  RT 005/012, Pademangan Barat,<br />
                  Jakarta Utara
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-green-100 text-sm">
            <BikeIcon />
            <span className="font-semibold">Antar jemput GRATIS untuk area sekitar!</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-sm">K7</div>
                <span className="font-bold text-white text-lg">K7 Laundry</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 italic">"Bersih – Rapi – Extra Wangi"</p>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Syarat & Ketentuan</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                  Klaim berlaku 24 jam setelah barang diambil.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                  Risiko luntur atau mengkerut karena sifat kain di luar tanggung jawab laundry.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                  Barang yang tidak diambil dalam 1 bulan bukan tanggung jawab laundry.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} K7 Laundry. Semua hak dilindungi.
          </div>
        </div>
      </footer>

      {/* ── FLOATING WA BUTTON ── */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
        title="Chat WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
