import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import withLayout from "../../hocs/withLayout";

import cityWalk from "../../../../public/images/CityWalk.png"
import crateAndBarrelLogo from "../../../../public/images/CrateAndBarrel.png"

export const metadata = {
  title: 'Gift Registry',
  description: 'Here, you can include details about the location, how to get there, parking information, and other logistics.',
}

interface PageProps {
  responsiveConstraintClasses: string
}

const Page: React.FC<PageProps> = ({ responsiveConstraintClasses }) => {
  const registry = "https://www.crateandbarrel.com/gift-registry/madison-minton/r6752612";

  return (
    <main className='min-h-[100vh] flex flex-col items-center w-full'>
      <div className="flex justify-center w-full bg-wedding-primary-highlight">
        <div className={responsiveConstraintClasses}>
          <Navbar />
        </div>
      </div>
      <div className={[responsiveConstraintClasses, 'flex flex-col items-start'].join(" ")}>
        <span className='mt-12 text-4xl font-bold text-wedding-secondary-shadow'>Gift Registry</span>
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
            <div className='w-[50vw] h-[50vw] md:w-80 md:h-80 border-solid border-8 border-wedding-secondary-shadow absolute rotate-[17deg] z-20 left-[40vw] md:left-[55%] overflow-hidden '>
              <Image
                src={cityWalk}
                alt='Brandon and Madison infront of downtown houston, texas'
                className='-translate-y-12'
                placeholder='blur'
                width={400}
                height={400} />
            </div>
            <div className='w-[50vw] h-[50vw] md:w-80 md:h-80  border-solid border-8 absolute -rotate-[10deg] z-10 right-[40vw] md:right-[45%] flex justify-center items-center overflow-hidden'>
              <Image
                src={crateAndBarrelLogo}
                alt='crate and barrel logo'
                placeholder='blur'
                width={400}
                height={400} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default withLayout(Page);