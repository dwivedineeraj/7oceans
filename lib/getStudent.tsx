export default async function getStudent(studentId: string) {
    const res = await fetch(`https://65991fa4a20d3dc41cef4784.mockapi.io/students/${studentId}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json() 
}