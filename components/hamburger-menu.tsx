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
        {!toggleNav ? 
        <div>
            <div onClick={toggleHamburgerNav} className="flex h-11 items-center ">
                <Image className="hover:cursor-pointer" src={"/hamburger-menu.svg"} height={16} width={32.5} alt="hamburger menu" />
            </div>
        </div> : null} 
        <nav className={`bg-no-repeat bg-center bg-auto bg-burger w-screen transition-[height] duration-900ms ease-in-out flex justify-start overflow-hidden flex-col items-center text-2xl  absolute top-0 left-0 ${toggleNav ? "h-[872px]" : "h-0"}`}>
                <div className="hover:cursor-pointer self-end px-5 sm:px-8 mr-3 mt-2 md:px-24 py-8 " onClick={toggleHamburgerNav}>
                     <Image src={"/hamburger-menu-close.svg"} height={14} width={28.5} alt="hamburger menu" />
                </div>
                 <ul className="items-center gap-12 flex flex-1 justify-center flex-col">
                    <li><a href="#about" className="hover:underline underline-offset-8">Om</a></li>
                    <li><a href="#contact" className="hover:underline underline-offset-8">Kontakt</a></li>
                    <li><a href="#store" className="hover:underline underline-offset-8">Vinyl</a></li>
                    <li><a href="#booking" className="hover:underline underline-offset-8">Booking</a></li>
                </ul>
        </nav> 
    </div>
   )
}