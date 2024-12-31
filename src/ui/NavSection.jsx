import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavSkeleton from "../ui/skeleton/NavSkeleton"; // Import skeleton

import logoImg from '../media/img/logo-sman10.png';

const NavSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-trigger')) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false); // Set loading ke false setelah 2 detik
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
      clearTimeout(timer); // Bersihkan timer saat unmount
    };
  }, [lastScrollY]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      label: "Profil",
      href: "#profil",
      subItems: [
        { label: "Struktur Organisasi", href: "/struktur-organisasi" },
        { label: "Ekstrakulikuler", href: "/ekstrakulikuler" }
      ]
    },
    {
      label: "Galeri",
      href: "#galeri", 
      subItems: [
        { label: "Foto", href: "#foto" },
        { label: "Video", href: "#video" }
      ]
    },
    {
      label: "Info",
      href: "#info",
      subItems: [
        { label: "Berita", href: "/info/berita" },
        { label: "Pengumuman", href: "#pengumuman" },
        { label: "Kontak", href: "#kontak" }
      ]
    },
    {
      label: "Aplikasi",
      href: "#aplikasi",
      subItems: [
        { label: "Ujian Online", href: "#ujian" }
      ]
    },
    {
      label: "Tautan",
      href: "#tautan",
      subItems: [
        { label: "Instagram", href: "#instagram" }
      ]
    }
  ];

  if (loading) {
    return <NavSkeleton />; // Tampilkan skeleton saat loading
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0 shadow-md" : "-translate-y-full"
      } bg-black text-white`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo and School Name */}
        <Link to="/" className="flex items-center space-x-3 text-xl font-semibold tracking-wide hover:text-gray-200 transition-all duration-300 ease-in-out">
          <img src={logoImg} alt="Logo SMAN 10" className="w-12 h-12 object-contain" />
          <p className="text-lg sm:text-2xl font-bold">SMAN 10 Kota Bekasi</p>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(item.label);
                }}
                className={`dropdown-trigger flex items-center hover:text-gray-200 transition-colors cursor-pointer ${
                  activeDropdown === item.label ? "text-gray-200" : ""
                }`}
                aria-expanded={activeDropdown === item.label}
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    activeDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              </a>
              {/* Dropdown */}
              {activeDropdown === item.label && (
                <div className="dropdown-menu absolute top-full left-0 mt-2 min-w-[200px] bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="py-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-white-100 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-800 to-blue-600 lg:hidden">
            <ul className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.label} className="dropdown-trigger">
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(item.label);
                    }}
                    className="flex justify-between items-center cursor-pointer hover:text-blue-200"
                  >
                    {item.label}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeDropdown === item.label && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.href}
                            className="block hover:text-blue-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavSection;
