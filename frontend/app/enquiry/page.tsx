'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useGetLeadsQuery, useGetPipelinesQuery, useGetSubjectsQuery } from '@/redux/features/leadsSlice';
import Loading from '../loading';

export default async function Students() {

  let {data: leads = [], error: errorl, isLoading: isLoadingLeads} = useGetLeadsQuery();
  let {data: pipelines = [], error: errorp, isLoading: isLoadingPipelines} = useGetPipelinesQuery();
  let {data: subjects = [], error: errors, isLoading: isLoadingSubjects} = useGetSubjectsQuery();
  

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
        {isLoadingPipelines? <Loading></Loading>
        : errorp? <div>Error</div>
        : <>fine</>}
      </div>
    </div>
  );
}
