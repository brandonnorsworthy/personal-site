import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-center">
      <div className="flex bg-black h-32 w-full overflow-hidden flex-col items-center justify-center p-5">
        <Image
          src="/images/ComingSoon.jpg"
          alt="Coming Soon"
          className='w-full'
          width={100}
          height={100}
          priority
        />
        <div className="absolute bg-white rounded-md p-5">
          <h1 className="text-black text-4xl font-bold">Under Construction</h1>
          <p className="text-black text-2xl">Check back soon!</p>
        </div>
      </div>
    </main>
  )
}
