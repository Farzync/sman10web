import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b bg-black text-white py-8 px-4 md:py-10 lg:px-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* Tentang Kami */}
        <section aria-labelledby="about-us-heading">
          <h2 id="about-us-heading" className="text-xl md:text-2xl font-semibold mb-4">
            Tentang Kami
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            Dahulunya SMAN 10 Kota Bekasi merupakan filial dari SMA Negeri 4 Kota
            Bekasi, kemudian memisahkan diri menjadi sekolah independen dan
            terbentuklah SMAN 10 Kota Bekasi. Pada awalnya kami hanya memiliki
            satu gedung pembelajaran dan tepat di belakang gedung itu merupakan
            rawa, tetapi, setelah beberapa pergantian tahun, kami mulai berbenah
            dan sekarang ini menjadi sekolah yang asri dan memiliki empat gedung
            utama.
          </p>
        </section>

        {/* Website Terkait */}
        <section aria-labelledby="related-sites-heading">
          <h2 id="related-sites-heading" className="text-xl md:text-2xl font-semibold mb-4">
            Website Terkait
          </h2>
          <ul className="space-y-2 text-sm md:text-base list-none pl-0">
            <li>
              <a
                href="https://example.com"
                className="hover:underline hover:text-gray-300 transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                Example 1
              </a>
            </li>
            <li>
              <a
                href="https://example.com"
                className="hover:underline hover:text-gray-300 transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                Example 2
              </a>
            </li>
            <li>
              <a
                href="https://example.com"
                className="hover:underline hover:text-gray-300 transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                Example 3
              </a>
            </li>
          </ul>
        </section>

        {/* Quick Link */}
        <section aria-labelledby="quick-links-heading">
          <h2 id="quick-links-heading" className="text-xl md:text-2xl font-semibold mb-4">
            Quick Link
          </h2>
          <ul className="space-y-2 text-sm md:text-base list-none pl-0">
            <li>
              <a href="/home" className="hover:underline hover:text-gray-300 transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-gray-300 transition-all">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:text-gray-300 transition-all">
                Contact
              </a>
            </li>
          </ul>
        </section>

        {/* Social Media & Contact */}
        <section aria-labelledby="social-media-heading">
          <h2 id="social-media-heading" className="text-xl md:text-2xl font-semibold mb-4">
            Ikuti Kami
          </h2>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-400 transition-colors" size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-400 transition-colors" size={24} />
            </a>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="mt-8 md:mt-10 text-center text-sm md:text-base border-t border-gray-700 pt-5">
        <p className="text-gray-200">
          &copy; {new Date().getFullYear()} All Rights Reserved by SMAN 10 Bekasi.
          Dibuat oleh <span className="font-bold">OPTION 10</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
