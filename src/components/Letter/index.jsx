import React, { Fragment, useState } from "react";
import SCHOOL_LOGO_GROUP from "../../static/assets/logo/logo-group-itute/LOGO_GROUP_50.png";
import { TypeAnimation } from "react-type-animation";
import TextLoop from "../TextLoop/TextLoop";
const Letter = ({ showThankyou }) => {
  const fx = (x) => {
    return (-1 / 2500) * x * x + (1 / 25) * x;
  };
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
      id="thank-you-section"
      className={`w-full overflow-hidden h-screen relative flex items-center justify-center  border-t-[1px] border-[rgba(255,255,255,.2)]`}
    >
      {showThankyou && (
        <Fragment>
          <span className="p-2 text-yellow-800 bg-white shadow-lg rounded-xl font-bold z-[100] absolute  text-9xl shadow-2xl font-extrabold bg-white text-8xl">
            <TypeAnimation sequence={[500, "Thank", 400, "Thank you ^^"]} />
          </span>
          {
            <div
              className="flex flex-wrap items-center justify-center gap-4 "
              style={{ transform: "rotate3d(-1,1,1, 45deg)" }}
            >
              {[...new Array(112)].map((_, i) => (
                <span
                  className={`flex items-center justify-center text-6xl w-[100px] h-[100px] bg-white rounded-xl shadow-2xl transition-all ease-in-out duration-500 `}
                  style={{
                    opacity: i % 2 == 0 ? 0 : fx(i),
                    transform:
                      i % 3 == 0
                        ? "scale(0.9)"
                        : i % 5 == 0
                        ? "scale(1.1)"
                        : "scale(1)",
                  }}
                >
                  <span className="">{emojis[i % emojis.length]}</span>
                </span>
              ))}
            </div>
          }
        </Fragment>
      )}
    </div>
  );
};

export default Letter;
