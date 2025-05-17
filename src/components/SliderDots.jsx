import React from "react";

export default function SliderDots({ images, current, scrollToSlide }) {
  return (
    <div className="w-full flex justify-center py-6 bg-white">
      <div className="flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
