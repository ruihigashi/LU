import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import IntroText from "./components/IntroText";
import SliderDots from "./components/SliderDots";
import Footer from "./components/Footer";
import Guidance from "./components/Guidance";
import ScrollToTop from "./components/ScrollToTop"; 
import MenuPage from "./MenuPage"; 

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
    <Router>
      <ScrollToTop />
      
      <Header />
      <Routes>
        {/* トップページ */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* メニューページ */}
        <Route path="/menu" element={
          <>
          <MenuPage />
          <Guidance />
          </>
          } />
      </Routes>
    </Router>
  );
}
