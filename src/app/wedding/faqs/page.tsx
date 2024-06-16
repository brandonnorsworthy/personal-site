import React from "react";

import CollapsableContainer from "../components/CollapsableContainer";
import Navbar from "../components/Navbar";
import QuestionAnswerTiles from "../components/QuestionAnswerTiles";

import generalFAQ from "../data/generalFAQ";
import travelAndStayFAQ from "../data/travelAndStayFAQ";
import dinnerFAQ from "../data/dinnerFAQ";
import withLayout from "../../hocs/withLayout";

export const metadata = {
  title: 'FAQs',
  description: 'This can be an organized section of common questions and answers. You can use some of the questions provided earlier to anticipate what guests might ask.',
}

interface PageProps {
  responsiveConstraintClasses: string
}

const Page: React.FC<PageProps> = ({ responsiveConstraintClasses }) => {
  return (
    <main className='min-h-[100vh] flex flex-col items-center w-full'>
      <div className="flex justify-center w-full bg-wedding-primary-highlight">
        <div className={responsiveConstraintClasses}>
          <Navbar />
        </div>
      </div>
      <div className={[responsiveConstraintClasses, 'flex flex-col items-start'].join(" ")}>
        <span className='mt-12 text-4xl font-bold text-wedding-secondary-shadow'>Frequently Asked Questions</span>
        <span className="mt-8">Any other questions you have but don&apos;t find just text me (please look first), This page will continue to be updated</span>
        <CollapsableContainer
          title='General Wedding Details'
          description='General Ceremony Information.'
          className='w-full mt-8 bg-wedding-secondary'>
          <QuestionAnswerTiles questions={generalFAQ} />
        </CollapsableContainer>
        <CollapsableContainer
          title='Travel and Stay'
          description='Arrivals and Accommodations Information.'
          className='w-full mt-8 bg-wedding-secondary'>
          <QuestionAnswerTiles questions={travelAndStayFAQ} />
        </CollapsableContainer>
        <CollapsableContainer
          title='Food and Digestion'
          description='Grubbin Information.'
          className='w-full mt-8 bg-wedding-secondary'>
          <QuestionAnswerTiles questions={dinnerFAQ} />
        </CollapsableContainer>
      </div>
    </main>
  );
}

export default withLayout(Page);