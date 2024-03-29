import React from 'react';
import Image from 'next/image';

import CalendarCard from './components/CalendarCard';
import RSVPForm from './components/RSVPForm';
import SCHEDULE from './data/schedule';
import { ScheduledDay } from './types';

export const metadata: { title: string, description: string } = {
  title: '[Brandon & Madison]',
  description: 'Homepage for information about Brandon and Madison\'s wedding in 2024! RSVP, Travel, and Registry information.',
}

interface PageProps {
  searchParams: { rsvp: string }
}

const Page: React.FC<PageProps> = ({ searchParams }) => {
  console.log(searchParams)
  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <p>{searchParams.rsvp}</p>
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <div className='mt-14 h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>hero img</div>
      </div>
      <Image
        src='./svg/schedule-transition.svg'
        className='w-screen mt-16'
        alt='wavy transition to schedule section'
        width={1426}
        height={100} />
      <div className='flex justify-center w-full bg-wedding-secondary'>
        <div className='p-8 w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
          <span className='text-4xl font-bold text-wedding-secondary-highlight'>Celebration Timeline</span>
          <div className='grid grid-cols-2 gap-4 mt-8 md:grid-cols-4'>
            {
              SCHEDULE.map((day: ScheduledDay, index) => {
                return (
                  <CalendarCard day={day} key={index + day.dayOfWeek} />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>map across full width of screen, ocean on bottom (south) colored same as the form background, land is same color as beach color so its a transition and a map</div>
      <section
        className='flex justify-center w-full px-16 py-32 bg-wedding-primary'
        id='rsvp'>
        <RSVPForm/>
      </section>
    </main >
  )
}

export default Page;