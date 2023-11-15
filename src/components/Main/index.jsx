import React, { Fragment, useEffect, useRef, useState } from "react";
import Hero from "../Hero";
import Letter from "../Letter";
import Card from "../Card";
import ImageSlide from "../ImageSlide";
const Main = () => {
  const [showLetter, setShowLetter] = useState(false);
  const myRef = useRef();
  const [showThankyou, setShowThankyou] = useState(false);
  const [showImageSlide, setShowImageSlide] = useState(false);
  useEffect(() => {
    var observer1 = new IntersectionObserver(
      function (entries) {
        if (showImageSlide) return;
        if (entries[0].isIntersecting === true) setShowImageSlide(true);
      },
      { threshold: [0] }
    );
    var observer2 = new IntersectionObserver(
      function (entries) {
        if (showThankyou) return;
        if (entries[0].isIntersecting === true) setShowThankyou(true);
      },
      { threshold: [0] }
    );

    observer1.observe(document.querySelector("#image-slide-section"));
    observer2.observe(document.querySelector("#thank-you-section"));
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-orange-600 to-yellow-400">
      <Hero setShowLetter={(value) => setShowLetter(value)} />{" "}
      <Card setShowImageSlide={(value) => setShowImageSlide(value)} />
      <ImageSlide
        ref={myRef}
        showImageSlide={showImageSlide}
        setShowThankyou={(value) => setShowThankyou(value)}
      />
      <Letter showThankyou={showThankyou} />
    </div>
  );
};

export default Main;
