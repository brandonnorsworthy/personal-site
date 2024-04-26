"use client";

import React, { useEffect } from "react";
import { IGroup } from "../typescript/interfaces";
import RSVPForm from "./RSVPForm";

interface rsvpFormProps {
  group: IGroup;
  rsvpCode: string;
}

const RSVPModal: React.FC<rsvpFormProps> = (props) => {
  const { group, rsvpCode } = props;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const onModalClose = () => {
    document.body.style.overflow = 'auto';
  }

  return (
    <div
      className='absolute top-0 left-0 w-full overflow-y-hidden align-middle'>
      <div className="fixed flex items-center justify-center w-full h-screen bg-gray-500/75">
        {
          group.confirmed
            ? <div>Hey it looks like you already checked in please contact us if something changed</div>
            : <RSVPForm groupName={group.name} rsvpCode={rsvpCode} onModalClose={onModalClose} />
        }
      </div>
    </div>
  )
}

export default RSVPModal;