import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import ReduxProvider from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enquiry',
  description: 'Manage your leads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  )
}
