import Image from "next/image";
import React from "react";

const Icons = ["observer", "glowstone", "pumpkin", "cryingObsidian", "diamond"];

interface ServerIconProps {
  image?: string;
}

const ServerIcon: React.FC<ServerIconProps> = ({ image }) => {
  let selectedImage = image;

  if (!image) {
    selectedImage = `/images/minecraft/${Icons[Math.floor(Math.random() * Icons.length)]}.png`;
  }

  return (
    <div className="w-24 h-24">
      <Image
        className="object-contain w-full h-full"
        src={selectedImage}
        alt="server icon"
        width={64}
        height={64} />
    </div>
  )
};

export default ServerIcon;