import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Travel & Stay',
  description: 'Here, you can include details about the location, how to get there, parking information, and other logistics.',
}

const Page = () => {
  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <div className='mt-14 h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>animated line on map of the airport to the beach house area (grayscale map with secondary color as the line)</div>
      </div>
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-start'>
        <span>&quot;Getting There&quot;: Information about the nearest airports, train stations, bus stations, and driving directions.</span>
        <span>&quot;Local Transport&quot;: Any details on local taxis, car rentals, buses, etc.</span>
        <span>&quot;Beach House Details&quot;: A more detailed overview of the houses, any house-specific guidelines, amenities, and check-in/check-out times.</span>
      </div>
    </main>
  )
}

export default Page;