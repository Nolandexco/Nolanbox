import React from "react";

const Service = () => {
  return (
    <section id="services" className="min-h-screen flex items-center bg-gray-900 text-white opacity-70">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 mt-32">Layanan Kami</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          NolanDex bantu Anda mulai dan kembangkan bisnis online dengan mudah dan cepat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🌐 Website</h3>
            <p className="text-gray-300">Website keren yang cocok dengan bisnis Anda.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🎨 Logo & Desain</h3>
            <p className="text-gray-300">Logo dan gambar menarik untuk promosi.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🤖 Pesanan & Pembayaran</h3>
            <p className="text-gray-300">Sistem otomatis untuk jualan lebih mudah.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📱 Konten Media Sosial</h3>
            <p className="text-gray-300">Konten seru untuk bikin bisnis Anda dikenal.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📈 Cara Promosi</h3>
            <p className="text-gray-300">Promosi tepat untuk tambah pelanggan.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🛠️ Alat Bisnis</h3>
            <p className="text-gray-300">Alat untuk kelola bisnis dengan gampang.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">⚡ Cepat Jadi</h3>
            <p className="text-gray-300">Bisnis Anda siap dalam beberapa jam.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">✅ Jaminan Sukses</h3>
            <p className="text-gray-300">Uang kembali 50% jika bisnis tidak maju dalam 30 hari.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
