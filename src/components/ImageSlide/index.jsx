import React, { Fragment } from "react";
import "./slide.css";
import { HiArrowDown } from "react-icons/hi";
const ImageSlide = ({ showImageSlide, setShowThankyou }) => {
  let emojis = [
    "🧑‍🏫",
    "👩‍🏫",
    "🏫",
    "🎒",
    "📚",
    "🧬",
    "🖊️",
    "📝",
    "🖍️",
    "📖",
    "🔬",
    "👩‍⚕️",
    "📙",
    "💯",
    "📏",
    "📐",
    "🧑‍🏫",
    "👩‍🏫",
    "🏫",
    "🎒",
    "📚",
    "🧬",
    "🖊️",
    "📝",
    "🖍️",
    "📖",
    "🔬",
    "👨‍💻",
    "📙",
    "💯",
    "📏",
    "📐",
  ];
  return (
    <div
      id="image-slide-section"
      className="h-screen overflow-hidden flex items-center justify-between px-32 relative"
    >
      {showImageSlide && (
        <Fragment>
          <div className="transition-all ease-in-out duration-150 absolute border-[1px] w-[500px] h-[500px] bg-[rgba(255,255,255,.2)] rounded-full gallery_item bottom-0 left-0 "></div>{" "}
          <div className="absolute border-[1px] w-[400px] h-[400px] bg-[rgba(255,255,255,.2)] rounded-full gallery_item bottom-0 left-0"></div>
          <span className="text-6xl font-extrabold bg-[rgba(255,255,255,.8)] backdrop-blur-lg border-[2px] border-[1px] border-white text-yellow-900 p-4 rounded-lg relative gallery_item shadow-2xl">
            <p className="font-light italic">
              It takes <strong>big heart</strong> to shape little mind.
            </p>
            <span className="text-3xl">- Unknown</span>
          </span>
          <div class="gallery">
            <div class="gallery_line">
              {[...new Array(8)].map((_, i) => (
                <img src={require(`./stocks/${i + 1}.png`)} />
              ))}
            </div>
            <div class="gallery_line">
              {[...new Array(8)].map((_, i) => (
                <img src={require(`./stocks/${i + 1}.png`)} />
              ))}
            </div>
            <div class="gallery_line">
              {[...new Array(8)].map((_, i) => (
                <img src={require(`./stocks/${i + 1}.png`)} />
              ))}
            </div>
          </div>
          <a
            // scroll to element with id="next"
            className={`absolute bottom-0 left-0 p-4 border-[1px] rounded-full m-4 hover:bg-white group text-white text-3xl cursor-pointer outline-none focus:bg-yellow-400 ${
              true ? "" : "hidden"
            }`}
            // Add smooth scrolling to all links
            // style={{ scrollBehavior: "smooth" }}
            onClick={() => {
              // scroll to element with id="next"
              document.getElementById("thank-you-section").scrollIntoView({
                behavior: "smooth",
              });
              setShowThankyou(true);
            }}
          >
            <HiArrowDown className="group-hover:text-yellow-800" />
          </a>
        </Fragment>
      )}
    </div>
  );
};
export default ImageSlide;
