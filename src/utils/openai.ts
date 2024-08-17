// import OpenAI from "openai";

// const apiKey = import.meta.env.VITE_OPENAPI    // Replace with your actual OpenAI API key
// const openai = new OpenAI({ apiKey , dangerouslyAllowBrowser: true });

// export const useopenai = async(user_prompt : MetaTag) => {

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: "You a helpful assistant that generate a tag, that takes a bookmark item based on given data.generate one output of the bookmark tags: {{output}}"
//       },
//       {
//         role: "user",
//         content: `${user_prompt.title} + ${user_prompt.description} + ${user_prompt.url}`
//       }
//     ],
//     max_tokens: 1024,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//   });

//   return response.choices[0].message.content
// }

