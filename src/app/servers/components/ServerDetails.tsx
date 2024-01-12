import React from "react";
import ServerIcon from "./ServerIcon";
import MinecraftLabel from "./MinecraftLabel";

interface ServerDetailsProps {
  name: string;
  description: string;
  status: string;
  customClassNames?: string;
  image?: string;
  players?: string;
}

const ServerDetails: React.FC<ServerDetailsProps> = ({ image, name, description, customClassNames, players, status }) => {
  let active = Math.random() <= 0.5;

  return (
    <div className={`flex items-center w-full border-2 h-28 border-solid hover:cursor-pointer hover:bg-black/50 hover:border-gray-400/50 ${active ? 'border-gray-400 bg-black/75' : 'border-white/0 '} ${customClassNames}`}>
      <div className="flex items-center p-2">
        <ServerIcon image={image} />
      </div>

      <div className="flex flex-col items-start justify-start w-full h-full py-4 overflow-hidden">
        <MinecraftLabel
          text={name}
          customClassNames="text-lg whitespace-nowrap" />
        <MinecraftLabel
          text={description}
          customClassNames="text-md" />
      </div>

      <div className="flex items-start justify-center h-full p-4">
        {
          status === "Online" ?
            <MinecraftLabel
              text={players}
              customClassNames="text-lg" />
            :
            <MinecraftLabel
              text={status}
              customClassNames="text-lg" />
        }
      </div>
    </div>
  );
};

export default ServerDetails;