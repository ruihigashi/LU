import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-gray-500 tracking-widest mb-1">Hair design</p>
          <h1 className="text-2xl font-luana tracking-widest text-[#333]">
            LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
          </h1>
        </div>

        {/* ナビゲーションと連絡エリア */}
        <div className="flex items-center space-x-6">
          {/* ナビゲーション（PC用） */}
          <nav className="hidden md:flex space-x-4 items-center">
            <a href="#about" className="text-sm hover:text-pink-500">サロンについて</a>
            <a href="#style" className="text-sm hover:text-pink-500">スタイル</a>
            <a href="#staff" className="text-sm hover:text-pink-500">スタッフ</a>
            <a href="#access" className="text-sm hover:text-pink-500">アクセス</a>
            <a href="#reservation" className="text-sm hover:text-pink-500">予約</a>

            {/* 電話番号（PC表示用） */}
            <a
              href="tel:0927107189"
              className="flex items-center text-sm text-gray-700 hover:text-pink-500"
            >
              <FaPhone className="mr-1" />
              092-710-7189
            </a>

            {/* Reserveボタン（任意で表示） */}
            <a
              href="#reservation"
              className="bg-black text-white rounded-full px-4 py-1 text-sm hover:bg-gray-800 transition"
            >
              Reserve
            </a>
          </nav>

          {/* 電話アイコン（スマホ用） */}
          <a
            href="tel:0927107189"
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
