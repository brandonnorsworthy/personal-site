import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-wedding-primary flex justify-center">
      <div className="px-5 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex justify-between items-center">
        <div>
          [Brandon & Madison]
        </div>
        <div className="flex items-center">
          <Link href="/wedding" className="text-base underline">Home</Link>
          <Link href="/wedding/travel" className="text-base underline ml-4">Travel & Stay</Link>
          <Link href="/wedding/registry" className="text-base underline ml-4">Gift Registry</Link>
          <Link href="/wedding/faqs" className="text-base underline ml-4">FAQs</Link>
          <div className='invisible lg:visible flex items-center'>
            <Link href="/wedding/gallery" className="text-base underline ml-4">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;