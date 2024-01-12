import React from "react";
import MinecraftLabel from "./MinecraftLabel";

interface MinecraftButtonProps {
  text?: string;
  onClick?: () => void;
}

const MinecraftButton: React.FC<MinecraftButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-3 py-1 text-white rounded-md bg-minecraft-blue'>
      <MinecraftLabel text={text} />
    </button>
  )
};

export default MinecraftButton;