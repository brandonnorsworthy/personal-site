"use client";

import React, { useState, KeyboardEvent, ReactNode } from 'react';

interface CollapsableContainerProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const CollapsableContainer: React.FC<CollapsableContainerProps> = (props) => {
  const { title, description, children, className = '' } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div className={`rounded-lg ${className}`}>
      <div className='flex flex-col justify-center w-full'>
        <div
          className='flex flex-col w-full'>
          <div className='flex flex-col w-full p-4 group hover:cursor-pointer'
            onClick={toggleOpen}
            onKeyDown={handleKeyDown}
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'collapsable-content' : undefined}
            aria-label={isOpen ? 'Collapse content' : 'Expand content'}
            role='button'
            tabIndex={0}>
            <div className='flex items-center justify-between w-full'>
              <span className={`${isOpen ? 'text-wedding-secondary-highlight group-hover:text-wedding-secondary-shadow' : 'text-wedding-secondary-shadow group-hover:text-wedding-secondary-highlight'} select-none font-bold text-4xl`}>{title}</span>
              {
                isOpen
                  ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    width={24}
                    className="w-12 h-12 stroke-wedding-secondary-highlight group-hover:stroke-wedding-secondary-shadow"
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
                    className="w-12 h-12 stroke-wedding-secondary-shadow group-hover:stroke-wedding-secondary-highlight"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
              }
            </div>
            <span className='select-none'>{description}</span>
          </div>
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
