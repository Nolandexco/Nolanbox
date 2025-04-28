import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 opacity-70 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 mt-32 mb-32">Bisnis Anda, Mulai dengan Yakin</h2>
        
        {/* Main Description */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          NolanDex adalah teman Anda untuk mulai bisnis online lengkap. 
          <span className="text-blue-400">#StartFastGrowSmart</span>, kami bantu wirausaha untuk bikin, jual, dan sukses tanpa ribet.
        </p>

        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Comprehensive Setup */}
          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all">
            <div className="text-blue-400 text-4xl mb-4">🌐💻</div>
            <h3 className="text-xl font-semibold mb-3">Bikin Bisnis Lengkap</h3>
            <p className="text-gray-300">
              Kami siapkan semua yang Anda butuh untuk mulai jualan dengan <span className="font-bold">NolanDex</span>:
            </p>
            <ul className="mt-2 text-left list-disc list-inside mx-auto max-w-xs">
              <li>Desain website yang bagus</li>
              <li>Logo dan gambar promosi</li>
              <li>Sistem pesanan dan pembayaran otomatis</li>
            </ul>
          </div>

          {/* Growth Support */}
          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all">
            <div className="text-blue-400 text-4xl mb-4">📈🚀</div>
            <h3 className="text-xl font-semibold mb-3">Alat Promosi & Sukses</h3>
            <p className="text-gray-300">
              Kami kasih alat dan cara untuk bikin bisnis Anda besar:
            </p>
            <ul className="mt-2 text-left list-disc list-inside mx-auto max-w-xs">
              <li>Konten untuk media sosial</li>
              <li>Cara promosi yang tepat</li>
              <li>Alat untuk kelola bisnis mudah</li>
            </ul>
          </div>
        </div>

        {/* Guarantee & Speed */}
        <div className="glass p-6 rounded-lg mt-12 mx-auto max-w-2xl hover:transform hover:scale-102 transition-all">
          <div className="text-blue-400 text-4xl mb-4">✅💼</div>
          <h3 className="text-xl font-semibold mb-3">Cepat Jadi, Hasil Nyata</h3>
          <p className="text-gray-300">
            Bersama NolanDex, bisnis Anda siap dalam hitungan jam, dengan jaminan:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-3 rounded bg-gray-800">
              <p>⚡ Siap dalam beberapa jam</p>
            </div>
            <div className="p-3 rounded bg-gray-800">
              <p>📊 Hasil yang terbukti</p>
            </div>
            <div className="p-3 rounded bg-gray-800">
              <p>💰 Jaminan uang kembali 50%</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Bantu Anda Sukses Online</h3>
          <div className="glass p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-gray-300">
              "Kami tidak cuma bikin bisnis, tapi <span className="text-blue-400">mewujudkan impian</span>. 
              Bersama NolanDex, semua orang bisa jualan online dengan mudah, cepat, dan percaya diri, 
              ubah ide jadi <span className="font-bold">sukses nyata</span>."
            </p>
            <p className="mt-4 font-semibold text-blue-400">
              - Tim NolanDex
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
