import { GoogleGenerativeAI   } from '@google/generative-ai';



export async function generateBookmarkTags(metadata: MetaTag): Promise<string> {
  let apikey  = import.meta.env.Gemini_API;

  const systemPrompt = `
  You are a helpful assistant who suggests bookmark tags for a webpage using the webpage metadata:
  - title: "${metadata.title}"
  - description: "${metadata.description}"
  Follow the instructions carefully, produce a good output:

  - Generate a string of results separated by a comma (,) sample Result : '"programming","jobsearch","self-taught developers"'
  - Carefully analyze the output and make it meaningful. Output should just be the result, no explanation or considerations.

  `;


  const genAI = new GoogleGenerativeAI(apikey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const result = await model.generateContent(systemPrompt);
    const tags = result.response.text();
    return tags;
  } catch (error) {
    console.error('Error generating bookmark tags:', error);
    throw error; // Or handle the error as needed
  }
}
