import React from "react";

interface CustomButtonProps {
  primary?: boolean;
  text: string;
  onClickCallback: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClickCallback, primary = true }) => (
  <button className={`rounded-lg ${primary ? "bg-black" : "border-2"}`} onClick={onClickCallback}>
    {text}
  </button>
);

export default CustomButton;