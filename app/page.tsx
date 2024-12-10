import { getBio, getConcerts, getMerch } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import ToggleButton from "@/components/toggle-button";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";


export default async function Home() {

  const bio = await getBio();
  const merch = await getMerch();
  const concerts = await getConcerts();

  return (
    <div>
        <section id="hero" className="m-auto bg-no-repeat bg-center bg-cover bg-image max-w-[1440px] h-[872px]">
          <header>
            <nav id="desktop-nav" className="flex max-w-[1440px] justify-between px-5 sm:px-10 md:px-24 py-8">
              <Link href="/" className="flex items-center font-main font-bold tracking-tighter h-11 text-2xl">Mads Gjetmundsen</Link>
              <ul className="md:flex items-center gap-12 hidden">
                <li><a href="#about" className="hover:underline underline-offset-8">Om</a></li>
                <li><a href="#contact" className="hover:underline underline-offset-8">Kontakt</a></li>
                <li><a href="#store" className="hover:underline underline-offset-8">Vinyl</a></li>
                <li><a href="#booking" className="flex justify-center items-center h-11 px-6 bg-blue-main hover:bg-blue-hover text-white">Booking</a></li>
              </ul>
              <HamburgerMenu />
            </nav>
            <nav>
            </nav>
          </header>
        </section>
      {/* <div>
        <div className="font-main bg-image"><PortableText value={bio[0].content} /></div>
        <a href="#billetter"className="flex h-[53px] bg-blue-main text-white">Billetter</a>
        <h2>{merch[0].title}</h2>
        <p>{merch[0].description}</p>
        <h3>{merch[0].price}</h3>
        {concerts.map((concert) => (
          <div key={concert._id}>
            <p>{concert.venue}</p>
            <p>{concert.location}</p>
            <p>{concert.ticketUrl}</p>
            <p>{concert.datetime}</p>
          </div>
        ))}
      <Image src={merch[0].image} width={250} height ={250} alt="Man in flower field"/>
      </div> */}
       {/* <ToggleButton /> */}
    </div>
  );
}
