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
    <ul className="flex p-4 space-x-10 bg-black text-gray-500 overflow-scroll">
          <li className="hover:underline">
            Pipeline
          </li>
          <li className="hover:underline">
            Leads
          </li>
          <li className="hover:underline">
            Tasks
          </li>
          <li className="hover:underline">
            Guardians
          </li>
          <li className="hover:underline">
            Notifications
          </li>
        </ul>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  )
}
