import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-wedding-primary flex justify-center">
      <div className="px-5 h-full w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex justify-between items-center">
        <div>
          <Link href="/">BN x MM Wedding</Link>
        </div>
        <div>
          <Link href="/wedding" className="text-base">Home</Link>
          <Link href="/wedding#rsvp" className="text-base ml-4">RSVP</Link>
          <Link href="/wedding/travel" className="text-base ml-4">Travel</Link>
          <Link href="/wedding/registry" className="text-base ml-4">Registry</Link>
          <Link href="/wedding/expectations" className="text-base ml-4">What to Expect</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;