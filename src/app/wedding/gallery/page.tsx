import React from "react";
import Navbar from "../components/Navbar";
import withLayout from "../../hocs/withLayout";

export const metadata = {
  title: 'Gallery',
  description: 'Gallery of photos from Brandon and Madison\'s wedding in 2024!',
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
      <div className={[responsiveConstraintClasses, 'flex flex-col items-center'].join(" ")}>
        <span className='mt-20 text-2xl text-wedding-secondary-shadow'>Come back after the Wedding to see the photos.</span>
      </div>
    </main>
  )
}

export default withLayout(Page);