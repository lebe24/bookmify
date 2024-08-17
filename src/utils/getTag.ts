import { generateBookmarkTags } from "./gemini";

export const getTag = async( description : string,title:string)=>{
    const input : MetaTag = {title,description}
    const res = await generateBookmarkTags(input);
    return res
}
