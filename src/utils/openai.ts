import OpenAI from "openai";

const apiKey = "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"; // Replace with your actual OpenAI API key
const openai = new OpenAI({ apiKey , dangerouslyAllowBrowser: true });

export const useopenai = async(user_prompt : MetaTag) => {

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Suggest a suitable bookmark tag that takes a bookmark data or string based on given data. The input  include information about the bookmark, such as description, url,and title. Utilize an AI algorithm to process this data and generate a single string of suggested bookmark tags example of your output book, game etc just a single string."
      },
      {
        role: "user",
        content: `${user_prompt.title} + ${user_prompt.description} + ${user_prompt.url}`
      }
    ],
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.choices[0].message.content
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
