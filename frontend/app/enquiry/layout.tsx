import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'

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
            <Link href="enquiry/pipeline">Pipeline</Link>
          </li>
          <li className="hover:underline">
            <Link href="enquiry/leads">Leads</Link>
          </li>
          <li className="hover:underline">
            <Link href="enquiry/tasks">Tasks</Link>
          </li>
          <li className="hover:underline">
            <Link href="enquiry/guardians">Guardians</Link>
          </li>
          <li className="hover:underline">
            <Link href="enquiry/notifications">Notifications</Link>
          </li>
        </ul>
      {children}
    </>
  )
}
