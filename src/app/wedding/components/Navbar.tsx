'use client';

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMenu = (event) => {
      if (!navRef.current.contains(event.target)) {
        setIsOpen(false)
      };
    };

    if (isOpen) document.addEventListener('click', closeMenu);


    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, [isOpen]);

  return (
    <nav className="flex justify-center w-full h-12">
      {/* mobile */}
      <div className="relative z-[500] flex items-center justify-between w-full md:hidden md:justify-center" ref={navRef}>
        <Link href="/wedding" className="text-2xl font-bold text-white">B & M</Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-[2px] text-lg text-white underline font-bold rounded-lg">
          Menu
        </button>
        {
          isOpen &&
          <ul className="absolute flex flex-col items-start justify-between w-full font-bold bg-white shadow-2xl rounded-xl top-full md:flex-row md:items-center text-wedding-gray-highlight">
            <Link href="/wedding" className="w-full px-4 py-2 underline text-wedding-primary-highlight rounded-t-xl hover:bg-wedding-primary hover:text-white">Home</Link>
            <Link href="/wedding/registry" className="w-full px-4 py-2 underline text-wedding-primary-highlight hover:bg-wedding-primary hover:text-white">Gift Registry</Link>
            <Link href="/wedding/faqs" className="w-full px-4 py-2 underline text-wedding-primary-highlight hover:bg-wedding-primary hover:text-white">FAQs</Link>
            <Link href="/wedding/gallery" className="w-full px-4 py-2 underline text-wedding-primary-highlight rounded-b-xl hover:bg-wedding-primary hover:text-white">Gallery</Link>
          </ul>
        }
      </div>


      {/* desktop */}
      <div className="items-center justify-center hidden w-full md:flex">
        <ul className="flex items-center justify-between w-full font-bold text-wedding-gray-highlight">
          <Link href="/wedding" className="hover:underline">Home</Link>
          <Link href="/wedding/registry" className="hover:underline">Gift Registry</Link>
          <p className="text-2xl">B & M</p>
          <Link href="/wedding/faqs" className="hover:underline">FAQs</Link>
          <Link href="/wedding/gallery" className="hover:underline">Gallery</Link>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;