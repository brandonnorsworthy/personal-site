'use client'

const RSVPForm = () => {
  return (
    <form className='w-full md:w-[60%] lg:w-[65%] xl:w-[650px] py-4 px-8 rounded-lg bg-white  flex flex-col items-start'>
      <span className='w-full text-center text-2xl font-bold'>RSVP</span>
      <div className='mt-2 w-full flex items-center'>
        <label
          className='min-w-max'
          title="RSVP Code is on your invitation."
          htmlFor='rsvp-code'>
          RSVP Code (on invitation)
        </label>
        <input
          title="RSVP Code is on your invitation."
          className='ml-4 w-full p-2 bg-wedding-gray-highlight rounded-lg'
          type='text'
          id='rsvp-code' />
      </div>

      <div className='mt-2 w-full flex items-center'>
        <label
          className='min-w-max'
          title='Will you be attending?'
          htmlFor='rsvp-yes-no'>
          Will you be attending?
        </label>
        <select
          className='ml-4 w-full p-2 bg-wedding-gray-highlight rounded-lg'
          defaultValue={'no'}
          title='Will you be attending?'
          id='rsvp-yes-no'>
          <option value='no'>No</option>
          <option value='yes'>Yes</option>
        </select>
      </div>

      <div className='mt-2 w-full flex items-center'>
        <label
          className='min-w-max'
          title='You cannot RSVP more than what is on your invitation.'
          htmlFor='rsvp-amount'>
          How many people will be attending?
        </label>
        <input
          className='ml-4 w-full p-2 bg-wedding-gray-highlight rounded-lg'
          type='number'
          title='You cannot RSVP more than what is on your invitation.'
          min={1}
          max={10}
          id='rsvp-amount' />
      </div>

      <div className='mt-2 w-full flex items-center'>
        <label
          className='min-w-max'
          title='Select the food you would like.'
          htmlFor='rsvp-food'>
          What food would you like?
        </label>
        <select
          className='ml-4 w-full p-2 bg-wedding-gray-highlight rounded-lg'
          title='Select the food you would like.'
          id='rsvp-food'>
          <option value='chicken'>Chicken</option>
          <option value='beef'>Beef</option>
        </select>
      </div>

      <div className='mt-4 w-full flex justify-center'>
        <button
        className='py-1 px-4 rounded bg-wedding-primary-shadow text-white text-bold'
          onClick={(event) => { event.preventDefault(); console.log('submit') }}
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default RSVPForm;