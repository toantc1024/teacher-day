import React from "react";
import { TypeAnimation } from "react-type-animation";
import TextLoop from "../TextLoop/TextLoop";
const Name = () => {
  return (
    <div className=" flex flex-col gap-4 mt-6">
      <div className="text-[3.75rem] md:text-[5rem] font-extrabold   drop-shadow-xl text-gray-800 relative">
        <TypeAnimation
          sequence={[
            1000,
            "...",
            750,
            "What a",
            750,
            "What a ..",
            750,
            "What a nice day..",
            863,
            "What a nice day with Hiep!",
          ]}
          wrapper="span"
          cursor={true}
          speed={20}
        />
      </div>
      <div className="drop-shadow-lg text-[2.5rem] font-extrabold animate-bounce w-10 h-10 rounded-full flex justify-center items-center  p-10 bg-white ">
        <TextLoop>
          <span>😎</span>
          <span>😋</span>
          <span>😴</span>
          <span>😆</span>
          <span>😪</span>
          <span>😁</span>
        </TextLoop>
      </div>
    </div>
  );
};

export default Name;
