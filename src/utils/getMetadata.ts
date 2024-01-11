const getMetadata = async (url: string): Promise<Metadata | null> => {

  const apiKey = import.meta.env.VITE_JSONLINK
    
  try {
    const response = await fetch(`https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`)
    if (!response.ok) return null
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}

export default getMetadata