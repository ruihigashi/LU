import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import backgroundImage from "./assets/Images/white.jpg";

export default function MenuSection() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const menuData = [
        {
            title: "Cut",
            items: [
                { name: "カット", price: "¥2,750", desc: "全体のヘアカット。スタイルチェンジや整えに。\n※シャンプー&ブロー込み" },
                { name: "カット（中学生・高校生）", price: "¥2,200", desc: "全体のヘアカット。スタイルチェンジや整えに。\n※シャンプー&ブロー込み" },
                { name: "カット（小学生）", price: "¥1,650", desc: "全体のヘアカット。スタイルチェンジや整えに。\n※シャンプー&ブロー込み" },
                { name: "前髪カット", price: "¥550", desc: "前髪のみのカット。お手軽メンテナンスにおすすめ。" },
            ],
        },
        {
            title: "Color",
            items: [
                { name: "グレーリタッチ", price: "¥2,750", desc: "白髪部分のみを自然にカラーリング。\n※シャンプー&ブロー込み" },
                { name: "カラーリタッチ", price: "¥3,300", desc: "根元のカラーを整え、色をキープ。\n※シャンプー&ブロー込み" },
                { name: "グレイカラーフル（ショート）", price: "¥3,250", desc: "ショートヘアの白髪染め全体カラー。\n※シャンプー&ブロー込み" },
                { name: "カラーフル（ショート）", price: "¥3,800", desc: "ショートヘア全体のカラーリング。\n※シャンプー&ブロー込み" },
                { name: "グレイカラーフル（ミディアム）", price: "¥3,750", desc: "ミディアムヘアの白髪染め全体カラー。\n※シャンプー&ブロー込み" },
                { name: "カラーフル（ミディアム）", price: "¥4,300", desc: "ミディアムヘア全体のカラーリング。\n※シャンプー&ブロー込み" },
                { name: "グレイカラーフル（ロング）", price: "¥4,750", desc: "ロングヘアの白髪染め全体カラー。\n※シャンプー&ブロー込み" },
                { name: "カラーフル（ロング）", price: "¥5,300", desc: "ロングヘア全体のカラーリング。\n※シャンプー&ブロー込み" },
            ],
        },
        {
            title: "Perm",
            items: [
                { name: "パーマ", price: "¥6,600", desc: "ナチュラルなパーマスタイルに。" },

            ],
        },
        {
            title: "Straight",
            items: [
                { name: "ストレートパーマ", price: "¥11,000", desc: "髪のうねりを整え、まっすぐな仕上がりに。" },
            ],
        },
        {
            title: "Hair Care",
            items: [
                { name: "シャンプー＆ブロー", price: "¥1,650", desc: "洗髪後、ブローで美しく仕上げます。" },
                { name: (<><span className="text-[13px]">シャンプー ＆ ブロー ＆ トリートメント</span></>), price: "¥2,150", desc: "補修ケア＋スタイリングで美髪に。" },
            ],
        },
        {
            title: "Head spa",
            items: [
                { name: "ヘッドスパ（20分）", price: "¥2,200", desc: "短時間でリフレッシュできる頭皮ケア。" },
                { name: "ヘッドスパ（60分）", price: "¥5,500", desc: "頭皮をじっくりケアするリラクゼーションスパ。\n★カウンセリング 30分（初回のみ）" },
                { name: (<><span className="text-[15px]">ヘッドスパ（20分）＆ シャンプー</span></>), price: "¥4,400", desc: "クイックスパと洗髪のセット。" },
                { name: (<><span className="text-[15px]">ヘッドスパ（60分）＆ シャンプー</span></>), price: "¥7,700", desc: "頭皮ケア＋シャンプーで爽快仕上げ。\n★カウンセリング 30分（初回のみ）" },
            ],
        },
        {
            title: "Kimono styling",
            items: [
                { name: "着付け（成人）", price: "¥8,800", desc: "一生に一度の晴れ舞台にふさわしい、成人着付け。\n日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
                { name: "着付け（男性）", price: "¥5,500", desc: "夏祭りや花火大会にぴったりな、浴衣着付け。\n日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
                { name: "着付け（女性）", price: "¥6,600", desc: "帯結びまで美しく仕上げる、浴衣着付け。\n日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
                { name: "袴着付け", price: "¥5,500", desc: "式典にぴったりな袴の着付け。\n日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
                { name: (<><span className="inline-block ml-2">四身（7歳）</span><br />【ヘア・メイク・着付け込み】</>), price: (<><span className="inline-block mt-[24px]">¥8,800</span></>), desc: "七五三の7歳用着付け。\n日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
                { name: (<><span className="inline-block ml-2">被衣（3歳）</span><br />【ヘア・メイク・着付け込み】</>), price: (<><span className="inline-block mt-[24px]">¥7,700</span></>), desc: "七五三の3歳用の被布着付け。\n日本髪：+¥2,200\n3才メイク：+¥1,650\n※早朝料金（午前9時前からの方）： +¥2,200" },
                { name: (<><span className="inline-block ml-2">袴（男の子）</span><br />【セット・着付け込み】</>), price: (<><span className="inline-block mt-[24px]">¥5,500</span></>), desc: "七五三や卒園式向けの男児袴着付け。\n日本髪：+¥2,200\n※早朝料金（午前9時前からの方）: +¥2,200" },
            ],
        },
    ];

    return (
        <section
            className="min-h-screen bg-repeat bg-center bg-fixed bg-no-repeat bg-cover py-20 px-6 md:px-12"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="max-w-4xl mx-auto text-gray-800">
                <h2 className="text-4xl font-dancing font-semibold text-center mt-12 mb-16">Menu</h2>
                {menuData.map((section, index) => (
                    <div key={index} className={`mb-4 ${openSection === index ? '' : 'border-b border-gray-400'}`}>
                        <div
                            className="flex justify-between items-center cursor-pointer py-6"
                            onClick={() => toggleSection(index)}
                        >
                            <h3 className="text-xl font-serif font-medium">{section.title}</h3>
                            {openSection === index ? (
                                <FaChevronUp className="text-gray-600" />
                            ) : (
                                <FaChevronDown className="text-gray-600" />
                            )}
                        </div>

                        <div
                            className={`transition-all duration-700 ease-in-out overflow-hidden 
                ${openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 pb-10 px-6">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="flex flex-col justify-between min-h-[110px] space-y-2 mt-2">
                                        <div>
                                            <div className="flex justify-between gap-6">
                                                <span className="font-medium whitespace-nowrap font-serifjp">{item.name}</span>
                                                <span className="text-gray-700 whitespace-nowrap font-serifjp">{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 whitespace-pre-line text-xs font-serifjp mt-4">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <hr className="border-gray-400" />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

