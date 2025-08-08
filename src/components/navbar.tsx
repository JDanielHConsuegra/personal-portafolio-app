"use client";
import Link from 'next/dist/client/link';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { LuSquareMenu } from 'react-icons/lu';
import { useState } from 'react';
import { LuMailPlus } from 'react-icons/lu';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center p-4 *:text-amber-950 sticky top-0 left-0 right-0 bg-white/80 z-50'>
        <div className='flex *:hover:text-amber-800 *:transition-colors *:cursor-pointer *:duration-400 items-center gap-1 *:text-3xl'>
        <Link href={"https://www.linkedin.com/in/juan-daniel-hern%C3%A1ndez-18335a335/?locale=es_ES"} target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
        </Link>
        <Link href="https://www.instagram.com/ljuanl_l2018l/" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
        </Link>
        
        <Link
      href="https://api.whatsapp.com/send?phone=573224049028&text=Hola%20Juan%20Daniel,%20me%20gustar%C3%ADa%20contactarte!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp/>
    </Link>
        <Link href={"https://github.com/JDanielHConsuegra"} target="_blank" rel="noopener noreferrer">
        <FaGithub/>
        </Link>
        <Link href={"mailto:jh.consuegra75@gmail.com"} target="_blank" rel="noopener noreferrer">
        <LuMailPlus/>
        </Link>
        </div>
        <button className=' cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setIsOpen(!isOpen)}>
        <LuSquareMenu className='text-3xl'/>
        </button>
        {
            isOpen && (
                <div className='absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2'>
                    <Link href="#Home" className='text-lg hover:text-amber-800 transition-colors duration-300'>Home</Link>
                    <Link href="#About" className='text-lg hover:text-amber-800 transition-colors duration-300'>About me</Link>
                    <Link href="#Studies" className='text-lg hover:text-amber-800 transition-colors duration-300'>Studies </Link>
                    <Link href="#Projects" className='text-lg hover:text-amber-800 transition-colors duration-300'>Projects</Link>
                </div>
            )
        }
        </nav>
    )
}