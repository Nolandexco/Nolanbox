import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Komponen InfoCard
const InfoCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Komponen PricingCard
const PricingCard = ({ activePkg, setActivePackage, activePackage }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <h3 className="text-2xl font-bold mb-4">{activePkg.name}</h3>
    <p className="text-3xl font-semibold mb-4">{activePkg.price}</p>
    <p className="text-gray-400 mb-6">{activePkg.description}</p>
    <ul className="mb-6">
      {activePkg.features.map((feature, index) => (
        <li key={index} className="text-gray-300 mb-2">✔ {feature}</li>
      ))}
    </ul>
    <a
      href={activePkg.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-blue-500 text-white py-2 px-6 rounded-tl-[16px] rounded-br-[16px] hover:bg-blue-600 transition glass text-sm font-semibold"
    >
      Beli
    </a>
    <div className="flex justify-center gap-2 mt-3">
      {["Pembuatan Bisnis Online", "Website", "Gabung Reseller"].map((pkg) => (
        <button
          key={pkg}
          onClick={() => setActivePackage(pkg)}
          className={`px-3 py-1 text-xs rounded-md ${
            activePackage === pkg ? "bg-gray-600" : "bg-gray-700"
          } hover:bg-gray-500 transition`}
        >
          {pkg}
        </button>
      ))}
    </div>
  </div>
);

// Komponen Home
const Home = () => {
  const [activePackage, setActivePackage] = useState("Pembuatan Bisnis Online");

  const infoGridItems = useMemo(
    () => [
      {
        title: "Tingkat Keberhasilan Terbukti",
        description:
          "Sebagian besar pengguna kami berhasil meluncurkan bisnis online mereka dengan NolanDex, didukung oleh kisah sukses pelanggan nyata",
      },
      {
        title: "Pengaturan Cepat",
        description: "Pengaturan lengkap selesai dalam beberapa jam kerja — cepat, profesional, dan siap jual.",
      },
      {
        title: "Jaminan Tanpa Risiko",
        description: "Jaminan uang kembali 50% jika bisnis Anda tidak berkembang dalam 30 hari.",
      },
    ],
    []
  );

  const pricingPackages = useMemo(
    () => [
      {
        name: "Pembuatan Bisnis Online",
        price: "Rp50.000",
        description: "Ideal untuk individu atau bisnis kecil yang ingin membangun kehadiran online mereka",
        features: [
          "Pengaturan bisnis online lengkap",
          "Website",
          "Peningkat media sosial",
          "Integrasi chatbot dasar",
          "Konten media sosial",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Halo,%20saya%20tertarik%20dengan%20paket%20Pembuatan%20Bisnis%20Online.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?",
      },
      {
        name: "Website",
        price: "Rp25.000",
        description: "Sempurna untuk bisnis yang siap membangun website profesional dan kehadiran digital",
        features: [
          "Website e-commerce",
          "Website portofolio",
          "Landing page",
          "Website keanggotaan/komunitas",
          "Domain gratis + hosting tak terbatas",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Halo,%20saya%20tertarik%20dengan%20paket%20Website.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?",
      },
      {
        name: "Gabung Reseller",
        price: "Gratis",
        description: "Untuk bisnis yang siap berkembang tanpa biaya awal.",
        features: [
          "Semua fitur di paket Website",
          "Dukungan penuh hingga Anda mendapatkan pelanggan pertama",
          "Integrasi program reseller (Gratis)",
          "Akses ke sumber daya dan alat pemasaran eksklusif",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Halo,%20saya%20tertarik%20dengan%20paket%20Gabung%20Reseller.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?",
      },
    ],
    []
  );

  const activePkg = useMemo(
    () => pricingPackages.find((pkg) => pkg.name === activePackage) || pricingPackages[0],
    [activePackage, pricingPackages]
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Kami Membuat <br />
            <span className="text-gray-400">Anda Meluncurkan dan Menghasilkan</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Siap meluncurkan bisnis Anda? Dengan layanan pengaturan lengkap kami, Anda bisa fokus pada pertumbuhan sementara kami menangani pekerjaan sulit.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("pricing")}
              className="glass px-8 py-4 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-100 hover:text-black transition"
            >
              Beli
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {infoGridItems.map((item, index) => (
              <InfoCard key={`info-${index}`} title={item.title} description={item.description} />
            ))}
          </div>
          <motion.div
            id="pricing"
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pilih Paket Anda</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Harga Jelas, Hasil Besar. Dapatkan semua yang Anda butuhkan, dengan harga yang tepat.
            </p>
            <PricingCard activePkg={activePkg} setActivePackage={setActivePackage} activePackage={activePackage} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
