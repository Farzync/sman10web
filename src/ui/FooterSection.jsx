import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gradient-to-b from-sky-100 to-indigo-300 text-stone-800 py-10 p-14">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tentang Kami */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tentang Kami</h2>
            <p className="text-sm">
              Dahulunya SMAN 10 Kota Bekasi merupakan filial dari SMA Negeri 4 Kota Bekasi, kemudian memisahkan diri menjadi sekolah independen dan terbentuklah SMAN 10 Kota Bekasi. Pada awalnya kami hanya memiliki satu gedung pembelajaran dan tepat di belakang gedung itu merupakan rawa, tetapi, setelah beberapa pergantian tahun, kami mulai berbenah dan sekarang ini menjadi sekolah yang asri dan memiliki empat gedung utama.
            </p>
          </div>
  
          {/* Website Terkait */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Website Terkait</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://example.com" className="hover:underline">Example 1</a>
              </li>
              <li>
                <a href="https://example.com" className="hover:underline">Example 2</a>
              </li>
              <li>
                <a href="https://example.com" className="hover:underline">Example 3</a>
              </li>
            </ul>
          </div>
  
          {/* Quick Link */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Social Media & Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Ikuti Kami</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-500 hover:text-blue-700" size={24} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-700" size={24} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-5 text-white-100">
          <p>&copy; 2024 All Rights Reserved by SMAN 10 Bekasi. Dibuat oleh <span className="font-bold">OPTION 10</span>.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;