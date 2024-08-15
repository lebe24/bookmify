import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from 'node:process';

const apikey : string  = env.GEMINI_KEY || " "
export async function GeminiAI(){

    // # Create the model
    const generation_config = {
        "temperature": 2,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 1024,
        "response_mime_type": "text/plain",
    }

    const genAI = new GoogleGenerativeAI(apikey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const tag = model.generateContent

}