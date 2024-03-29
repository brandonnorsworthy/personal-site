import React from 'react';
import RSVPForm from './components/RSVPForm';
import Navbar from './components/Navbar';
import { IGroup } from './typescript/interfaces';
import { queryHelper } from '../../db/database';

export const metadata: { title: string, description: string } = {
  title: '[Brandon & Madison]',
  description: 'Homepage for information about Brandon and Madison\'s wedding in 2024! RSVP, Travel, and Registry information.',
}

interface PageProps {
  searchParams: { rsvp: string }
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const group: IGroup = await fetchGroupById(searchParams.rsvp);

  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <section
        className='flex justify-center w-full px-16 py-32 bg-wedding-primary'
        id='rsvp'>
        <RSVPForm groupName={group.name} rsvpCode={searchParams.rsvp} />
      </section>
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <div className='mt-14 h-[65vh] w-full bg-wedding-gray-highlight flex justify-center items-center'>hero img</div>
      </div>
      <div className='h-[65vh] mt-4 w-full bg-wedding-gray-highlight flex justify-center items-center'>map across full width of screen, ocean on bottom (south) colored same as the form background, land is same color as beach color so its a transition and a map</div>
    </main >
  )
}

const fetchGroupById = async (rsvpId) => {
  try {
    return await queryHelper(`SELECT *
    FROM wedding_invites_group
    WHERE id = $1
    LIMIT 1`, [rsvpId], true);
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
}

export default Page;