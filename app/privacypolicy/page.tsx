import HamburgerMenu from '@/components/hamburger-menu'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div>
      <section id="hero" className="m-auto">
          <header className="flex justify-center">
              <nav id="nav" className="flex max-w-[1728px] w-full justify-between border-b px-5 sm:px-10 md:px-24 py-8">
                <Link href="/" className="flex items-center font-main font-bold tracking-tighter h-11 text-2xl">Mads Gjetmundsen</Link>
                <Link href={`/`} className="bg-blue-main flex items-center gap-3  justify-center text-white px-6  h-11 font-sec hover:bg-blue-hover"><Image src={"/static/arrow_back_24dp_FDFDFD_FILL0_wght400_GRAD0_opsz24.svg"} width={20} height={20} alt="back arrow svg" />Tilbake</Link>
              </nav>
          </header>
        </section>
        <section className='m-auto max-w-[1440px] font-sec'>
            <div className='px-5 py-10 md:px-24 lg:px-48'>
                <h1 className='text-2xl md:text-[40px] font-sec mb-4'>Personvernserklæring</h1>
                <p className='text-md md:text-xl mt-2'><b>Sist oppdatert: 12.02.2025</b></p><br/>
                <p className='text-xl'>Vi tar personvernet ditt på alvor. Denne personvernserklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjonen du oppgir i vårt kontaktskjema.</p>
                <br/>
                <h2 className='text-xl md:text-[32px] font-sec'>1. Hvilken informasjon samler vi inn?</h2>
                <p className='text-md md:text-xl mt-2'>Når du fyller ut vårt kontaktskjema, samler vi kun inn følgende opplysninger:</p><br/>
                <ul className='list-disc ml-5'>
                    <li className=''>Navn</li>
                    <li className=''>E-postadresse</li>
                    <li className=''>Melding</li>
                </ul>
                <br/>
                <h2 className='text-xl md:text-[32px] font-sec'>2. Hvordan bruker vi informasjonen?</h2>
                <p className='text-md md:text-xl mt-2'>Informasjonen du oppgir brukes utelukkende til å svare på henvendelsen din. Vi deler ikke opplysningene dine med tredjeparter og bruker dem ikke til markedsføringsformål.</p><br/>
                <h2 className='text-xl md:text-[32px] font-sec'>3. Lagring og sikkerhet</h2>
                <p className='text-md md:text-xl mt-2'>Vi lagrer informasjonen din kun så lenge det er nødvendig for å besvare forespørselen din. Deretter slettes den sikkert.</p><br/>
                <h2 className='text-xl md:text-[32px] font-sec'>4. Dine rettigheter</h2>
                <p className='text-md md:text-xl mt-2'>Du kan når som helst be oss om å slette eller endre informasjonen du har sendt inn. Ta kontakt dersom du ønsker dette.</p><br/>
                <h3 className='text-xl md:text-[26px] font-sec'>Kontakt oss:</h3>
                <p className='text-md md:text-xl mt-2'>Hvis du har spørsmål om vår personvernpraksis, ta gjerne kontakt på mads.gjetmundsen@gmail.com.

                </p><br/>
            </div>
        </section>
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
                        <p className="text-[#fdfdfd] text-left">+ 47 123 45 123</p>
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
                        <p className="text-[#fdfdfd]">mads.gjetmundsen@gmail.com</p>
                    </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href="https://facebook.com" target="blank" className="text-[#fdfdfd] hover:underline">Facebook</a>
                      <a href="https://instagram.com" target="blank" className="text-[#fdfdfd] hover:underline">Instagram</a>
                      <a href="https://youtube.com" target="blank" className="text-[#fdfdfd] hover:underline">YouTube</a>
                  </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-row gap-1 justify-start">
                      <Image src={"/static/copyright_24dp_FDFDFD_FILL0_wght400_GRAD0_opsz24.svg"}  className="" height={24} width={24} alt="email icon" />
                      <p className="text-[#fdfdfd]">Copyright <b><a className="hover:underline" href="https://snougle.no">Snøugle AS</a></b> 2025</p>
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
  )
}
