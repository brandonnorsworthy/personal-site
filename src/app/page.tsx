import Link from 'next/link'
import React from 'react'

import GlobalNavbar from './components/GlobalNavbar'

const Home: React.FC = () => {
  return (
    <>
      <GlobalNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-global-gray">
        <div>
          <Link href="/wedding" className='underline'>looking for wedding?</Link>
        </div>
      </main>
    </>
  )
}

export default Home