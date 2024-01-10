import getStudent from "@/lib/getStudent"

type Params = {
    params: {
        studentId: string
    }
}

export default async function Student({params: {studentId}}: Params) {
    const student: Student = await getStudent(studentId);
    return (
        <>
            <h2>{student.name}</h2>
            <h2>{student.numbers}</h2>
            <h2>{student.createdAt}</h2>
            <h2>{student.batch}</h2>
            <h2>{student.avatar}</h2>
            
        </>
    )
}