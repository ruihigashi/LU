import slide1 from "../assets/Images/salon.jpg";
import slide2 from "../assets/Images/salon2.jpg";
import slide3 from "../assets/Images/salon3.jpg";
import slide4 from "../assets/Images/salon4.jpg";

export default function SliderDots({ current, scrollToSlide }) {
  const images = [slide1, slide2, slide3, slide4];

  return (
    <div className="w-full flex justify-center py-6 bg-white">
      <div className="flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
