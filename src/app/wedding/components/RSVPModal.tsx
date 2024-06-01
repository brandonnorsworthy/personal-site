"use client";

import React, { useEffect } from "react";
import { Group } from "../typescript/interfaces";
import RSVPForm from "./RSVPForm";

interface rsvpFormProps {
  group: Group;
  rsvpCode: string;
}

const RSVPModal: React.FC<rsvpFormProps> = (props) => {
  const { group, rsvpCode } = props;
  const [isOpen, setIsOpen] = React.useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const onModalClose = () => {
    document.body.style.overflow = 'auto';

    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className='absolute top-0 left-0 z-50 w-full overflow-y-hidden align-middle'>
      <div className='fixed flex items-center justify-center w-full h-full bg-gray-500/75'>
        {
          group.confirmed !== null
            ?
            <div className="z-10 w-full bg-white max-w-xl border-wedding-tertiary border-b-4 border-solid h-min md:w-[60%] lg:w-[65%] xl:w-[650px] p-12 flex flex-col items-start">
              <span>Looks like you already RSVP&apos;d, please contact us if something changed <br />Thanks, Brandon</span>
              <div className="flex justify-center w-full mt-4">
                <button className="px-8 py-2 text-lg font-bold text-white bg-wedding-tertiary" onClick={onModalClose}>Okay</button>
              </div>
            </div>
            : <RSVPForm groupName={group.name} maxNumberOfPeople={group.max_number_of_people} rsvpCode={rsvpCode} onModalClose={onModalClose} />
        }
      </div>
    </div>
  )
}

export default RSVPModal;