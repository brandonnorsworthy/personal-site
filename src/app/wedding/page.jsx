import CalendarCard from './components/CalendarCard';
import Navbar from './components/Navbar'
import Image from 'next/image';
import SCHEDULE from './data/schedule';
import RSVPForm from './components/RSVPForm';

export const metadata = {
  title: 'BN x MM Wedding',
  description: 'Homepage for information about Brandon and Madison\'s wedding in 2024! RSVP, Travel, and Registry information.',
}

const Page = () => {

  return (
    <main className='flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <div className='mt-14 h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>hero img</div>
      </div>
      <Image
        src='./svg/schedule-transition.svg'
        className='w-screen mt-16'
        alt='wavy transition to schedule section'
        width={1426}
        height={100} />
      <div className='w-full bg-wedding-secondary flex justify-center'>
        <div className='p-8 w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
          <span className='text-wedding-secondary-highlight font-bold text-4xl'>Celebration Timeline</span>
          <div className='mt-8 grid grid-cols-4 gap-4'>
            {
              SCHEDULE.map((day, index) => {
                return (
                  <CalendarCard day={day} key={index + day.day} />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>map across full width of screen, ocean on bottom (south) colored same as the form background, land is same color as beach color so its a transition and a map</div>
      <section
        className='w-full py-32 px-16 bg-wedding-primary flex justify-center'
        id='rsvp'>
        <RSVPForm />
      </section>
    </main >
  )
}

export default Page;