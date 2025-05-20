import React, { useState } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import IntroText from "./components/IntroText";
import SliderDots from "./components/SliderDots";
import Footer from "./components/Footer";
import Guidance from "./components/Guidance";

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
        <div id="heroslider">
          <HeroSlider
            current={current}
            setCurrent={setCurrent}
            sliderRef={sliderRef}
            scrollToSlide={scrollToSlide}
          />
        </div>

        <SliderDots
          current={current}
          scrollToSlide={scrollToSlide}
        />

        <div id="introtext">
          <IntroText />
        </div>

        <div id="guidance">
          <Guidance />
        </div>
        <Footer />
      </main>
    </div>
  );
}
