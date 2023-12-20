import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Gift Registry',
  description: 'Here, you can include details about the location, how to get there, parking information, and other logistics.',
}

const Page: React.FC = () => {
  const registry = "https://www.crateandbarrel.com/gift-registry/madison-minton/r6752612";

  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-start'>
        <span className='mt-12 text-4xl font-bold text-wedding-secondary-shadow'>[Gift Registry]</span>
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <span>
            We have a registry with Crate&Barrel
          </span>
          <Link
            href={registry}
            target="_blank"
            rel="noopener noreferrer"
            className='underline text-wedding-primary-shadow'>
            click here to view!
          </Link>
        </div>
        <div className="relative flex justify-center w-full p-8 mt-8">
          <Link
            href={registry}
            target="_blank"
            rel="noopener noreferrer">
            <div className='w-80 h-80 border-solid border-8 border-wedding-secondary-shadow absolute rotate-[17deg] z-20 left-[55%] overflow-hidden '>
              <Image
                src={'/image/CityWalk.png'}
                alt='Brandon and Madison infront of downtown houston, texas'
                className='-translate-y-12'
                width={400}
                height={400} />
            </div>
            <div className='w-80 h-80  border-solid border-8 absolute -rotate-[10deg] z-10 right-[45%] flex justify-center items-center overflow-hidden'>
              <Image
                src={'/image/CrateAndBarrel.png'}
                alt='crate and barrel logo'
                width={400}
                height={400} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Page;