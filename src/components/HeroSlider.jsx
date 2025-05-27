import React, { useEffect } from "react";

// import 任意の画像
import slide from "../assets/Images/salon1.jpg"
import slide1 from "../assets/Images/salon.jpg";
import slide2 from "../assets/Images/salon2.jpg";
import slide3 from "../assets/Images/salon3.jpg";

export default function HeroSlider({ current, setCurrent, sliderRef, scrollToSlide }) {

  const images = [slide, slide1, slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToSlide((current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
<section className="w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] relative overflow-hidden mt-1">
  <div
    ref={sliderRef}
    className="flex transition-all duration-500 ease-in-out overflow-hidden scroll-smooth snap-x snap-mandatory"
  >
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`slide-${index}`}
        className="min-w-full h-full object-cover object-center snap-center flex-shrink-0 max-w-full"
      />
    ))}
  </div>

  {/* 左矢印 */}
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/60 text-2xl text-gray-800 w-8 h-8 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition"
    onClick={() => scrollToSlide((current - 1 + images.length) % images.length)}
  >
    &#10094;
  </button>

  {/* 右矢印 */}
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/60 text-2xl text-gray-800 w-8 h-8 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition"
    onClick={() => scrollToSlide((current + 1) % images.length)}
  >
    &#10095;
  </button>
</section>


  );
}
