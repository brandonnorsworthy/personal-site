import React from 'react';
import Navbar from './components/Navbar';
import { IGroup } from './typescript/interfaces';
import { fetchGroupById } from './db/queries';
import RSVPModal from './components/RSVPModal';

export const metadata: { title: string, description: string } = {
  title: '[Brandon & Madison]',
  description: 'Homepage for information about Brandon and Madison\'s wedding in 2024! RSVP, Travel, and Registry information.',
}

interface PageProps {
  searchParams: { rsvp: string }
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const { rsvp: rsvpCode } = searchParams;

  let group: IGroup;
  if (rsvpCode) {
    group = await fetchGroupById(rsvpCode);
  }

  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      {
        group &&
        <RSVPModal group={group} rsvpCode={rsvpCode} />
      }
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <div className='mt-14 h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>hero img</div>
      </div>
      <div className='h-[65vh] mt-4 w-full bg-wedding-gray-highlight flex justify-center items-center'>map across full width of screen, ocean on bottom (south) colored same as the form background, land is same color as beach color so its a transition and a map</div>
    </main >
  )
}

export default Page;