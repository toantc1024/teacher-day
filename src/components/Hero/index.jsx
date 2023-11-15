import React, { useEffect } from "react";
import "./hero.css";
import TEACHER_EMOJI from "../../static/assets/hero/teacher.svg";
import Name from "../Name/Name";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown } from "react-icons/hi";
const Hero = ({ setShowLetter }) => {
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
    "👨‍💻",
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

  // const emojis = [
  //   "javascript",
  //   "python",
  //   "java",
  //   "csharp",
  //   "php",
  //   "cplusplus",
  //   "typescript",
  //   "ruby",
  //   "swift",
  //   "go",
  //   "dart",
  //   "scala",
  //   "perl",
  //   "lua",
  //   "groovy",
  //   "r",
  //   "julia",
  //   "elixir",
  // ];

  return (
    <div className="border-b-[1px] border-[rgba(255,255,255,.2)] h-screen flex justify-between px-48 items-center relative overflow-hidden">
      <div>
        <div className="flex flex-col gap-4 text-wrap text-6xl font-extrabold w-full text-white flex ">
          <span className="text-6xl">Happy Vietnamese</span>
          <span className="shadow-lg text-yellow-900  bg-[rgba(255,255,255,.4)] w-auto p-3 rounded-2xl border-[2px] border-[rgba(255,255,255,.6)] px-6">
            {">"}
            <TypeAnimation
              sequence={[
                ".",
                950,
                "20/11",
                950,
                "Teachers day",
                1000,
                "Teachers day 🥳!",
                1500,
                () => {
                  document.getElementById("card-section").scrollIntoView({
                    behavior: "smooth",
                  });
                  setShowLetter(true);
                },
              ]}
              wrapper="span"
              cursor={true}
              speed={20}
            />
          </span>
        </div>
      </div>

      <div
        id="circle-orbit-container"
        className="flex items-center justify-center  relative"
      >
        <div
          className="absolute top-[150px] left-0  bg-white w-[400px] h-[400px] rounded-full text-9xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-yellow-900"
          style={{ transform: `translate(-25%, -25%)` }}
        >
          👨‍🏫
        </div>

        <div id="outer-orbit">
          {emojis.map((_, i) => (
            <div
              className="absolute flex items-center justify-center text-3xl transition-all ease-in-out duration-150 hover:w-[80px] hover:h-[80px] cursor-pointer hover:text-4xl top-[50%] left-[50%] w-[70px] h-[70px] rounded-full bg-white p-1 border-[1px] "
              style={{
                transformOrigin: "center",
                transform: `translate(-50%, -50%) rotate(${
                  (i * 360) / emojis.length
                }deg) translate(600px) rotate(${
                  (-i * 360) / emojis.length
                }deg)`,
              }}
            >
              <span className="font-bold translate(-50%, -50%)">{_}</span>
              {/* <img
                className="w-[45px] h-[45px] rotate-[180deg]"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${_}/${_}-original.svg`}
              /> */}
            </div>
          ))}
        </div>
      </div>
      <a
        // scroll to element with id="next"
        className="absolute bottom-0 left-0 p-4 border-[1px] rounded-full m-4 hover:bg-white group text-white text-3xl cursor-pointer outline-none focus:bg-yellow-400"
        // Add smooth scrolling to all links
        // style={{ scrollBehavior: "smooth" }}
        onClick={() => {
          // scroll to element with id="next"
          document.getElementById("thank-you-section").scrollIntoView({
            behavior: "smooth",
          });
          setShowLetter(true);
        }}
      >
        <HiArrowDown className="group-hover:text-yellow-800" />
      </a>
    </div>
  );
};

export default Hero;
