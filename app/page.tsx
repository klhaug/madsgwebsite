import { getBio } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";


export default async function Home() {

  const bio = await getBio();

  return (

    <div>
      <div className="font-main"><PortableText value={bio[0].content} /></div>
      <a className="flex h-[53px] bg-blue-main text-white">Billetter</a>
    </div>
  );
}
