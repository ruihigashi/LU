import lineQR from "../assets/Images/line.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import background from "../assets/Images/white.jpg"
import Menu from "../assets/Images/menu.jpg"
import { Link } from "react-router-dom";


export default function IntroText() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const menuData = [
    {
      title: "Cut",
      items: [
        { label: "カット", price: "¥2,750" },
        { label: "カット（中学生・高校生）", price: "¥2,200" },
        { label: "カット（小学生）", price: "¥1,650" },
        { label: "前髪カット", price: "¥550" },
      ],
    },
    {
      title: "Color",
      items: [
        { label: "グレーリタッチ", price: "¥2,750" },
        { label: "カラーリタッチ", price: "¥3,300" },
        { label: "カラーフル（ショート）", price: "¥3,800" },
        { label: "カラーフル（ミディアム）", price: "¥4,300" },
        { label: "カラーフル（ロング）", price: "¥5,300" },
      ],
    },
    {
      title: "Kimono styling",
      items: [
        { label: "着付け（成人）", price: "¥3,300" },
        { label: "着付け（男性）", price: "¥2,750" },
        { label: "着付け（女性）", price: "¥2,200" },
        { label: "袴着付け（女性）", price: "¥2,750" },
        { label: "四身（7歳）", price: "¥2,200" },
        { label: "被布（3歳）", price: "¥2,750" },
        { label: "袴（男の子）", price: "¥2,200" },
      ],
    },
  ];

  return (
    <section
      className="py-12 text-center px-4 bg-repeat bg-center bg-blend-overlay"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-4xl font-semibold mb-8 font-luana text-gray-700">
        LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
      </h2>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" >
        <p className="text-lg mb-8 text-gray-700">癒しを求めるなら LUANA へ</p>
        <p className="text-base text-gray-700 mb-8">
          心からリラックスして欲しいという想いで<br />
          空間づくりにもこだわっているサロンです。
        </p>
        <p className="text-base text-gray-700 mb-8">
          アンティーク調の居心地が良い店内で<br />
          ゆっくりとした時間をお過ごしください。
        </p>
        <p className="text-base text-gray-700 font-semibold">
          【ご予約はこちらのLINEから】
        </p>

        <div className="mt-2 text-center">
          <p className="text-base text-gray-700 mb-2 text-xl">↓　↓　↓</p>
          <a
            href="https://lin.ee/YTdqlsft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            LINEで予約する
          </a>
        </div>
      </div>



      <div className="max-w-5xl mx-auto mt-8" id="menu">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide text-gray-700">
          Menu
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="my-5 border-t-2 border-blue-900 rounded-full" />
      </div>

      <div
        className="max-w-5xl mx-auto my-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="p-6 bg-cover bg-no-repeat bg-center rounded-xl shadow-2xl border border-pink-200 backdrop-blur-sm"
            style={{ backgroundImage: `url(${Menu})` }}
          >
            <div className="mb-10">
              <h4 className="text-xl font-bold text-pink-500 border-b border-pink-300 inline-block mb-8">
                {menu.title}
              </h4>
              <div className="space-y-2 max-w-sm mx-auto">
                {menu.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-lg text-gray-700">
                    <span>{item.label}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex justify-end items-end flex-col text-right">
          <div className="border border-gray-500 px-4 py-2 inline-block">
            <Link
              to="/menu"
              className="text-lg font-semibold font-dancing text-gray-800 hover:text-pink-500 transition"
            >
              Menu More...
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto" id="map">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide text-gray-700">
          Map
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="my-5 border-t-2 border-blue-900 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto rounded overflow-hidden shadow-lg mb-10">
        <iframe
          src="https://www.google.com/maps?q=31.7208788, 131.08945698&hl=ja&z=16&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>


    </section>
  );
}
