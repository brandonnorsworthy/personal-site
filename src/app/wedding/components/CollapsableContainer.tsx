"use client";

import React, { useState, KeyboardEvent, ReactNode } from 'react';

interface CollapsableContainerProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const CollapsableContainer: React.FC<CollapsableContainerProps> = (props) => {
  const { title, description, children, className = '', defaultOpen = false } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = (): void => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  return (
    <div className={`rounded-lg ${className}`}>
      <div className='flex flex-col justify-center w-full'>
        <div
          className='flex flex-col w-full'>
          <button className='flex flex-col w-full p-4 group hover:cursor-pointer'
            onClick={toggleOpen}
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'collapsable-content' : undefined}
            aria-label={isOpen ? 'Collapse content' : 'Expand content'}
            role='button'
            aria-disabled={defaultOpen}
            disabled={defaultOpen}
            tabIndex={0}>
            <div className='flex items-center justify-between w-full'>
              <span className={`
                ${isOpen
                  ? 'text-wedding-secondary-highlight group-hover:text-wedding-secondary-highlight'
                  : 'text-wedding-secondary-highlight group-hover:text-wedding-secondary-highlight'}
                select-none font-bold text-2xl md:text-4xl text-left`}>
                {title}
              </span>
              <div className='h-[32px] md:h-[40px] w-[32px] md:w-[40px]'>
                {
                  isOpen
                    ? <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      width={24}
                      className="w-full h-full stroke-wedding-secondary-highlight group-hover:stroke-wedding-secondary-highlight"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    : <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      width={24}
                      className="w-full h-full stroke-wedding-secondary-highlight group-hover:stroke-wedding-secondary-highlight"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                }
              </div>
            </div>
            <span className='select-none'>{description}</span>
          </button>
          {
            isOpen && <div id="collapsable-content" className='mx-1 mb-1 rounded-b-lg bg-wedding-secondary-highlight'>
              {children}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default CollapsableContainer;
