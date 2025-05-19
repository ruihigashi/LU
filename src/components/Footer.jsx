import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-[url('/home/rui0421/Luana/src/assets/Images/Footer.jpg')] bg-cover bg-center text-white text-sm py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-xl font-semibold tracking-wide mb-10">
          Hair design attrico
        </h2>

        <div className="mx-auto w-fit space-y-6 grid grid-cols-[auto_1fr] gap-x-4 text-left">
          <div className="font-semibold whitespace-nowrap">Address.</div>
          <div className="whitespace-pre-wrap">福岡市博多区博多駅南3-15-28 1F</div>

          <div className="font-semibold whitespace-nowrap">Access.</div>
          <div className="max-w-md whitespace-pre-wrap">
            ■博多駅筑紫口を出て右手へ。竹下通りを直進し【ウィズザスタイル】を通り過ぎ、百年橋通りの宮島交差点を【フォルクス】側に渡り左折します。
            フォルクスから4つ目(右手側)のビル1階です。
            ■お車は近くのコインパーキングにご駐車下さい。お会計時300円キャッシュバックいたします（お会計4000円以上対象）
          </div>

          <div className="font-semibold whitespace-nowrap">Tel.</div>
          <div>
            <a href="tel:0927107189" className="underline text-white hover:text-pink-400">
              092-710-7189
            </a>
          </div>

          <div className="font-semibold whitespace-nowrap">Open.</div>
          <div className="whitespace-pre-wrap">
            【火曜〜土曜】10:00〜20:00（カット最終受付19:30）
            【日曜・祝日】10:00〜19:00（カット最終受付18:30）
          </div>
        </div>

        <div className="mt-12 text-xs text-white/80 text-center">
          サイトポリシー | &copy; Copyright Hair design attrico. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
