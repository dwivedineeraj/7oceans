'use client'
import { useState, useEffect } from 'react';
import getAllStudents from '@/lib/getAllStudents';
import Link from 'next/link';

export default async function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const rawStudents: Student[] = await getAllStudents()
      const studentsWithSelection = rawStudents.map(student => ({ ...student, selected: false }));
      setStudents(studentsWithSelection)
    }
    fetchStudents()
  }, []);

  const handleCheckboxChange = (studentId: string) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, selected: !student.selected } : student
    );
    setStudents(updatedStudents);
    setSelectAll(updatedStudents.every((student) => student.selected));
  };

  const handleSelectAll = () => {
    const updatedStudents = students.map((student) => ({ ...student, selected: true }));
    setStudents(updatedStudents);
    setSelectAll(true);
  };

  const handleUnselectAll = () => {
    const updatedStudents = students.map((student) => ({ ...student, selected: false }));
    setStudents(updatedStudents);
    setSelectAll(false);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Enquiry</h1>

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
              checked={user.selected}
              onChange={() => handleCheckboxChange(user.id)}
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
