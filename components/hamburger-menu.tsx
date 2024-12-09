'use client'

import Image from "next/image";
import { useState } from "react";

export default function HamburgerMenu() {

const [toggleNav, setToggleNav] = useState(false)

function toggleHamburgerNav() {
    return setToggleNav(!toggleNav)
}

   return (
    <div className="md:hidden">
        {!toggleNav ? <div>
            <div onClick={toggleHamburgerNav} className="flex h-11 items-center ">
                <Image className="hover:cursor-pointer" src={"/hamburger-menu.svg"} height={16} width={32.5} alt="hamburger menu" />
            </div>
        </div> : null}
        {toggleNav ? <nav className="m-auto bg-no-repeat bg-center bg-cover bg-burger max-w-[1440px] w-screen h-screen flex justify-center flex-col items-center text-2xl  absolute top-0 left-0">
            <div className="hover:cursor-pointer" onClick={toggleHamburgerNav}>
                 <Image src={"/hamburger-menu-close.svg"} height={16} width={32.5} alt="hamburger menu" />
            </div>
        <ul className="items-center gap-12 h-20 flex flex-col">
                <li><a href="#about" className="hover:underline underline-offset-8">Om</a></li>
                <li><a href="#contact" className="hover:underline underline-offset-8">Kontakt</a></li>
                <li><a href="#store" className="hover:underline underline-offset-8">Vinyl</a></li>
                <li><a href="#booking" className="hover:underline underline-offset-8">Booking</a></li>
              </ul>
        </nav> : null}
    </div>
   )
}