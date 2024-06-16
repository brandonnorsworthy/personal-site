'use client';

import React, { useState } from 'react';
import flowerImages from '../../../../public/svg/flowers';
import weddingService from '../../services/wedding';

interface rsvpFormProps {
  groupName: string;
  rsvpCode: string;
  onModalClose: () => void;
  maxNumberOfPeople: number;
}

const RSVPForm: React.FC<rsvpFormProps> = (props) => {
  const { groupName, rsvpCode, onModalClose, maxNumberOfPeople } = props;
  const [coming, setComing] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    for (const element of event.target) {
      if (element.value === '' && element.type !== 'submit') {
        alert('Please fill out all fields.');
        return;
      }
    }

    try {
      weddingService.createRSVP(coming, Number(numberOfPeople), rsvpCode);
    } catch (error) {
      alert('There was an error submitting your RSVP. Please try again later.')
    }

    onModalClose();
  };

  const handleNumberOfPeopleChange = (event) => {
    const inputValue = event.target.value;
    if ((Number(inputValue) >= 0 && Number(inputValue) > maxNumberOfPeople)) return setNumberOfPeople(maxNumberOfPeople);

    if (inputValue === '' || (Number(inputValue) >= 0 && Number(inputValue) <= maxNumberOfPeople)) {
      setNumberOfPeople(inputValue);
    }
  };

  const handleNumberOfPeopleBlur = () => {
    if (Number(numberOfPeople) > maxNumberOfPeople) {
      setNumberOfPeople(maxNumberOfPeople);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className='z-10 w-full bg-white max-w-xl border-wedding-tertiary border-b-4 border-solid h-min md:w-[60%] lg:w-[65%] xl:w-[650px] p-12 flex flex-col items-start'>
        <span className='w-full text-xl font-semibold text-center text-wedding-primary-shadow'>Hello, {groupName}!</span>
        <span className='w-full text-lg font-normal text-center text-wedding-primary-shadow'>Are you planning on coming?</span>
        {/* <input
          title='Your email address.'
          className='w-full p-1 pl-2 mt-5 font-medium border border-t-0 border-b-2 border-x-0 text-wedding-primary-shadow border-b-wedding-primary-highlight-2'
          type='text'
          placeholder='Email'
          id='email-address'
          name='emailAddress' /> */}

        <div className='flex items-center w-full mt-5 font-medium text-wedding-primary-shadow'>
          <fieldset className='flex justify-center w-full'>
            <div className='flex items-center'>
              <input
                className='w-4 h-4 border-none accent-wedding-primary-shadow'
                type='radio'
                id='rsvpYes'
                name='rsvpYesNo'
                value='yes'
                checked={coming}
                onChange={(e) => { setComing(true); setNumberOfPeople(1); }} />
              <label className='ml-2 select-none whitespace-nowrap' htmlFor='rsvpYes'>Yes, I will be there</label>
            </div>
            <div className='flex items-center ml-4'>
              <input
                className='w-4 h-4 border-none accent-wedding-primary-shadow'
                type='radio'
                id='rsvpNo'
                name='rsvpYesNo'
                value='no'
                checked={!coming}
                onChange={(e) => { setComing(false); setNumberOfPeople(0); }} />
              <label className='ml-2 select-none whitespace-nowrap' htmlFor='rsvpNo'>Sorry, I can&#39;t come</label>
            </div>
          </fieldset>
        </div>

        {
          coming &&
          <div className="flex flex-col w-full">
            <label className='w-full mt-5 text-wedding-primary-shadow' htmlFor='number-attending'>RSVP for how many? (Limit {maxNumberOfPeople})</label>
            <input
              title='How many people are attending?'
              className='w-full p-1 pl-2 mt-5 font-medium border-2 text-wedding-primary-shadow border-wedding-tertiary-highlight'
              type='number'
              min={1}
              max={maxNumberOfPeople}
              onChange={handleNumberOfPeopleChange}
              onBlur={handleNumberOfPeopleBlur}
              value={numberOfPeople}
              placeholder={`How many people are attending... limit ${maxNumberOfPeople}`}
              id='number-attending'
              name='numberAttending' />
          </div>
        }

        <div className='flex justify-center w-full mt-8'>
          <button
            className='px-8 py-2 text-lg font-bold text-white bg-wedding-tertiary'
            type='submit'>
            RSVP
          </button>
        </div>
      </form>

      {/* Decorations */}
      <div className='absolute top-0 left-0 hidden w-full h-full md:block bg-wedding-gray-highlight/25'>
        <div className='absolute top-0 w-full bg-wedding-secondary h-[50%]'>
          <div className='flex flex-col justify-center w-full mt-24 text-white'>
            <h2 className='z-10 mt-20 text-6xl font-bold text-center'>KINDLY RESPOND BY JULY, 31</h2>
            <h3 className='z-10 mt-6 text-2xl text-center'>We hope to share this with you</h3>
            <div className='absolute left-0 flex justify-between w-full h-full overflow-hidden top-20'>
              <div className='relative flex-1 flex-grow h-[90%]'>
                <flowerImages.flower32
                  alt='flower'
                  className='absolute select-none h-[70%] top-[25%] fill-wedding-secondary-shadow right-0 scale-x-[-1] -rotate-[35deg]' />
              </div>
              <flowerImages.flower76
                alt='flower'
                className='h-[75%] flex-1 flex-grow scale-110 fill-wedding-secondary-shadow' />
              <div className='relative flex-1 select-none flex-grow h-[90%]'>
                <flowerImages.flower32
                  alt='flower'
                  className='absolute select-none h-[70%] left-0 top-[25%] fill-wedding-secondary-shadow right-0 rotate-[35deg]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RSVPForm;