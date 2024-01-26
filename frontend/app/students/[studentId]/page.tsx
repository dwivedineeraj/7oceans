'use client'
import React, { useState, useEffect } from 'react';
import getStudent from "@/lib/getStudent";

type Params = {
    params: {
        studentId: string
    }
}

const Student: React.FC<Params> = ({ params: { studentId } }: Params) => {
    const [student, setStudent] = useState<StudentDoc | null>(null);

    const fetchStudent = async () => {
        const fetchedStudent: StudentDoc = await getStudent(studentId);
        setStudent(fetchedStudent);
    };

    useEffect(() => {
        fetchStudent();
    }, [studentId]);

    const handleEdit = (activityId: string) => {
        console.log(`Edit activity with id ${activityId}`);
    };

    const handleDelete = (activityId: string) => {
        console.log(`Delete activity with id ${activityId}`);
    };

    return (
        <div className="container mx-auto my-4 p-4">
            {student && (
                <>
                    <div key={student.id} className="bg-white p-4 rounded shadow-md">
                    <div className="flex items-center mb-2">
                    <img
                        src={student.avatar}
                        alt={`Avatar for ${student.name}`}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="text-blue-500 hover:underline">
                        {student.name}
                    </div>
                    </div>
                    <div className="text-gray-600 mt-2">{student.numbers}</div>
                    <div className="text-gray-600">{student.batch}</div>
                    <div className="text-gray-600">{student.createdAt}</div>
                </div>
                    <div className="mt-4">
                        {student.activities.map((element) => (
                            <div key={element.id} className="mb-4 p-2 border rounded shadow bg-gray-800">
                                <h3 className="text-lg font-bold">{element.updaterName}</h3>
                                <p>{element.description}</p>
                                <p>{element.updateTime}</p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                                    onClick={() => handleEdit(element.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(element.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Student;
