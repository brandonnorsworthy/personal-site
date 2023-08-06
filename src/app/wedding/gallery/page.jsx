import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Gallery',
  description: 'Gallery of photos from Brandon and Madison\'s wedding in 2024!',
}

const Page = () => {
  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <span className='mt-20 text-2xl text-wedding-secondary-shadow'>Come back after the Wedding to see the photos.</span>
      </div>
    </main>
  )
}

export default Page;