"use client";

import React from "react";
import { IGroup } from "../typescript/interfaces";
import RSVPForm from "./RSVPForm";

interface rsvpFormProps {
  group: IGroup;
  rsvpCode: string;
}

const RSVPModal: React.FC<rsvpFormProps> = (props) => {
  const { group, rsvpCode } = props;

  if (group.confirmed) {
    return (
      <section
        className='flex justify-center w-full px-16 py-32 bg-wedding-primary'
        id='rsvp'>
        <div>Hey it looks like you already checked in please contact us if something changed</div>
      </section>
    )
  }

  return (
    <div
      className='absolute flex justify-center w-full h-full align-middle bg-gray-500/25'>
      {
        group.confirmed
          ? <div>Hey it looks like you already checked in please contact us if something changed</div>
          : <RSVPForm groupName={group.name} rsvpCode={rsvpCode} />
      }
    </div>
  )
}

export default RSVPModal;