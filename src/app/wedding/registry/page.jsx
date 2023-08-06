import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: 'Gift Registry',
  description: 'Here, you can include details about the location, how to get there, parking information, and other logistics.',
}

const Page = () => {
  const registry = "https://www.crateandbarrel.com/gift-registry/madison-minton/r6752612";
  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-start'>
        <span className='mt-12 text-4xl font-bold text-wedding-secondary-shadow'>[Gift Registry]</span>
        <div className="mt-8 w-full flex flex-col items-center justify-center">
          <span>
            We have a registry with Crate&Barrel
          </span>
          <Link
            href={registry}
            target="_blank"
            rel="noopener noreferrer"
            className='text-wedding-primary-shadow underline'>
            click here to view!
          </Link>
        </div>
        <div className="mt-8 p-8 w-full flex justify-center relative">
          <Link
            href={registry}
            target="_blank"
            rel="noopener noreferrer">
            <div className='w-80 h-80 border-solid border-8 border-wedding-secondary-shadow absolute rotate-[17deg] z-20 left-[55%] overflow-hidden '>
              <Image
                src={'/image/CityWalk.png'}
                className='-translate-y-12'
                width={400}
                height={400} />
            </div>
            <div className='w-80 h-80  border-solid border-8 absolute -rotate-[10deg] z-10 right-[45%] flex justify-center items-center overflow-hidden'>
              <Image
                src={'/image/CrateAndBarrel.png'}
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