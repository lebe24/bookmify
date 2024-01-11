import {useopenai}  from "./openai";

export const getTag = async( description : string, url:string,title:string)=>{
    const input : MetaTag = {title,url,description}
    const res = await useopenai(input);
    console.log(res)
    return res;
}