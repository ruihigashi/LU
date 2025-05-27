import slide1 from "../assets/Images/salon.jpg";
import slide2 from "../assets/Images/salon2.jpg";
import slide3 from "../assets/Images/salon3.jpg";
import slide from "../assets/Images/salon1.jpg";

export default function SliderDots({ current, scrollToSlide }) {
  const images = [slide, slide1, slide2, slide3];

  return (
    <div className="w-full flex justify-center py-3 bg-white">
      <div className="flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-1 h-1 rounded-full transition ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
