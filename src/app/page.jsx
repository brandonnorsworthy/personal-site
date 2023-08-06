import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-center">
      <div>
        <Link href="/wedding" className='underline'>Wedding</Link>
      </div>
    </main>
  )
}

export default Home