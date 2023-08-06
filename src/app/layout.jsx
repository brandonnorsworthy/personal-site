import '../styles/reset.css'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brandon\'s Personal Site',
  description: 'Catch-all for Brandon\'s personal projects and interests',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className='w-full flex justify-center'>
          <div className='p-8 w-full md:w-[85%] lg:w-[75%] xl:w-[1000px]'>
            <span>made by brandon norsworthy ©️ 2024 ✌️</span>
            <div>
              <Link
                href="https://github.com/brandonnorsworthy/personal-site"
                target='_blank©'
                className='text-wedding-secondary font-bold underline'>
                github
              </Link>
              <Link
                href="https://www.linkedin.com/in/brandonnorsworthy/"
                target='_blank'
                className='ml-4 text-wedding-secondary font-bold underline'>
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