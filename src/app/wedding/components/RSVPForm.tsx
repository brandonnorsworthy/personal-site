"use client";

import React from "react";

const RSVPForm: React.FC = () => {
  return (
    <form className='w-full md:w-[60%] lg:w-[65%] xl:w-[650px] py-4 px-8 rounded-lg bg-white  flex flex-col items-start'>
      <span className='w-full text-2xl font-bold text-center'>RSVP</span>
      <div className='flex items-center w-full mt-2'>
        <label
          className='min-w-max'
          title="RSVP Code is on your invitation."
          htmlFor='rsvp-code'>
          RSVP Code (on invitation)
        </label>
        <input
          title="RSVP Code is on your invitation."
          className='w-full p-2 ml-4 rounded-lg bg-wedding-gray-highlight'
          type='text'
          id='rsvp-code' />
      </div>

      <div className='flex items-center w-full mt-2'>
        <label
          className='min-w-max'
          title='Will you be attending?'
          htmlFor='rsvp-yes-no'>
          Will you be attending?
        </label>
        <select
          className='w-full p-2 ml-4 rounded-lg bg-wedding-gray-highlight'
          defaultValue={'no'}
          title='Will you be attending?'
          id='rsvp-yes-no'>
          <option value='no'>No</option>
          <option value='yes'>Yes</option>
        </select>
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
          id='rsvp-amount' />
      </div>

      <div className='flex items-center w-full mt-2'>
        <label
          className='min-w-max'
          title='Select the food you would like.'
          htmlFor='rsvp-food'>
          What food would you like?
        </label>
        <select
          className='w-full p-2 ml-4 rounded-lg bg-wedding-gray-highlight'
          title='Select the food you would like.'
          id='rsvp-food'>
          <option value='chicken'>Chicken</option>
          <option value='beef'>Beef</option>
        </select>
      </div>

      <div className='flex justify-center w-full mt-4'>
        <button
          className='px-4 py-1 text-white rounded bg-wedding-primary-shadow text-bold'
          onClick={(event) => { event.preventDefault(); console.log('submit') }}
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default RSVPForm;