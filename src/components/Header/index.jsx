import React, { useEffect, useState } from "react";
import SCHOOL_LOGO_GROUP from "../../static/assets/logo/logo-group-itute/LOGO_GROUP_50.png";

const Header = () => {
  return (
    <div
      className={`z-10 w-full flex items-center justify-center p-2 absolute `}
    >
      <div className="border-[1px] p-4 bg-[rgba(255,255,255,.4)] rounded-[2rem]  top-0">
        <img
          src={SCHOOL_LOGO_GROUP}
          className="h-[60px] bg-white p-2 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Header;
