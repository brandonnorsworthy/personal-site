import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center w-full h-16 bg-wedding-primary">
      <div className="px-5 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex justify-between items-center">
        <div>
          [Brandon & Madison]
        </div>
        <ul className="flex items-center">
          <Link href="/wedding" className="text-base underline">Home</Link>
          <Link href="/wedding/travel" className="ml-4 text-base underline">Travel & Stay</Link>
          <Link href="/wedding/registry" className="ml-4 text-base underline">Gift Registry</Link>
          <Link href="/wedding/faqs" className="ml-4 text-base underline">FAQs</Link>
          <li className='items-center hidden lg:flex'>
            <Link href="/wedding/gallery" className="ml-4 text-base underline">Gallery</Link>
            <Link href="/wedding/admin" className="ml-4 text-base underline">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;