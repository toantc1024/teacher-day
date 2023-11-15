import React, { Fragment, useState } from "react";
import Hero from "../Hero";
import Letter from "../Letter";
import Card from "../Card";
import ImageSlide from "../ImageSlide";
const Main = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showThankyou, setShowThankyou] = useState(false);
  const [showImageSlide, setShowImageSlide] = useState(false);
  return (
    <div className="overflow-hidden bg-gradient-to-b from-orange-600 to-yellow-400">
      <Hero setShowLetter={(value) => setShowLetter(value)} />{" "}
      <Card setShowImageSlide={(value) => setShowImageSlide(value)} />
      <ImageSlide
        showImageSlide={showImageSlide}
        setShowThankyou={(value) => setShowThankyou(value)}
      />
      <Letter showThankyou={showThankyou} />
    </div>
  );
};

export default Main;
