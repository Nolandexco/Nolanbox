import React from "react";

const Service = () => {
  return (
    <section id="services" className="min-h-screen flex items-center bg-gray-900 text-white opacity-70">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 mt-32">Our Services</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          NolanDex provides comprehensive solutions to launch and grow your online business with ease, speed, and confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🌐 Website Development</h3>
            <p className="text-gray-300">Professional, user-friendly websites tailored to your brand.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🎨 Branding & Design</h3>
            <p className="text-gray-300">Eye-catching logos, graphics, and promotional materials.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🤖 Order & Payment Automation</h3>
            <p className="text-gray-300">Seamless systems to streamline transactions and operations.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📱 Social Media Content</h3>
            <p className="text-gray-300">Engaging content to boost your online presence.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📈 Marketing Strategies</h3>
            <p className="text-gray-300">Targeted campaigns to drive traffic and sales.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🛠️ Business Tools</h3>
            <p className="text-gray-300">Essential tools to manage and scale your business efficiently.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">⚡ Fast Setup</h3>
            <p className="text-gray-300">Launch your business in hours with our streamlined process.</p>
          </div>
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">✅ Growth Guarantee</h3>
            <p className="text-gray-300">50% money-back guarantee if your business doesn’t grow in 30 days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
