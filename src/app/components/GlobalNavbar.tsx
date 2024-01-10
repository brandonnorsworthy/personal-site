"use client";

import React from "react";
import CustomButton from "./CustomButton/CustomButton";

const GlobalHeader: React.FC = () => {
  return (
    <header className="w-full h-16">
      <nav className="px-5 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex justify-between items-center">
        <span>Brandon&aposs Website</span>
        <div>
          <CustomButton text="Sign Up" onClickCallback={() => { }} />
          <CustomButton text="Login" onClickCallback={() => { }} />
        </div>
      </nav>
    </header>
  )
}

export default GlobalHeader;