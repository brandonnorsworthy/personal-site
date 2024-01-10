import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import '../styles/reset.css'
import '../styles/globals.css'
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brandon\'s Personal Site',
  description: 'Catch-all for Brandon\'s personal projects and interests',
  image: "https://www.brandonnorsworthy.com/images/ComingSoon.jpg"
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:type" content="website" />
      <body className={inter.className}>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  )
}

export default RootLayout;