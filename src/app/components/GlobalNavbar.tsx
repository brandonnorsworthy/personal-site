import Link from "next/link";
import globalLinks from "../data/globalLinks";
import React from "react";

const GlobalNavbar: React.FC = () => {
  return (
    <nav className="flex justify-center w-full h-16 bg-global-secondary">
      <div className="px-5 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex justify-between items-center">
        <div>
          Brandon Norsworthy
        </div>
        <ul className="flex items-center">
          {
            globalLinks.map((link, i) => {
              if (link?.override !== true) {
                if (Object.keys(link).includes('coming')) return null;
              }

              return i === 0 ?
                <Link href={link.url} key={link.name + i} className="text-base underline">{link.name}</Link>
                : <Link href={link.url} key={link.name + i} className="ml-4 text-base underline">{link.name}</Link>
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default GlobalNavbar;