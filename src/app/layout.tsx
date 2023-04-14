import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Stars } from './components/stars'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loopy',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="root-container">
        <Stars />
        {children}
      </body>
    </html>
  )
}
