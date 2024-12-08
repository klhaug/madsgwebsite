import { createClient, groq } from "next-sanity";
import clientCreated from "./config/client";
import { bio } from "@/types/bio";


export async function getBio(): Promise<bio[]> {
    return createClient(clientCreated).fetch(
        groq`*[_type == 'bio']{ 
        _id,
        _createdAt,
        content
        }`
    )
}