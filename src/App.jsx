import React, { useState } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import IntroText from "./components/IntroText";
import SliderDots from "./components/SliderDots";
import Footer from "./components/Footer";

const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

export default function App() {
  const [current, setCurrent] = useState(0);
  const sliderRef = React.useRef(null);

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const scrollPosition = index * sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setCurrent(index);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-serif overflow-x-hidden">
      <Header />
      <main className="pt-16">
                <HeroSlider
          images={images}
          current={current}
          setCurrent={setCurrent}
          sliderRef={sliderRef}
          scrollToSlide={scrollToSlide}
        />
        <SliderDots
          images={images}
          current={current}
          scrollToSlide={scrollToSlide}
        />
        <IntroText />
      <Footer />
      </main>
    </div>
  );
}
