import React from "react";
import { FaInstagram } from "react-icons/fa";
import guidance from "../assets/Images/Guidance.jpg"

export default function Guidance() {
    return (
        <section
            className="bg-cover bg-center text-white text-sm py-16 px-4"
            id="guidance"
            style={{ backgroundImage: `url(${guidance})` }}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-3xl font-semibold tracking-wide mb-10 font-luana">
                    LUANA <span className="mx-1">•</span> S <span className="mx-1">•</span> MIRUTO
                </h2>

                <div className="mx-auto w-fit grid gap-y-6 gap-x-4 text-left" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" style={{ display: 'grid', gridTemplateColumns: '100px auto' }}>
                    <div className="font-semibold whitespace-nowrap">Address.</div>
                    <div className="whitespace-pre-wrap">宮崎県都城市一万城15-9</div>
                    <div className="col-span-2"><hr className="my-2 border-white" /></div>

                    <div className="font-semibold whitespace-nowrap">Access.</div>
                    <div className="max-w-md whitespace-pre-wrap">
                        ■最寄りのバス停は【出口団地前】です。
                        バスを降りたら右手の方向へ進んでください。
                        しばらくまっすぐ歩くと、「旬彩馳走亭 満井」というお店の看板が目の前に見えてきます。
                        その看板の少し手前を左に曲がり、そのまま直進すると、左手に「LUANA」の看板が見えてきます。
                        看板のある建物が当店です。どうぞお気をつけてお越しください。
                        <br />
                        ※道に迷われた際は、公式ラインにてご連絡ください。<br />
                        <br />
                        ■駐車場は店舗の敷地内にに1〜2台分ご用意しております。
                    </div>
                    <div className="col-span-2"><hr className="my-2 border-white" /></div>

                    <div className="font-semibold whitespace-nowrap">Tel.</div>
                    <div>
                        <a href="tel:0986668248" className="underline text-white hover:text-pink-400">
                            0986-66-8248
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
                <div className="flex justify-center items-center mt-10">
                    <a
                        href="https://www.instagram.com/your_instagram_id"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-white text-4xl hover:text-blue-300" />
                    </a>
                </div>

            </div>
        </section>
    );
}
