import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-pink-500 mb-6">サロンについて</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Attricoは、丁寧なカウンセリングと確かな技術で、
          お客様一人ひとりに似合うスタイルを提供する美容室です。
        </p>
      </div>
    </section>
  );
}
