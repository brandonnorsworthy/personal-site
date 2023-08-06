'use client'

import { useState } from 'react';
import PropTypes from 'prop-types';

const CollapsableContainer = ({ title, description, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div className={`rounded-lg ${className}`}>
      <div className='w-full flex flex-col justify-center'>
        <div
          className='w-full flex flex-col'>
          <div className='group p-4 w-full flex flex-col hover:cursor-pointer'
            onClick={toggleOpen}
            onKeyDown={handleKeyDown}
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'collapsable-content' : undefined}
            aria-label={isOpen ? 'Collapse content' : 'Expand content'}
            role='button'
            tabIndex={0}>
            <div className='w-full flex justify-between items-center'>
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
            isOpen && <div id="collapsable-content" className='mx-1 mb-1 bg-wedding-secondary-highlight rounded-b-lg'>
              {children}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

CollapsableContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CollapsableContainer;
