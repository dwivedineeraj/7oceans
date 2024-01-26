'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getLeads, getPipelines, getSubjects } from '@/lib/common'


export default async function Students() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [pipelines, setPipelines] = useState<Pipeline[]>([])

  useEffect(() => {
    const getEnquiryData = async () => {
      const rawLeads = await getLeads()
      setLeads(await getLeads())
      setPipelines(await getPipelines())
      setSubjects(await getSubjects())
    }
    getEnquiryData()
  }, []);

  // const handleCheckboxChange = (studentId: string) => {
  //   const updatedStudents = students.map((student) =>
  //     student.id === studentId ? { ...student, selected: !student.selected } : student
  //   );
  //   setStudents(updatedStudents);
  //   setSelectAll(updatedStudents.every((student) => student.selected));
  // };

  // const handleSelectAll = () => {
  //   const updatedStudents = students.map((student) => ({ ...student, selected: true }));
  //   setStudents(updatedStudents);
  //   setSelectAll(true);
  // };

  // const handleUnselectAll = () => {
  //   const updatedStudents = students.map((student) => ({ ...student, selected: false }));
  //   setStudents(updatedStudents);
  //   setSelectAll(false);
  // };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Enquiry</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {students.map((user) => (
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
        ))} */}
      </div>
    </div>
  );
}
