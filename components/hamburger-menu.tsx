'use client'

import Image from "next/image";
import { useState } from "react";

export default function HamburgerMenu() {

const [toggleNav, setToggleNav] = useState(false)

function toggleHamburgerNav() {
    if(document.body.classList.contains("overflow-hidden")){
        document.body.classList.remove("overflow-hidden"); 
    } else {
        document.body.classList.add("overflow-hidden")
    }
        setToggleNav(!toggleNav);
}

   return (
    <div className="lg:hidden">
   
        <div id="nav-overlay" className={`absolute left-0 bg-gradient-to-t from-[#F3FAFF] to-white  top-0 w-[100%] transition-all duration-300 ease-in-out overflow-clip ${toggleNav ? "max-h-[3000px]" : "max-h-0 "} `}>
         <div onClick={toggleHamburgerNav} className="flex items-center justify-end px-10 py-8 md:px-24 ">
            <Image className="hover:cursor-pointer z-50" src={"/hamburger-menu-close.svg"} height={32.5} width={32.5} alt="hamburger menu" />
        </div>
            <nav className="flex flex-col justify-center h-[calc(100vh-50px)] -mt-10 items-center text-2xl">
                <a onClick={toggleHamburgerNav} href="#about" className="leading-[64px] hover:font-semibold">Om</a>
                <a onClick={toggleHamburgerNav} href="#store" className="leading-[64px] hover:font-semibold" >Vinyl</a>
                <a onClick={toggleHamburgerNav} href="#concerts" className="leading-[64px] hover:font-semibold" >Konserter</a>
                <a onClick={toggleHamburgerNav} href="#contact" className="leading-[64px] hover:font-semibold" >Booking</a>
            </nav>
        </div>
        <div onClick={toggleHamburgerNav} className={`flex h-11 items-center transition-opacity delay-[250ms] duration-0 ${toggleNav ? 'opacity-0 invisible' : 'opacity-100 visible'} `}>
            <Image className="hover:cursor-pointer z-50" src={"/hamburger-menu.svg"} height={12} width={28} alt="hamburger menu" />
        </div>
</div>
)
   
}
