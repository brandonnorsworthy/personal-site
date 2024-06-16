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
        <span className='mt-20 text-2xl text-wedding-secondary-shadow'>I&apos;m going to upload the wedding photos here after we get them back, will be permanently avaliable in full resolution if you want one of them. So bookmark this page or something</span>
      </div>
    </main>
  )
}

export default withLayout(Page);