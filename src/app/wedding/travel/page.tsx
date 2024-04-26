import React from "react";
import Navbar from "../components/Navbar";
import withLayout from "../../hocs/withLayout";

export const metadata = {
  title: 'Travel & Stay',
  description: 'Here, you can include details about the location, how to get there, parking information, and other logistics.',
}

interface PageProps {
  responsiveConstraintClasses: string
}

const Page: React.FC<PageProps> = ({ responsiveConstraintClasses }) => {
  return (
    <main className='min-h-[100vh] flex flex-col items-center w-full'>
      <div className="flex justify-center w-full bg-wedding-primary-highlight">
        <div className={responsiveConstraintClasses}>
          <Navbar />
        </div>
      </div>
      <div className={responsiveConstraintClasses}>
        <div className='flex flex-col items-start w-full'>
          <span className='mt-12 text-4xl font-bold text-wedding-secondary-shadow'>Travel & Stay</span>
          <div className='mt-14 h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>animated line on map of the airport to the beach house area (grayscale map with secondary color as the line)</div>
        </div>
        <div className='flex flex-col items-start w-full'>
          <span>&quot;Getting There&quot;: Information about the nearest airports, train stations, bus stations, and driving directions.</span>
          <span>&quot;Local Transport&quot;: Any details on local taxis, car rentals, buses, etc.</span>
          <span>&quot;Beach House Details&quot;: A more detailed overview of the houses, any house-specific guidelines, amenities, and check-in/check-out times.</span>
        </div>
      </div>
    </main>
  )
}

export default withLayout(Page);