import Link from 'next/link'
import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import '../styles/reset.css'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brandon\'s Personal Site',
  description: 'Catch-all for Brandon\'s personal projects and interests',
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className='flex justify-center w-full'>
          <div className='p-5 w-full md:w-[85%] lg:w-[75%] xl:w-[1000px]'>
            <span>made by <Link href="/" className='font-bold underline'>brandon norsworthy</Link> ©️ 2024</span>
            <div>
              <Link
                href="https://github.com/brandonnorsworthy/personal-site"
                target='_blank©'
                className='font-bold underline text-wedding-secondary'>
                github
              </Link>
              <Link
                href="https://www.linkedin.com/in/brandonnorsworthy/"
                target='_blank'
                className='ml-4 font-bold underline text-wedding-secondary'>
                linked in
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout;