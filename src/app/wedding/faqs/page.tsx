import React from "react";

import CollapsableContainer from "../components/CollapsableContainer";
import Navbar from "../components/Navbar";
import QuestionAnswerTiles from "../components/QuestionAnswerTiles";

import weddingFAQ from "../data/weddingFAQ";
import stayAndActiviesFAQ from "../data/stayAndActiviesFAQ";
import generalFAQ from "../data/generalFAQ";
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
        <span className='mt-12 text-4xl font-bold text-wedding-secondary-shadow'>[Frequently Asked Questions]</span>
        <CollapsableContainer
          title='Wedding Details'
          description='Questions specifically about the wedding day.'
          className='w-full mt-8 bg-wedding-secondary'>
          <QuestionAnswerTiles questions={weddingFAQ} />
        </CollapsableContainer>
        <CollapsableContainer
          title='Stay & Activities'
          description='Questions about the beach houses, meals, and activities during the weekend.'
          className='w-full mt-8 bg-wedding-secondary'>
          <QuestionAnswerTiles questions={stayAndActiviesFAQ} />
        </CollapsableContainer>
        <CollapsableContainer
          title='General'
          description='Other miscellaneous questions.'
          className='w-full mt-8 bg-wedding-secondary'>
          <QuestionAnswerTiles questions={generalFAQ} />
        </CollapsableContainer>
      </div>
    </main>
  );
}

export default withLayout(Page);