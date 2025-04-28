import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-12">
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="glass p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">📧 Email Us</h3>
          <p className="text-gray-300">
            Reach us at{" "}
            <a
              href="mailto:nolandexco@gmail.com"
              className="text-blue-400 hover:underline"
            >
              nolandexco@gmail.com
            </a>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="glass p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">📲 WhatsApp Us</h3>
          <p className="text-gray-300">
            Chat with us on{" "}
            <a
              href="https://wa.me/6285156779923"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="glass p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">💬 Follow Us</h3>
          <div className="flex justify-center gap-4 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-pink-400"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-black"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com/nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            
            {/* Twitter/X */}
            <a
              href="https://x.com/nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Telegram */}
            <a
              href="https://t.me/Nolandex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-400"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.085.203-.168.307-.247a.69.69 0 01.707-.013c.24.092.403.234.495.426.092.193.103.416.033.627l-2.02 8.085c-.07.28-.253.504-.518.606a.74.74 0 01-.73-.098l-2.61-1.914-1.586 1.514a.74.74 0 01-.59.273.74.74 0 01-.704-.518l-2.743-9.117c-.095-.31-.026-.65.184-.885a.74.74 0 01.885-.185l10.39 4.01c.288.11.48.37.495.65a.74.74 0 01-.346.617l-3.24 2.208 1.586 1.514 2-8.085z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="mt-12 max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg mb-24">
        <h3 className="text-xl font-semibold mb-4">📩 Send a Message</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md outline-none"
          rows="5"
        ></textarea>
        <button className="glass px-6 py-3 font-semibold hover:bg-blue-500 transition rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
