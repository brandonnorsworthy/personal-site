'use client'

import React, { ReactNode, useEffect } from 'react'
import { Inter } from 'next/font/google'

import '../styles/reset.css'
import '../styles/globals.css'
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const shouldDisableHeader = (): boolean => {
    const customHeaderRoutes = ["wedding"];

    return !customHeaderRoutes.includes(pathname.split('/')[1]);
  }

  return (
    <html lang="en">
      <body>
        {
          shouldDisableHeader() &&
          <GlobalHeader />
        }
        {children}
        <GlobalFooter />
      </body>
    </html>
  )
}

export default RootLayout;