import React from "react";

export default function IntroText() {
  return (
    <section
      className="py-12 text-center px-4 bg-[#fdf9f2] bg-[url('https://user0514.cdnw.net/shared/img/thumb/texture201200440_TP_V4.jpg')] bg-repeat bg-center bg-blend-overlay"
    >
      <h2 className="text-3xl font-semibold mb-4">Hair design attrico</h2>
      <p className="text-lg mb-3">癒しを求めるなら attrico へ</p>
      <p className="text-base text-gray-700 mb-2">
        心からリラックスして欲しいという想いで空間づくりにもこだわっているサロンです。
      </p>
      <p className="text-base text-gray-700 mb-2">
        アンティーク調の居心地が良い店内で、ゆっくりとした時間をお過ごしください。
      </p>
      <p className="text-base text-gray-700 font-semibold mt-4">
        【ご予約は24時間可能です】
      </p>

      <div className="mt-8 text-center">
  <p className="text-base text-gray-700 mb-2">LINEでのご予約はこちら</p>
  <img
    src="../assets/Images/line.jpg"
    alt="LINE QRコード"
    className="w-48 mx-auto shadow-lg rounded"
  />
  <p className="text-lg font-semibold mt-2">LINE ID：@your_line_id</p>
  <p className="text-sm text-gray-500">LINEのID検索またはQRコードから追加してください</p>
</div>

            <h2 className="text-3xl font-semibold mb-6">Map</h2>
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
