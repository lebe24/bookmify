import { GoogleGenerativeAI   } from '@google/generative-ai';

const apikey  = import.meta.env.VITE_GEMINI_KEY;


export async function generateBookmarkTags(metadata: MetaTag): Promise<string> {
  
  const systemPrompt = `
  Prompt:
  You are an intelligent assistant that generates relevant and insightful bookmark tags for a webpage based on its metadata:

  Title: "${metadata.title}"
  Description: "${metadata.description}"
  
  Instructions:

  - Carefully analyze the metadata to capture the essence of the content.
  - Generate a list of concise and relevant tags, separated by commas (e.g., programming, job search, self-taught developers).
  - Ensure the tags are meaningful and reflect the core topics and themes of the webpage.
  - Output should only contain the tags as a string, without any additional text or explanations.
  
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
