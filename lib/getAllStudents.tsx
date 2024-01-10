export default async function() {
    const res = await fetch('https://65991fa4a20d3dc41cef4784.mockapi.io/students')
    if (!res.ok) throw new Error('Failed to fetch data')
    console.log(res)
    return res.json()
}