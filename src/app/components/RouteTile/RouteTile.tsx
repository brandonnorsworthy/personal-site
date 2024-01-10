import Link from "next/link";
import React from "react";

interface RouteTileProps {
  title: string;
  href: string;
  externalLink?: boolean;
  description?: string;
}

const RouteTile: React.FC<RouteTileProps> = ({ title, href, externalLink, description }) => {
  return (
    <div className="w-full p-4 aspect-square">
      <Link
        href={href}
        target={externalLink ? '_blank' : '_self'}>
        <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center transition-colors duration-150 border border-solid aspect-square hover:bg-gray-400 border-sky-500 rounded-2xl">
          <h1 className="text-3xl font-bold text-white drop-shadow-routeTilesTitle font-semi">{title}</h1>
          {
            description &&
            <span className="mt-8 text-base font-semibold text-white md:text-lg xl:text-sm drop-shadow-routeTilesDescription">{description}</span>
          }
        </div>
      </Link>
    </div>
  )
};

export default RouteTile;