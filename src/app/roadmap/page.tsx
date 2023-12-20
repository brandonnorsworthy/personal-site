import React from 'react'
import GlobalNavbar from '../components/GlobalNavbar'

const Page = () => {

  return (
    <>
      <header>
        <GlobalNavbar />
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen bg-global-gray">
        <div>
          here
        </div>
      </main>
    </>
  )
}

export default Page