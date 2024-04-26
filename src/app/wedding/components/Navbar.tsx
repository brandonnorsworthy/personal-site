import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center w-full h-16">
      <div className="px-5 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex justify-center items-center">
        <ul className="flex justify-between w-full font-bold text-wedding-gray-highlight">
          <Link href="/wedding" className="text-base">Home</Link>
          <Link href="/wedding/travel" className="ml-4">Travel & Stay</Link>
          <Link href="/wedding/registry" className="ml-4">Gift Registry</Link>
          <p>
            [B & M]
          </p>
          <Link href="/wedding/faqs" className="ml-4">FAQs</Link>
          <Link href="/wedding/gallery" className="ml-4">Gallery</Link>
          <Link href="/wedding/admin" className="ml-4">Admin</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;