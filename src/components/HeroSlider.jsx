import React, { useEffect } from "react";

export default function HeroSlider({ images, current, setCurrent, sliderRef, scrollToSlide }) {
    useEffect(() => {
        const interval = setInterval(() => {
            scrollToSlide((current + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="w-screen relative overflow-hidden">
            <div
                ref={sliderRef}
                className="flex w-full transition-all duration-500 ease-in-out overflow-hidden scroll-smooth snap-x snap-mandatory"
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`slide-${index}`}
                        className="w-screen h-[400px] object-cover snap-center flex-shrink-0"
                    />
                ))}
            </div>

            {/* Left Arrow */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-2xl text-gray-800 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition"
                onClick={() => scrollToSlide((current - 1 + images.length) % images.length)}
            >
                &#10094;
            </button>

            {/* Right Arrow */}
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-2xl text-gray-800 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition"
                onClick={() => scrollToSlide((current + 1) % images.length)}
            >
                &#10095;
            </button>
        </section>
    );
}
