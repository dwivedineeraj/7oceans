'use client'
import { Inter } from 'next/font/google'
import '../../globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'; // Importing from next/navigation

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pathname = usePathname()
  const match = pathname!.match(/students\/\d+/)!
  pathname = pathname.substring(0, match.index! + match[0].length)
  return (
    <>
      <ul className="flex p-4 space-x-4 bg-gray-800 text-white overflow-scroll">
        <li className="hover:underline">
          <Link href={`${pathname}`}>Profile</Link>
        </li>
        <li className="hover:underline">
          <Link href={`${pathname}/enquiry`}>Enquiry</Link>
        </li>
        <li className="hover:underline">
          <Link href={`${pathname}/admission`}>Admission</Link>
        </li>
        <li className="hover:underline">
          <Link href={`${pathname}/attendance`}>Attendance</Link>
        </li>
        <li className="hover:underline">
          <Link href={`${pathname}/batch`}>Batch</Link>
        </li>
      </ul>
      {children}
    </>
  )
}
