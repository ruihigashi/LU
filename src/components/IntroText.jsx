import lineQR from "../assets/Images/line.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function IntroText() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      className="py-12 text-center px-4 bg-[url('/rui0421/Luana/src/assets/Images/white.jpg')] bg-repeat bg-center bg-blend-overlay"
    >
      <h2 className="text-3xl font-semibold mb-8 font-luana">
        LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
      </h2>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" >
        <p className="text-lg mb-8">癒しを求めるなら LUANA へ</p>
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
          <img
            src={lineQR}
            alt="LINE QRコード"
            className="w-48 mx-auto shadow-lg rounded"
          />
          <p className="text-lg font-semibold mt-2">LINE ID：miruto12</p>
          <p className="text-sm text-gray-500">LINEのID検索またはQRコードから追加してください</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8" id="menu">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide">
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
        {/* 各メニューカード（Set menu, Cut, Color） */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="p-6 bg-[url('/menu.jpg')] bg-cover bg-no-repeat bg-center rounded-xl shadow-2xl border border-pink-200 backdrop-blur-sm"
          >
            <div className="mb-10">
              <h4 className="text-xl font-bold text-pink-500 border-b border-pink-300 inline-block mb-8">
                {["Set menu", "Cut", "Color"][i]}
              </h4>
              <div className="space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between text-lg text-gray-700">
                  <span>30分コース</span>
                  <span>{["10,000円", "5,000円", "5,000円"][i]}</span>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <span>60分コース</span>
                  <span>{["18,000円", "8,000円", "8,000円"][i]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">
        何か気になる点などございましたらお気軽にご相談ください。
      </p>

      <div className="max-w-5xl mx-auto" id="map">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide">
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
