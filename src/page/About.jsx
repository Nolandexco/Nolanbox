import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 opacity-70 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 mt-32 mb-32">Your Business, Launched with Confidence</h2>
        
        {/* Main Description */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          NolanDex is your all-in-one partner for launching a complete online business. 
          <span className="text-blue-400">#StartFastGrowSmart</span>, we empower entrepreneurs to build, sell, and grow without stress.
        </p>

        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Comprehensive Setup */}
          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all">
            <div className="text-blue-400 text-4xl mb-4">🌐💻</div>
            <h3 className="text-xl font-semibold mb-3">Complete Business Setup</h3>
            <p className="text-gray-300">
              We provide everything you need to start strong with <span className="font-bold">NolanDex</span>:
            </p>
            <ul className="mt-2 text-left list-disc list-inside mx-auto max-w-xs">
              <li>Professional website design and development</li>
              <li>Branding and promotional designs</li>
              <li>Automation for orders and payment systems</li>
            </ul>
          </div>

          {/* Growth Support */}
          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all">
            <div className="text-blue-400 text-4xl mb-4">📈🚀</div>
            <h3 className="text-xl font-semibold mb-3">Marketing & Growth Tools</h3>
            <p className="text-gray-300">
              We equip you with tools and strategies to scale your business effectively:
            </p>
            <ul className="mt-2 text-left list-disc list-inside mx-auto max-w-xs">
              <li>Social media content creation</li>
              <li>Targeted marketing strategies</li>
              <li>Business tools for seamless operations</li>
            </ul>
          </div>
        </div>

        {/* Guarantee & Speed */}
        <div className="glass p-6 rounded-lg mt-12 mx-auto max-w-2xl hover:transform hover:scale-102 transition-all">
          <div className="text-blue-400 text-4xl mb-4">✅💼</div>
          <h3 className="text-xl font-semibold mb-3">Fast Setup, Proven Results</h3>
          <p className="text-gray-300">
            With NolanDex, your business is ready in hours, backed by our commitment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-3 rounded bg-gray-800">
              <p>⚡ Quick setup within hours</p>
            </div>
            <div className="p-3 rounded bg-gray-800">
              <p>📊 Proven results for growth</p>
            </div>
            <div className="p-3 rounded bg-gray-800">
              <p>💰 50% money-back guarantee</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Empowering Your Digital Success</h3>
          <div className="glass p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-gray-300">
              "We’re not just building businesses, but <span className="text-blue-400">empowering visions</span>. 
              With NolanDex, every entrepreneur can go digital with ease, speed, and confidence, 
              turning ideas into <span className="font-bold">thriving realities</span>."
            </p>
            <p className="mt-4 font-semibold text-blue-400">
              - NolanDex Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
