import Link from "next/link";
import React from "react";

interface RouteTileProps {
  title: string;
  href: string;
  externalLink?: boolean;
  description?: string;
  model?: string;
  disable?: boolean;
}

const RouteTile: React.FC<RouteTileProps> = ({ title, href, externalLink, description, model, disable }) => {
  return (
    <div className="w-full py-2 first:pt-0 last:pb-0 md:first:pt-0 md:last:pb-0 md:py-0 aspect-square" data-model={model}>
      {
        disable ?
          <div className="cursor-not-allowed">
            <div className="flex flex-col items-center justify-start w-full h-full p-4 overflow-hidden text-center transition-colors duration-150 border-2 border-solid rounded-lg md:p-4 aspect-square hover:bg-red-500/20 border-sky-500 md:rounded-2xl">
              <div className="h-[50%] flex items-end pb-4">
                <h1 className="text-5xl font-bold text-white select-none drop-shadow-routeTilesTitle font-semi">{title}</h1>
              </div>
              {
                description &&
                <span className="text-base h-[50%] font-semibold select-none text-white md:text-lg xl:text-sm drop-shadow-routeTilesDescription">{description}</span>
              }
            </div>
          </div>
          :
          <Link
            href={href}
            target={externalLink ? '_blank' : '_self'}>
            <div className="flex flex-col items-center justify-start w-full h-full p-4 overflow-hidden text-center transition-colors duration-150 border-2 border-solid rounded-lg md:p-4 aspect-square hover:bg-blue-500/20 border-sky-500 md:rounded-2xl">
              <div className="h-[50%] flex items-end pb-4">
                <h1 className="text-5xl font-bold text-white select-none drop-shadow-routeTilesTitle font-semi">{title}</h1>
              </div>
              {
                description &&
                <span className="text-base select-none h-[50%] font-semibold text-white md:text-lg xl:text-sm drop-shadow-routeTilesDescription">{description}</span>
              }
            </div>
          </Link>
      }
    </div>
  )
};

export default RouteTile;