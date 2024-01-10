"use client";

import React from "react";
import CustomButton from "../CustomButton/CustomButton";

import { Bars3Icon, SunIcon } from "@heroicons/react/24/solid"
import withLayout from "../../hocs/withLayout";
import Link from "next/link";

interface GlobalHeaderProps {
  responsiveConstraintClasses: string;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ responsiveConstraintClasses }) => {
  const authenticated = false;

  return (
    <header className='flex justify-center w-full h-12 bg-gray-500/50'>
      <nav className={[responsiveConstraintClasses, "flex items-center justify-between h-full"].join(" ")}>
        <Link href="/" className="whitespace-nowrap">Brandon&apos;s Website</Link>
        <div className="flex h-full p-2 space-x-4">
          <div className="w-6">
            <SunIcon className="p-1 h-full fill-yellow-500 hover:cursor-pointer hover:bg-black hover:fill-yellow-500 rounded-[50%]" />
          </div>
          <div className="w-6 md:hidden">
            <Bars3Icon className="p-1 h-full hover:cursor-pointer hover:bg-black hover:fill-white rounded-[50%]" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default withLayout(GlobalHeader);