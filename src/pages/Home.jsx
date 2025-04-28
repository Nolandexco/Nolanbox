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
      {["Bisnis Online", "Website", "Jadi Reseller"].map((pkg) => (
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
  const [activePackage, setActivePackage] = useState("Bisnis Online");

  const infoGridItems = useMemo(
    () => [
      {
        title: "Banyak yang Sukses",
        description: "Banyak pelanggan kami berhasil mulai bisnis online dengan NolanDex, terbukti dari cerita nyata mereka.",
      },
      {
        title: "Cepat Jadi",
        description: "Bisnis Anda siap dalam beberapa jam, rapi dan langsung bisa jualan.",
      },
      {
        title: "Aman, Tidak Rugi",
        description: "Kami kembalikan 50% uang Anda jika bisnis tidak berkembang dalam 30 hari.",
      },
    ],
    []
  );

  const pricingPackages = useMemo(
    () => [
      {
        name: "Bisnis Online",
        price: "Rp50.000",
        description: "Cocok untuk Anda yang ingin mulai jualan online dengan mudah.",
        features: [
          "Bikin bisnis online lengkap",
          "Website",
          "Peningkatannmedia sosial",
          "Chatbot sederhana",
          "Konten untuk media sosial",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Halo,%20saya%20mau%20paket%20Bisnis%20Online.%20Bisa%20jelasin%20lebih%20lanjut?",
      },
      {
        name: "Website",
        price: "Rp25.000",
        description: "Buat website keren untuk bisnis Anda, siap digunakan.",
        features: [
          "Website toko online",
          "Website portofolio",
          "Halaman promosi",
          "Website komunitas",
          "Domain gratis + hosting tanpa batas",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Halo,%20saya%20mau%20paket%20Website.%20Bisa%20jelasin%20lebih%20lanjut?",
      },
      {
        name: "Jadi Reseller",
        price: "Gratis",
        description: "Mulai bisnis tanpa modal, kami bantu sampai dapat pelanggan.",
        features: [
          "Semua fitur di paket Website",
          "Bantuan sampai dapat pelanggan pertama",
          "Program reseller gratis",
          "Akses alat promosi khusus",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Halo,%20saya%20mau%20paket%20Jadi%20Reseller.%20Bisa%20jelasin%20lebih%20lanjut?",
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
            Kami Bantu <br />
            <span className="text-gray-400">Anda Mulai dan Untung</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Mau punya bisnis sendiri? Kami siapkan semua, Anda tinggal jualan dan kembangkan!
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
              Harga terjangkau, hasil maksimal. Pilih yang sesuai kebutuhan Anda.
            </p>
            <PricingCard activePkg={activePkg} setActivePackage={setActivePackage} activePackage={activePackage} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
