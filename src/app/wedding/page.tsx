import React from 'react';
import Navbar from './components/Navbar';
import { IGroup } from './typescript/interfaces';
import { fetchGroupById } from './db/queries';
import RSVPModal from './components/RSVPModal';
import Image from 'next/image';
import withLayout from '../hocs/withLayout';

import hero from '../../../public/images/wedding/hero.jpg';
import fakeArt from '../../../public/images/wedding/fake_art.png';
import focusMadison from '../../../public/images/wedding/focus_madison.png';
import focusBrandon from '../../../public/images/wedding/focus_brandon.png';

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

  let group: IGroup;
  if (rsvpCode) {
    group = await fetchGroupById(rsvpCode);
  }

  return (
    <main className='min-h-[100vh] flex flex-col items-center bg-wedding-gray-highlight'>
      {/* Hero */}
      <section className='flex justify-center w-full mb-[25%] bg-wedding-primary-highlight'>
        <div className={responsiveConstraintClasses}>
          <Navbar />
          <div className='flex flex-col justify-center w-full mt-24 text-wedding-gray-highlight'>
            <h2 className='text-6xl font-bold text-center'>Brandon and Madison</h2>
            <h3 className='mt-6 text-2xl text-center'>are getting married</h3>
            <div className='h-[400px] mt-20 relative'>
              <Image src={hero} alt='hero img' className='absolute top-0 border-8 border-solid border-wedding-gray-highlight' />
            </div>
          </div>
        </div>
      </section>

      {/* Save the Date */}
      <section className={[responsiveConstraintClasses, 'flex flex-col items-center justify-center'].join(" ")}>
        <h1 className='font-bold text-wedding-primary text-7xl'>26 October 2024</h1>
        <h3 className='mt-6 text-2xl font-bold text-center text-wedding-primary-shadow'>in Houston, Texas</h3>
        <Image src={fakeArt} alt='hero img' className='w-[65%] h-40 mt-6' />
      </section>

      {/* About Us */}
      <section className='my-[250px] h-[600px] flex justify-center w-full bg-wedding-primary-highlight-2'>
        <div className={[responsiveConstraintClasses, 'relative flex items-center justify-between'].join(" ")}>
          <div className='absolute left-0 flex flex-col items-center justify-end top-10'>
            <div className='max-w-[440px] flex flex-col'>
              <h3 className='mt-10 text-4xl font-bold text-wedding-primary-shadow'>Madison</h3>
              <p className='mt-10 text-wedding-primary-shadow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quaerat fuga cum. Nihil odit repellat ad rem sed magni nostrum nam officiis? Dolorem iure saepe repellendus, quas optio quis.</p>
              <Image src={focusMadison} alt='headshot of madison' className='w-full mt-10 border-b-[10px] border-solid border-wedding-secondary-highlight' />
            </div>
          </div>
          <div className='absolute right-0 flex flex-col items-center justify-start bottom-10'>
            <div className='max-w-[440px] flex flex-col'>
              <Image src={focusBrandon} alt='headshot of brandon' className='w-full border-b-[10px] border-solid border-wedding-secondary-highlight' />
              <h3 className='mt-10 text-4xl font-bold text-wedding-primary-shadow'>Brandon</h3>
              <p className='mt-10 mb-10 text-wedding-primary-shadow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum quaerat fuga cum. Nihil odit repellat ad rem sed magni nostrum nam officiis? Dolorem iure saepe repellendus, quas optio quis.</p>
            </div>
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