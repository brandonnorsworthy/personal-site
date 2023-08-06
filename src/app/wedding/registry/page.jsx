import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Gift Registry',
  description: 'Here, you can include details about the location, how to get there, parking information, and other logistics.',
}

const Page = () => {
  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        Links or details about where you're registered, any preferences or special notes about gifts, and perhaps a note that says gifts are optional (if that's your preference).
      </div>
    </main>
  )
}

export default Page;