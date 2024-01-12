import React from "react";
import '../../../styles/minecraftFont.css';

interface MinecraftLabelProps {
  text: string;
  customClassNames?: string;
}

const MinecraftLabel: React.FC<MinecraftLabelProps> = ({ text, customClassNames }) => {
  return (
    <span className={`text-white text-start select-none minecraftFont ${customClassNames}`}>
      {text}
    </span>
  )
};

export default MinecraftLabel;