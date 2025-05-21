import React, { useEffect, useState } from "react";
import { FaPhone, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* ロゴ */}
          <div
            className="flex flex-col items-center text-center cursor-pointer"
            onClick={() => scrollToSection("heroslider")}
          >
            <p className="text-xs text-gray-500 tracking-widest font-great">Hair Salon</p>
            <h1 className="text-2xl font-luana tracking-widest text-[#333]">
              LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
            </h1>
          </div>

          {/* ナビゲーション + ハンバーガー */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6 items-center">
              <ul className="flex space-x-4 items-center text-sm">
                <li className="cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("introtext")}>サロンについて</li>
                <li className="cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("menu")}>メニュー</li>
                <li className="cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("map")}>マップ</li>
                <li className="cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("guidance")}>インフォメーション</li>
              </ul>
              <a
                href="tel:0927107189"
                className="flex items-center text-sm text-gray-700 hover:text-pink-500"
              >
                <FaPhone className="mr-1" />
                090-2585-6220
              </a>
              <a
                href="https://www.instagram.com/your_instagram_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </nav>

            {/* ハンバーガー（モバイル右配置） */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-gray-800 text-2xl ml-auto"
              aria-label="メニューを開く"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* モバイル用ドロワーメニュー（右） */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black to-indigo-900 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/30">
          <span className="text-lg font-semibold tracking-wide">メニュー</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-6 text-base tracking-wide">
          <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("introtext")}>サロンについて</li>
          <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("menu")}>メニュー</li>
          <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("map")}>マップ</li>
          <li className="cursor-pointer hover:text-pink-400" onClick={() => scrollToSection("guidance")}>インフォメーション</li>
        </ul>
      </div>

      {/* 背景オーバーレイ */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
