"use client";

import React from "react";

interface CustomButtonProps {
  primary?: boolean;
  text: string;
  onClickCallback: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClickCallback, primary = true }) => (
  <button className={`h-full py-1 px-4 text-base font-bold align-center rounded-lg border-black border-2
  ${primary ? "bg-black text-white" : ""}`}
    onClick={onClickCallback}>
    {text}
  </button>
);

export default CustomButton;