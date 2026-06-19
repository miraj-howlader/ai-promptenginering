export const getAllPrompts = async ()=>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/get`)
 return res.json()
}