import EditPromptForm from "@/components/EditPromptForm "


async function getPrompt(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/${id}`,
    { cache: 'no-store' }
  )

  const text = await res.text()

  // ❗ SAFE PARSE (prevents crash)
  let data
  try {
    data = JSON.parse(text)
  } catch (err) {
    console.log("INVALID RESPONSE:", text)
    throw new Error("Server returned invalid response")
  }

  if (!res.ok) {
    throw new Error(data.message || "Failed to load prompt")
  }

  return data.data
}
export default async function Page({ params }) {
  const { id } = await params

  let prompt = null

  try {
    prompt = await getPrompt(id)
  } catch (err) {
    return <div className="text-red-500">❌ Failed to load prompt</div>
  }

  return <EditPromptForm prompt={prompt} />
}