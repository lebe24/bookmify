import OpenAI from "openai";

const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual OpenAI API key
const openai = new OpenAI({ apiKey });

export const useopenai = async(user_prompt : MetaTag) => {

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: " "
      },
      {
        role: "user",
        content: user_prompt.toString()
      }
    ],
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response
}

// export const useOpenai = create<Ai_param>(() => ({
//   sys_prompt: "2",
//   user_prompt: [],
//   temperature: 1,
//   max_tokens: 40,
//   top_p: 1,
//   model:" "
//   res: async () => {
//     try {
//       const params: Ai_param = {
//         model: "gpt-3.5-turbo",
//         sys_prompt: "2",
//         user_prompt: [],
//         temperature: 1,
//         max_tokens: 40,
//         top_p: 1,
//       },

//       // Make sure you have a proper sys_prompt and user_prompt setup for chat completion

//       const completion =  await openai.chat.completions.create({params});

//       return completion
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   },
// }));
