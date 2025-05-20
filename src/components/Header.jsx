import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        top: element.offsetTop - 80, // ヘッダー分オフセット
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="flex flex-col items-center text-center" onClick={() => scrollToSection("heroslider")}>
          <p className="text-xs text-gray-500 tracking-widest font-great">Hair Salon</p>
          <h1 className="text-2xl font-luana tracking-widest text-[#333]">
            LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
          </h1>
        </div>



        {/* ナビゲーションと連絡エリア */}
        <div className="flex items-center">
          {/* ナビゲーション（PC用） */}
          <nav className="hidden md:flex space-x-6 items-center">
            <ul className="hidden md:flex space-x-4 items-center text-sm">
              <li className="text-sm cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("introtext")}>サロンについて</li>
              <li className="text-sm cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("menu")}>メニュー</li>
              <li className="text-sm cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("map")}>マップ</li>
              <li className="text-sm cursor-pointer hover:text-pink-500" onClick={() => scrollToSection("guidance")}>インフォメーション</li>
            </ul>

            {/* 電話番号（PC表示用） */}
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

          {/* 電話アイコン（スマホ用） */}
          <a
            href="tel:09025856220"
            className="md:hidden text-gray-700 hover:text-pink-500"
            aria-label="電話をかける"
          >
            <FaPhone className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
