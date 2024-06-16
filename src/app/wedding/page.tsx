import React from 'react';
import Navbar from './components/Navbar';
import { Group } from './typescript/interfaces';
import { fetchGroupById, updateScannedStatus } from './db/queries';
import RSVPModal from './components/RSVPModal';
import Image from 'next/image';
import withLayout from '../hocs/withLayout';
import StoryEvents from './components/StoryEvents';
import specialEvents from '../data/specialEventsTimeline';

import weddingImages from '../../../public/images/wedding'
import flowerImages from '../../../public/svg/flowers';

export const metadata: { title: string, description: string } = {
  title: 'Brandon & Madison',
  description: 'Homepage for information about Brandon and Madison\'s wedding in 2024! RSVP, Travel, and Registry information.',
}

interface PageProps {
  searchParams: { rsvp: string },
  responsiveConstraintClasses: string
}

const Page: React.FC<PageProps> = async ({ searchParams, responsiveConstraintClasses }) => {
  const { rsvp: rsvpCode } = searchParams;

  let group: Group;
  if (rsvpCode) {
    group = await fetchGroupById(rsvpCode);
    updateScannedStatus(rsvpCode);
  }

  return (
    <main className='min-h-[100vh] flex flex-col items-center bg-wedding-gray-highlight'>
      {/* Hero */}
      <section className='flex justify-center w-full mb-[25%] bg-wedding-primary-highlight relative'>
        <div className={responsiveConstraintClasses}>
          <Navbar />
          <div className='flex flex-col justify-center w-full mt-24 text-wedding-gray-highlight'>
            <h2 className='z-10 text-4xl font-bold text-center md:text-6xl'>Brandon and Madison</h2>
            <h3 className='z-10 mt-6 text-2xl text-center'>are getting married</h3>
            <div className='absolute left-0 flex justify-between w-full h-full overflow-hidden top-20'>
              <div className='relative flex-1 flex-grow z-20 h-[90%]'>
                <flowerImages.flower28
                  alt='flower'
                  className='absolute select-none h-[70%] top-[35%] fill-wedding-secondary-shadow right-0 rotate-[45deg]' />
              </div>
              <flowerImages.flower93
                alt='flower'
                className='h-[75%] flex-1 flex-grow fill-wedding-secondary-shadow' />
              <div className='relative flex-1 select-none  flex-grow z-20 h-[90%]'>
                <flowerImages.flower28
                  alt='flower'
                  className='absolute select-none h-[70%] fill-wedding-secondary-shadow  top-[15%] left-[-10%] scale-x-[-1] -rotate-[55deg]' />
              </div>
            </div>
            <div className='h-[400px] mt-20 relative'>
              <Image
                src={weddingImages.hero}
                alt='hero img'
                className='absolute top-0 z-0 border-8 border-solid select-none border-wedding-gray-highlight'
                priority={true}
                placeholder='blur' />
            </div>
          </div>
        </div>
      </section>

      {/* Save the Date */}
      <section className={[responsiveConstraintClasses, 'flex flex-col items-center justify-center'].join(" ")}>
        <h1 className='text-4xl font-bold text-wedding-primary md:text-7xl'>26 October 2024</h1>
        <h3 className='mt-3 text-2xl font-bold text-center text-wedding-primary-shadow'>in Houston, Texas</h3>
        <div className="relative w-full mt-20 h-36 md:h-64 md:mt-0">
          <div className='absolute -top-[50%] flex justify-around w-full'>
            <flowerImages.flower15
              alt='hero img'
              className='w-[50%] select-none -rotate-[95deg] fill-wedding-tertiary-highlight' />
            <flowerImages.flower15
              alt='hero img'
              className='w-[50%] select-none rotate-[95deg] scale-x-[-1] fill-wedding-tertiary-highlight' />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className='my-[50px] md:my-[250px] h-[600px] flex justify-center w-full bg-wedding-primary-highlight-2'>
        <div className={[responsiveConstraintClasses, 'relative flex items-center justify-between'].join(" ")}>
          <div className='absolute left-0 flex flex-col items-center justify-end top-10'>
            <div className='max-w-[440px] flex flex-col'>
              <h3 className='mt-10 text-4xl font-bold text-wedding-primary-shadow'>Madison</h3>
              {/* <p className='mt-10 text-wedding-primary-shadow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quaerat fuga cum. Nihil odit repellat ad rem sed magni nostrum nam officiis? Dolorem iure saepe repellendus, quas optio quis.</p> */}
              <Image
                src={weddingImages.focusMadison}
                alt='headshot of madison'
                className='w-full select-none mt-10 border-b-[10px] border-solid border-wedding-tertiary-highlight'
                placeholder='blur' />
            </div>
          </div>
          <div className='absolute right-0 flex flex-col items-center justify-start bottom-10'>
            <div className='max-w-[440px] flex flex-col'>
              <Image
                src={weddingImages.focusBrandon}
                alt='headshot of brandon'
                className='w-full select-none border-b-[10px] border-solid border-wedding-tertiary-highlight'
                placeholder='blur' />
              <h3 className='mt-10 text-4xl font-bold text-wedding-primary-shadow'>Brandon</h3>
              {/* <p className='mt-10 mb-10 text-wedding-primary-shadow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quaerat fuga cum. Nihil odit repellat ad rem sed magni nostrum nam officiis? Dolorem iure saepe repellendus, quas optio quis.</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className={[responsiveConstraintClasses, 'flex flex-col justify-center mb-14 md:mb-28 w-full text-wedding-primary-shadow'].join(" ")}>
        <div className='flex flex-col items-center w-full'>
          <h3 className='text-3xl font-bold md:text-5xl'>TIMELINE</h3>
          <h4 className='mt-2 text-2xl md:text-4xl md:mt-5'>Some of our milestones</h4>
        </div>
        <div className='flex flex-col items-center w-full'>
          {
            specialEvents.map((event, index) => (
              <StoryEvents event={event} key={index} index={index} />
            ))
          }
        </div>
      </section>

      {/* Wedding Program */}
      <section className='flex justify-center w-full bg-wedding-primary-highlight-2 py-28'>
        <div className={[responsiveConstraintClasses, 'flex justify-center w-full flex-col items-center'].join(" ")}>
          <h3 className='text-5xl font-bold'>WEDDING PROGRAM</h3>
          <h4 className='mt-5 text-4xl'>This is what you can expect</h4>
          <div>
            <div className='bg-wedding-primary-highlight2'>ceremony</div>
            <div className='bg-wedding-primary-highlight2'>ceremony</div>
            <div className='bg-wedding-primary-highlight2'>ceremony</div>
            <div className='bg-wedding-primary-highlight2'>ceremony</div>
          </div>
        </div>
      </section>

      {
        group &&
        <RSVPModal group={group} rsvpCode={rsvpCode} />
      }
    </main >
  )
}

export default withLayout(Page);