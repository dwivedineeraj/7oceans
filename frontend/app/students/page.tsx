'use client'
import { useState, useEffect } from 'react';
import getAllStudents from '@/lib/getAllStudents';
import Link from 'next/link';

export default async function Students() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const rawStudents: Student[] = await getAllStudents()
      const studentsWithSelection = rawStudents.map(student => ({ ...student, selected: false }));
      console.log(studentsWithSelection)
      setStudents(studentsWithSelection)
    }
    fetchStudents()
  }, []);

  const handleCheckboxChange = (studentId: string) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, selected: !student.selected } : student
    );
    setStudents(updatedStudents);
  };

  const handleSelectAll = () => {
    const updatedStudents = students.map((student) => ({ ...student, selected: true }));
    setStudents(updatedStudents);
  };

  const handleUnselectAll = () => {
    const updatedStudents = students.map((student) => ({ ...student, selected: false }));
    setStudents(updatedStudents);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">Students</h1>

      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={handleSelectAll}>
          Select All
        </button>
        <button className="bg-red-500 text-white px-4 py-2" onClick={handleUnselectAll}>
          Unselect All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((user) => (
        <div className='flex'>
          <div className='w-50 p-5'><input
              type="checkbox"
              id={`checkbox-${user.id}`}
              className=""
              checked={user.selected}
              onChange={() => handleCheckboxChange(user.id)}
            />
          </div>
          <div key={user.id} className="card">
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
            <div className="absolute top-0 right-5 font-bold items-center">
              <button>...</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
