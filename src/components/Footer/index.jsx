import React from "react";

const Footer = () => {
  return (
    <div className="px-32 py-8 flex items-center bg-blue-600 justify-between bg-teal-gray-400 text-4xl text-white">
      <span className="text-2xl">
        Make with ❤️ by <span className="font-bold">Toan Tran Cong</span>
      </span>
      <span className="text-2xl border-[1px] p-2 rounded-xl bg-white text-blue-600 font-bold shadow-xl">
        <span className="text-yellow-500">IT</span> Sáng tạo 2023
      </span>
    </div>
  );
};

export default Footer;
