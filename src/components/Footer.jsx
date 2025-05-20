import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-[url('/home/rui0421/Luana/src/assets/Images/p0520_l.jpg')] bg-cover bg-center text-white text-sm py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-semibold tracking-wide mb-10 font-luana">
          LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
        </h2>

        <div className="mx-auto w-fit grid gap-y-6 gap-x-4 text-left" style={{ display: 'grid', gridTemplateColumns: '100px auto' }}>
          <div className="font-semibold whitespace-nowrap">Address.</div>
          <div className="whitespace-pre-wrap">宮崎県都城市一万城15-9</div>
          <div className="col-span-2"><hr className="my-2 border-white" /></div>

          <div className="font-semibold whitespace-nowrap">Access.</div>
          <div className="max-w-md whitespace-pre-wrap">
            ■博多駅筑紫口を出て右手へ。竹下通りを直進し【ウィズザスタイル】を通り過ぎ、百年橋通りの宮島交差点を【フォルクス】側に渡り左折します。
            フォルクスから4つ目(右手側)のビル1階です。
            ■お車は近くのコインパーキングにご駐車下さい。お会計時300円キャッシュバックいたします（お会計4000円以上対象）
          </div>
          <div className="col-span-2"><hr className="my-2 border-white" /></div>

          <div className="font-semibold whitespace-nowrap">Tel.</div>
          <div>
            <a href="tel:09025856220" className="underline text-white hover:text-pink-400">
              090-2585-6220
            </a>
          </div>
          <div className="col-span-2"><hr className="my-2 border-white" /></div>

          <div className="font-semibold whitespace-nowrap">Open.</div>
          <div className="whitespace-pre-wrap">
            【完全予約制】<br />
            10:00〜18:00（カット最終受付17:30）<br />
            ※その他の時間は要相談可
          </div>
          <div className="col-span-2"><hr className="my-2 border-white" /></div>

          <div className="font-semibold whitespace-nowrap">payment.</div>
          <div className="whitespace-pre-wrap">
            現金のみ
          </div>
        </div>

        <div className="mt-12 text-xs text-white/80 text-center">
          サイトポリシー | &copy; Copyright LUANA・S・MIRUTO All rights reserved.
        </div>
      </div>
    </footer>
  );
} 
