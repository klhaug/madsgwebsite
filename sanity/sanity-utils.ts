import { createClient, groq } from "next-sanity";
import clientCreated from "./config/client";
import { bio } from "@/types/bio";
import { merch } from "@/types/merch";
import { concerts } from "@/types/concerts";
import { MerchCardMobileProps } from "@/types/merch-card-mobile";


export async function getBio(): Promise<bio[]> {
    return createClient(clientCreated).fetch(
        groq`*[_type == 'bio']{ 
        _id,
        _createdAt,
        content
        }`
    )
}

export async function getMerch(): Promise<merch[]> {
    return createClient(clientCreated).fetch(
        groq`*[_type == 'merch']{ 
        _id,
        _createdAt,
        title,
        description,
        price,
        "image": image.asset -> url,
        "slug": slug.current,
        storeUrl
        }`
    )
}
export async function getSingleMerch(slug: string): Promise<MerchCardMobileProps[]> {
    return createClient(clientCreated).fetch(
        groq`*[_type == 'merch' && slug.current == $slug]{ 
        _id,
        _createdAt,
        title,
        description,
        price,
        "image": image.asset -> url,
        "slug": slug.current
        }`,
        {slug}
    )
}
export async function getConcerts(): Promise<concerts[]> {
    return createClient(clientCreated).fetch(
        groq`*[_type == 'concerts' && dateTime(datetime) >= dateTime(now())]| order(datetime asc) { 
        _id,
        _createdAt,
        venue,
        location,
        ticketUrl,
        datetime
        }`
    )
}