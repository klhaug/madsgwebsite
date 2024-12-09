import { getBio, getConcerts, getMerch } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import ToggleButton from "@/components/toggle-button";


export default async function Home() {

  const bio = await getBio();
  const merch = await getMerch();
  const concerts = await getConcerts();

  return (
    <div>
      <ToggleButton />
      <div className="font-main bg-image"><PortableText value={bio[0].content} /></div>
      <a href="#billetter"className="flex h-[53px] bg-blue-main text-white">Billetter</a>
      <h2>{merch[0].title}</h2>
      <p>{merch[0].description}</p>
      <h3>{merch[0].price}</h3>
      <Image src={merch[0].image} width={250} height ={250} alt="Man in flower field"/>
      {concerts.map((concert) => (
        <div key={concert._id}>
          <p>{concert.venue}</p>
          <p>{concert.location}</p>
          <p>{concert.ticketUrl}</p>
          <p>{concert.datetime}</p>
        </div>
      ))}
      
    </div>
  );
}
