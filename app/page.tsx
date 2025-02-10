import { getBio, getConcerts, getMerch } from "@/sanity/sanity-utils";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";
import { PortableText } from "next-sanity";
import Image from "next/image";
import MerchCard from "@/components/merch-card";
import ConcertCard from "@/components/concert-card-component";
import ConcertCardMobile from "@/components/concert-card-mobile-component";
import MerchCardMobile from "@/components/merch-card-mobile";
import { ContactForm } from "@/components/contact-form";


export default async function Home() {

  const bio = await getBio();
  const merch = await getMerch();
  const concerts = await getConcerts();
  // console.log(merch)

  return (
    <div>
        <section id="hero" className="m-auto bg-no-repeat bg-center bg-cover bg-image max-w-[1728px] h-[600px] md:h-[800px]">
          <header>
            <nav id="nav" className="flex max-w-[1728px] justify-between px-5 sm:px-10 md:px-24 py-8">
              <Link href="/" className="flex items-center font-main font-bold tracking-tighter h-11 text-2xl">Mads Gjetmundsen</Link>
              <ul className="lg:flex items-center gap-12 hidden">
                <li><a href="#about" className="hover:underline underline-offset-8">Om</a></li>
                <li><a href="#store" className="hover:underline underline-offset-8">Vinyl</a></li>
                <li><a href="#concerts" className="hover:underline underline-offset-8">Konserter</a></li>
                <li><a href="#contact" className="flex justify-center items-center h-11 px-6 bg-blue-main hover:bg-blue-hover text-white">Booking</a></li>
              </ul>
              <HamburgerMenu />
            </nav>
          </header>
        </section>
{/* About */}
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
{/* Store */}
        <section id="store" className="store-section  bg-gradient-to-r from-[rgba(179,222,234,0.15)] to-[rgba(4,152,193,0.12)] m-auto">
          <div className="hidden lg:flex flex-col px-5 py-24 md:mx-24 md:py-40 items-center gap-20">
            {merch.reverse().map((merch, index) => {
              const {title, price, image, description, _id, slug} = merch;
              return (
                <MerchCard key={_id} title={title} indexNumber={index} price={price} image={image} description ={description} slug={slug}/>
              )
            })}
          </div>
          <div className="flex lg:hidden flex-col px-5 py-24 md:mx-24 md:py-40 items-center gap-20">
            {merch.map((merch, index) => {
              const {title, price, image, description, _id, slug} = merch;
              return (
                <MerchCardMobile key={_id} title={title} indexNumber={index} price={price} image={image} description ={description} slug={slug}/>
              )
            })}
          </div>
        </section>
{/* Concerts */}
        <section className="m-auto max-w-[1440px]">
            <div className="px-5 py-24 md:px-24 lg:py-40">
              <h2 id="concerts" className="text-[40px] text-center md:text-[64px] md:text-left">Konserter</h2>
              <hr/>
              <div className="hidden lg:flex flex-col py-8">
                {concerts.length > 0 ? concerts.map((concert) =>{
                  const {_id, _createdAt, venue, location, ticketUrl, datetime} = concert;
                  return(
                    <ConcertCard key={_id} _id={_id} createdAt={_createdAt} venue={venue} location={location} ticketUrl={ticketUrl} datetime={datetime} />
                  )
                }): <p>Det er ingen kommende konserter for øyeblikket.</p>}
              </div>
              <div className="md:hidden flex flex-col gap-12 py-11">
                {concerts.length > 0 ? concerts.map((concert) =>{
                  const {_id, _createdAt, venue, location, ticketUrl, datetime} = concert;
                  return(
                    <ConcertCardMobile key={_id} _id={_id} createdAt={_createdAt} venue={venue} location={location} ticketUrl={ticketUrl} datetime={datetime}  />
                  )
                }) : <p className="text-center">Det er ingen kommende konserter for øyeblikket.</p>}
              </div>
            </div>
        </section>
{/* Contact         */}
        <section className="store-section  bg-gradient-to-r from-[rgba(179,222,234,0.25)] to-[rgba(4,152,193,0.02)] m-auto">
          <div className="px-5 flex flex-col justify-center items-center gap-6 py-24 md:px-24 lg:py-40">
            <div>
              <h2 id="contact" className="text-[40px] text-center md:text-[64px]">Booking</h2>
              <p className="text-center">Ønsker du å booke meg til en spillejobb? Ta kontakt!</p>
            </div>
            <ContactForm />
            </div>
        </section>
{/* Footer */}
        <footer>

        </footer>
    </div>
  );
}
