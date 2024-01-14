export default async function getStudent(studentId: string) {
    const res1 = await fetch(`https://65991fa4a20d3dc41cef4784.mockapi.io/students/${studentId}`)
    const res2 = await fetch(`https://65991fa4a20d3dc41cef4784.mockapi.io/activity`)
    if (!res1.ok) throw new Error('Failed to fetch data')
    if (!res2.ok) throw new Error('Failed to fetch data')
    const res = {...(await res1.json()), activities: (await res2.json())}
    console.log(res)
    return res
}