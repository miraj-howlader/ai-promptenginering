export const getAllPrompts = async (paramsObj) => {
  const params = new URLSearchParams()

  if (paramsObj?.search)
    params.set('search', paramsObj.search)

  if (paramsObj?.category)
    params.set('category', paramsObj.category)

  if (paramsObj?.aiTool)
    params.set('aiTool', paramsObj.aiTool)

  if (paramsObj?.difficulty)
    params.set('difficulty', paramsObj.difficulty)

  if (paramsObj?.sort)
    params.set('sort', paramsObj.sort)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts?${params.toString()}`,
  )
  console.log(res)


  if (!res.ok) {
    throw new Error('Failed to fetch prompts')
  }

  return res.json()
}

// get user prompt 


export const getAllUserPrompt = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/get?email=${email}`
  )

  return res.json()
}