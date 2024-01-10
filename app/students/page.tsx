import type { Metadata } from 'next'
import getAllStudents from '@/lib/getAllStudents'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Students',
  description: 'Manage your student data',
}

export default async function Students() {
  const students: Student[] = await getAllStudents();

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Students</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow-md">
            <div className="flex items-center mb-2">
              <img
                src={user.avatar}
                alt={`Avatar for ${user.name}`}
                className="w-8 h-8 rounded-full mr-2"
              />
              <Link href={`/students/${user.id}`} className="text-blue-500 hover:underline">
                {user.name}
              </Link>
            </div>
            <div className="text-gray-600 mt-2">{user.numbers}</div>
            <div className="text-gray-600">{user.batch}</div>
            <div className="text-gray-600">{user.createdAt}</div>
            <input
              type="checkbox"
              id={`checkbox-${user.id}`}
              className="mt-2"
            />
            <label htmlFor={`checkbox-${user.id}`} className="ml-2 text-gray-600">
              Select
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
