import React from "react";
import lineQR from "../assets/Images/line.jpg"

export default function IntroText() {
  return (
    <section
      className="py-12 text-center px-4 bg-[url('/home/rui0421/Luana/src/assets/Images/white.jpg')] bg-repeat bg-center bg-blend-overlay"
    >
      <h2 className="text-3xl font-semibold mb-8 font-luana">
        LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
      </h2>
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

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl mb-2 text-left font-dancing tracking-wide">
          Map
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="my-5 border-t-2 border-blue-800 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto rounded overflow-hidden shadow-lg">
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
