import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Course bro',
  description: 'Manage your class',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        <ul className="flex p-4 space-x-4 bg-gray-800 text-white overflow-scroll">
          <li className="hover:underline">
            <Link href="/students">Students</Link>
          </li>
          <li className="hover:underline">
            <Link href="/enquiry">Enquiry</Link>
          </li>
          <li className="hover:underline">
            <Link href="/batches">Batches</Link>
          </li>
          <li className="hover:underline">
            <Link href="/exams">Exams</Link>
          </li>
          <li className="hover:underline">
            <Link href="/lectures">Lectures</Link>
          </li>
          <li className="hover:underline">
            <Link href="/assignments">Assignments</Link>
          </li>
          <li className="hover:underline">
            <Link href="/courses">Courses</Link>
          </li>
          <li className="hover:underline">
            <Link href="/expenses">Expenses</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  )
}
