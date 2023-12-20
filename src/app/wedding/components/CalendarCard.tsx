import React from 'react';
import { ScheduledDay, ScheduledEvent } from '../types';

interface CalendarCardProps {
  day: ScheduledDay;
}

const CalendarCard: React.FC<CalendarCardProps> = (props) => {
  const { dayOfWeek, date, events, note } = props.day;

  return (
    <div className='w-56 bg-wedding-secondary-highlight drop-shadow-md'>
      <div className='flex flex-col items-center w-full p-2 pb-1 bg-wedding-primary'>
        <span className='text-base'>{dayOfWeek}</span>
        <span className='text-sm text-wedding-gray'>{date}</span>
      </div>
      <div className='flex flex-col items-start w-full p-2'>
        {
          events.map((event: ScheduledEvent, index: number) => {
            return (
              <div className={`${index > 0 ? 'mt-2' : ''} flex flex-col`} key={index + event.time}>
                <div className='flex items-center justify-start'>
                  <div className='w-2 h-2 bg-wedding-primary-shadow rounded-xl'></div>
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
        <div className='absolute bottom-0 flex items-center justify-around w-full px-5 py-1 bg-wedding-gray-highlight'>
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
          <span className='w-full ml-4 text-center'>{note}</span>
        </div>
      }
    </div >
  )
}

export default CalendarCard;