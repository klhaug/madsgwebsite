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

  return (
    <div>
        <section id="hero" className="m-auto bg-no-repeat  bg-cover bg-image bg-[center_center] max-w-[3840px] xl:bg-[position:center_60%] h-[600px] xl:h-[725px] 2xl:h-[900px] ">
          <header className="flex justify-center w-full">
              <nav id="nav" className="flex max-w-[1728px] w-full justify-between px-5 sm:px-10 md:px-24 py-8">
                <Link href="/" className="flex items-center font-main font-bold tracking-tighter h-11 text-2xl md:text-3xl">Mads Gjetmundsen</Link>
                <ul className="lg:flex items-center gap-12 hidden">
                  <li><a href="#about" className="hover:underline underline-offset-8">Om</a></li>
                  <li><a href="#store" className="hover:underline underline-offset-8">Vinyl</a></li>
                  <li><a href="#concerts" className="hover:underline underline-offset-8">Konserter</a></li>
                  <li><a href="#contact" className="flex justify-center items-center h-11 px-6 bg-blue-main hover:bg-blue-hover text-white">Booking</a></li>
                </ul>
                <HamburgerMenu/>
              </nav>
          </header>
        </section>
{/* About */}
        <section id="about" className="about-section m-auto max-w-[1440px]">
          <div className="px-4 py-24 md:px-24">
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
              <Image src={'/static/Mads.17-Copyright.Jan.Tore.Eriksen.jpg'} className="w-full sm:max-w-[400px]" height={400} width={400} alt='headshot mads'/>
              <div className="max-w-[510px] lg:hidden leading-8">
                    <PortableText  value={bio[1].content}/>
                  </div>
            </div>
           
          </div>
        </section>
{/* Store */}
<section id="store" className="store-section bg-gradient-to-r from-[rgba(179,222,234,0.15)] to-[rgba(4,152,193,0.12)] flex justify-center">
  <div className="max-w-[1440px] mx-auto py-5 px-5">
    <h2 className="text-[40px] px-5 pt-12 text-center md:text-[64px] md:text-left">Vinyl</h2>
    <hr className="max-w-[1440px] mx-auto"/>
    
    {/* Desktop Layout */}
    <div className="hidden lg:flex flex-col px-5 py-12 items-center gap-20">
      {merch.reverse().map((merch, index) => {
        const {title, price, image, description, _id, storeUrl} = merch;
        return (
          <MerchCard key={_id} storeUrl={storeUrl} title={title} indexNumber={index} price={price} image={image} description ={description}/>
        )
      })}
    </div>

    {/* Mobile Layout */}
    <div className="flex lg:hidden flex-col  py-12 items-center gap-12">
      {merch.map((merch) => {
        const {title, price, image, description, _id, storeUrl} = merch;
        return (
          <MerchCardMobile key={_id} title={title} price={price} storeUrl={storeUrl} image={image} description ={description}/>
        )
      })}
    </div>

  </div>
</section>
{/* Concerts */}
        <section className="m-auto max-w-[1440px]">
            <div className="px-5 py-12 md:px-44">
              <h2 id="concerts" className="text-[40px] text-center md:text-[64px] md:text-left">Konserter</h2>
              <hr/>
              <div className="hidden lg:flex flex-col py-8">
                {concerts.length > 0 ? concerts.map((concert) =>{
                  const {_id, venue, location, ticketUrl, datetime} = concert;
                  return(
                    <ConcertCard key={_id} venue={venue} location={location} ticketUrl={ticketUrl} datetime={datetime} />
                  )
                }): <p>Det er ingen kommende konserter for øyeblikket.</p>}
              </div>
              <div className="lg:hidden flex flex-col gap-12 py-11">
                {concerts.length > 0 ? concerts.map((concert) =>{
                  const {_id, venue, location, ticketUrl, datetime} = concert;
                  return(
                    <ConcertCardMobile key={_id} venue={venue} location={location} ticketUrl={ticketUrl} datetime={datetime}  />
                  )
                }) : <p className="text-center">Det er ingen kommende konserter for øyeblikket.</p>}
              </div>
            </div>
        </section>
{/* Contact         */}
        <section className="store-section  bg-gradient-to-r from-[rgba(179,222,234,0.25)] to-[rgba(4,152,193,0.02)] m-auto">
          <div className="px-5 flex flex-col justify-center items-center gap-6 py-12 md:px-24 ">
            <div>
              <h2 id="contact" className="text-[40px] text-center md:text-[64px]">Booking</h2>
              <p className="text-center">Ønsker du å booke meg? Ta kontakt!</p>
            </div>
            <ContactForm />
            </div>
        </section>
        <section className="store-section m-auto">
          <div className="px-5 flex flex-col justify-center items-center gap-6 py-24 md:px-24 ">
            <h2 className="text-[40px] text-center md:text-[64px]">Ta en lytt</h2>
          <iframe className="bg-white" src="https://open.spotify.com/embed/artist/6u80MBa8I5ZmeeWHtWadGK?utm_source=generator&theme=0" width="100%" height="400"  allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </section>
{/* Footer */}
        <footer className="bg-blue-main">
            <div className="m-auto max-w-[1440px] px-5 md:px-24 py-12">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-6 w-full">
                  <h2 className="text-white flex items-center font-main font-bold tracking-tighter h-11 text-3xl">Mads Gjetmundsen</h2>
                  <div className="flex flex-col md:flex-row gap-1 justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row justify-start">
                        <div className="flex flex-row gap-1 justify-start">
                          <Image src={"/static/call_24dp_FDFDFD_FILL0_wght400_GRAD0_opsz24.svg"}  className="" height={24} width={24} alt="email icon" />
                        </div>
                        <p className="text-[#fdfdfd] text-left">+ 47 902 35 356</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="flex flex-row gap-1 justify-start">
                          <Image src={"/static/location_on_24dp_FDFDFD_FILL0_wght400_GRAD0_opsz24.svg"} className="" height={24} width={24} alt="email icon" />
                        </div>
                        <p className="text-[#fdfdfd]">Engervannsveien 39, 1337 Sandvika</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="flex flex-row gap-1 justify-start">
                          <Image src={"/static/mail_24dp_FDFDFD_FILL0_wght400_GRAD0_opsz24.svg"}  className="" height={24} width={24} alt="email icon" />
                        </div>
                        <p className="text-[#fdfdfd]">booking@madsgjetmundsen.no</p>
                    </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href="https://www.facebook.com/Mads.Gjetmundsen.artist/" target="blank" className="text-[#fdfdfd] hover:underline">Facebook</a>
                      <a href="https://instagram.com/madsgjet" target="blank" className="text-[#fdfdfd] hover:underline">Instagram</a>
                      <a href="https://www.youtube.com/@madsgjet" target="blank" className="text-[#fdfdfd] hover:underline">YouTube</a>
                  </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-row gap-1 justify-start">
                      <Image src={"/static/copyright_24dp_FDFDFD_FILL0_wght400_GRAD0_opsz24.svg"}  className="" height={24} width={24} alt="email icon" />
                      <p className="text-[#fdfdfd]">Copyright <b><a className="hover:underline" target="blank"href="https://snougle.no">Snøugle AS</a></b> 2025</p>
                    </div>
                    <div className="flex flex-row gap-1 justify-start">
                      <Link className="text-[#fdfdfd] hover:underline" href={"/privacypolicy"}>Personvernserklæring</Link>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
        </footer>
    </div>
  );
}
