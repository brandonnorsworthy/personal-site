import PropTypes from 'prop-types';

const CalendarCard = (props) => {
  const { dayOfWeek, date, events, note } = props.day;

  return (
    <div className='w-56 bg-wedding-secondary-highlight drop-shadow-md'>
      <div className='p-2 pb-1 w-full bg-wedding-primary flex flex-col items-center'>
        <span className='text-base'>{dayOfWeek}</span>
        <span className='text-sm text-wedding-gray'>{date}</span>
      </div>
      <div className='p-2 w-full flex flex-col items-start'>
        {
          events.map((event, index) => {
            return (
              <div className={`${index > 0 ? 'mt-2' : ''} flex flex-col`} key={index + event.time}>
                <div className='flex justify-start items-center'>
                  <div className='bg-wedding-primary-shadow w-2 h-2 rounded-xl'></div>
                  <span className='ml-1 text-wedding-gray'>{event.time}</span>
                </div>
                <span>{event.title}</span>
              </div>
            )
          })
        }
      </div>
      {
        note &&
        <div className='px-5 py-1 w-full bg-wedding-gray-highlight flex justify-around items-center absolute bottom-0'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={24}
            className="w-12 h-12">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <span className='ml-4 w-full text-center'>{note}</span>
        </div>
      }
    </div >
  )
}

CalendarCard.propTypes = {
  day: PropTypes.objectOf(PropTypes.shape({
    dayOfWeek: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    note: PropTypes.string,
    events: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  })).isRequired,
}

export default CalendarCard;