import React from 'react'
import withLayout from '../hocs/withLayout';

interface PageProps {
  responsiveConstraintClasses: string;
}

const Page: React.FC<PageProps> = ({ responsiveConstraintClasses }) => {

  return (
    <main className='flex justify-center w-full min-h-[calc(100vh-48px)] bg-gray-600'>
      <article className={[responsiveConstraintClasses, "flex flex-col items-start h-full"].join(" ")}>
        <div>
          here
        </div>
      </article>
    </main>
  )
}

export default withLayout(Page);