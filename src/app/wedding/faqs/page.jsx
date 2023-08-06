import Navbar from "../components/Navbar";
import generalFAQ from "../data/generalFAQ";
import housingFAQ from "../data/housingFAQ";

export const metadata = {
  title: 'FAQs',
  description: 'This can be an organized section of common questions and answers. You can use some of the questions provided earlier to anticipate what guests might ask.',
}

const Page = () => {
  return (
    <main className='min-h-[85vh] flex flex-col items-center'>
      <Navbar />
      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-start'>
        <span>"Wedding Details": Questions specifically about the wedding day.</span>
        {
          generalFAQ.map((question, index) => {
            return (
              <div className='flex flex-col' key={index + question.question}>
                <span className='font-bold'>{question.question}</span>
                <span className='ml-4'>{question.answer}</span>
              </div>
            )
          })
        }
        <span>"Stay & Activities": Questions about the beach houses, meals, and activities during the weekend.</span>
        {
          housingFAQ.map((question, index) => {
            return (
              <div className='flex flex-col' key={index + question.question}>
                <span className='font-bold'>{question.question}</span>
                <span className='ml-4'>{question.answer}</span>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Page;