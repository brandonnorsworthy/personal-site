'use client';

import React from 'react';

interface rsvpFormProps {
  groupName: string;
  rsvpCode: string;
  onModalClose: () => void;
}

const RSVPForm: React.FC<rsvpFormProps> = (props) => {
  const { groupName, rsvpCode, onModalClose } = props;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    for (const element of event.target) {
      if (element.value === '' && element.type !== 'submit') {
        console.log(element);
        alert('Please fill out all fields.');
        return;
      }
    }

    onModalClose();
  };

  return (
    <form onSubmit={handleFormSubmit} className='w-full h-min md:w-[60%] lg:w-[65%] xl:w-[650px] py-4 px-8 rounded-lg bg-white flex flex-col items-start'>
      <span className='w-full text-2xl font-bold text-center'>RSVP</span>
      <span className='w-full mt-2 text-xl text-center'>Hello, {groupName}!</span>
      <div className='flex items-center w-full mt-2'>
        <label
          className='min-w-max'
          title='RSVP Code is on your invitation.'
          htmlFor='rsvp-code'>
          RSVP Code
        </label>
        <input
          title='RSVP Code is on your invitation.'
          className='w-full p-2 ml-4 rounded-lg bg-wedding-gray-highlight'
          type='text'
          id='rsvp-code'
          name='rsvpCode'
          readOnly={rsvpCode ? true : false}
          value={rsvpCode} />
      </div>

      <div className='flex items-center w-full mt-2'>
        <fieldset>
          <legend
            className='min-w-max'
            title='Will you be attending?'>
            Will you be attending?
          </legend>
          {/* <select
            className='w-full p-2 ml-4 rounded-lg bg-wedding-gray-highlight'
            defaultValue={'yes'}
            title='Will you be attending?'
            name='rsvpYesNo'
            id='rsvp-yes-no'> */}
            <input type='radio' id='rsvpYes' name='rsvpYesNo' value="yes" />
            <label htmlFor='rsvpYes'>Yes, I will be there</label>
            <input type='radio' id='rsvpNo' name='rsvpYesNo' value="no" />
            <label htmlFor='rsvpNo'>Sorry, I can&#39;t come</label>
          {/* </select> */}
        </fieldset>
      </div>

      <div className='flex items-center w-full mt-2'>
        <label
          className='min-w-max'
          title='You cannot RSVP more than what is on your invitation.'
          htmlFor='rsvp-amount'>
          How many people will be attending?
        </label>
        <input
          className='w-full p-2 ml-4 rounded-lg bg-wedding-gray-highlight'
          type='number'
          title='You cannot RSVP more than what is on your invitation.'
          min={1}
          max={10}
          id='rsvp-amount'
          name='rsvpAmount' />
      </div>

      <div className='flex justify-center w-full mt-4'>
        <button
          className='px-4 py-1 text-white rounded bg-wedding-primary-shadow text-bold'
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default RSVPForm;