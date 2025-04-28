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
      Buy
    </a>
    <div className="flex justify-center gap-2 mt-3">
      {["Online Business Setup", "Website", "Join Reseller"].map((pkg) => (
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
  const [activePackage, setActivePackage] = useState("Online Business Setup");

  const infoGridItems = useMemo(
    () => [
      {
        title: "Proven Success Rate",
        description:
          "Most of our users successfully launch their online businesses with NolanDex, backed by real customer success stories",
      },
      {
        title: "Fast Setup",
        description: "Full setup completed within a few working hours — fast, professional, and ready to sell.",
      },
      {
        title: "Risk-Free Guarantee",
        description: "50% money-back guarantee if your business doesn't grow within 30 days.",
      },
    ],
    []
  );

  const pricingPackages = useMemo(
    () => [
      {
        name: "Online Business Setup",
        price: "$20",
        description: "Ideal for individuals or small businesses looking to set up their online presence",
        features: [
          "Full online business setup",
          "Website",
          "Social media booster",
          "Basic chatbot integration",
          "Social media content",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Online%20Business%20Setup%20package.%20Can%20you%20provide%20more%20details?",
      },
      {
        name: "Website",
        price: "$10",
        description: "Perfect for businesses ready to establish a professional website and digital presence",
        features: [
          "E-commerce websites",
          "Portfolio websites",
          "Landing pages",
          "Membership/community websites",
          "Free domain + unlimited hosting",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Website%20package.%20Can%20you%20provide%20more%20details?",
      },
      {
        name: "Join Reseller",
        price: "$0",
        description: "For businesses ready to expand with no upfront cost.",
        features: [
          "Everything in Website",
          "Full support until you get your first customer",
          "Reseller program integration (Free)",
          "Access to exclusive marketing resources and tools",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Join%20Reseller%20package.%20Can%20you%20provide%20more%20details?",
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
            We Create <br />
            <span className="text-gray-400">You Launch and Earn</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Ready to launch your business? With our complete setup service, you can focus on growth while we handle the hard work.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("pricing")}
              className="glass px-8 py-4 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-100 hover:text-black transition"
            >
              Buy
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Clear Pricing, Big Results. Get everything you need, at the right price.
            </p>
            <PricingCard activePkg={activePkg} setActivePackage={setActivePackage} activePackage={activePackage} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
