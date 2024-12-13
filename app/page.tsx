import { getBio, getConcerts, getMerch } from "@/sanity/sanity-utils";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";
import { PortableText } from "next-sanity";
import Image from "next/image";
import MerchCard from "@/components/merch-card";


export default async function Home() {

  const bio = await getBio();
  const merch = await getMerch();
  const concerts = await getConcerts();

  return (
    <div>
        <section id="hero" className="m-auto bg-no-repeat bg-center bg-cover bg-image max-w-[1440px] h-[600px] md:h-[800px]">
          <header>
            <nav id="nav" className="flex max-w-[1440px] justify-between px-5 sm:px-10 md:px-24 py-8">
              <Link href="/" className="flex items-center font-main font-bold tracking-tighter h-11 text-2xl">Mads Gjetmundsen</Link>
              <ul className="lg:flex items-center gap-12 hidden">
                <li><a href="#about" className="hover:underline underline-offset-8">Om</a></li>
                <li><a href="#store" className="hover:underline underline-offset-8">Vinyl</a></li>
                <li><a href="#concerts" className="hover:underline underline-offset-8">Konserter</a></li>
                <li><a href="#booking" className="flex justify-center items-center h-11 px-6 bg-blue-main hover:bg-blue-hover text-white">Booking</a></li>
              </ul>
              <HamburgerMenu />
            </nav>
          </header>
        </section>
        <section id="about" className="about-section m-auto max-w-[1440px]">
          <div className="px-5 py-24 md:px-24 lg:py-40">
            <h1 className="hidden">Om Mads Gjetmundsen</h1>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-16">
                <div className="flex flex-col md:gap-4">
                  <div className="max-w-[510px] leading-8">
                    <PortableText  value={bio[0].content}/>
                  </div>
                  <div className="max-w-[510px] hidden lg:block leading-8">
                    <PortableText  value={bio[1].content}/>
                  </div>
                </div>
              <Image src={'/static/mads-bio-image.png'} className="min-w-[350px]" height={400} width={400} alt='headshot mads'/>
              <div className="max-w-[510px] lg:hidden leading-8">
                    <PortableText  value={bio[1].content}/>
                  </div>
            </div>
          </div>
        </section>
        <section id="store" className="store-section  bg-gradient-to-r from-[rgba(2,71,91,0.04)] via-transparent to-[rgba(4,151,193,0.06)] m-auto">
          <div className="flex flex-col mx-24 py-40 items-center">
            {merch.map((merch) => {
              const {title, price, image, description, _id} = merch;
              return (
                <MerchCard key={_id} title={title} price={price} image={image} description ={description}/>
              )
            })}
          </div>
        </section>

      {/* <div>
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
