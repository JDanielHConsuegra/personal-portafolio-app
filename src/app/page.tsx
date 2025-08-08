"use client";
import { Imgtext } from "@/components/ImgText";
import { ProyectCard } from "@/components/ProyectCard";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center p-4 h-screen">
    <section className="mt-2 flex flex-col items-center p-5 mb-20" id="Home">
    <Image className="border-2 rounded border-black" src={"https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/developer_hm8c7d.gif"} alt="Logo" width={400} height={400} />
    <Image src={"https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/intro_ktzygi.png"} alt="Logo" width={500} height={300} className="mt-10 min-w-[180px] min-h-[100px] hover:scale-105 transition-all duration-200 grayscale-100 hover:grayscale-0 cursor-pointer" />
    </section>
    <section id="About" className="p-10 flex flex-col items-center"> 
    <Image src={"https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612384/noBusques_iasvuq.png"} className="mt-10 min-w-[180px] min-h-[60px] hover:scale-105 grayscale-100 hover:grayscale-0 transition-all duration-200 cursor-pointer" alt="Introducción" width={500} height={300} />
    <p className="font-bold text-black text-center">I am Juan, a frontend developer focused on creating scalable, responsive, and visually appealing interfaces. I work with Next.js, React, and TailwindCSS, optimizing every project for efficient deployment and a flawless user experience. <span>If you want to get in touch, <Link className=" hover:underline text-blue-950" href={"mailto:jh.consuegra75@gmail.com"}>here is my email</Link></span>
    </p>
    <Image src={"https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/imagen_perfil_cv_cfpia3.jpg"} className="mt-10 rounded-full border-2 border-black hover:scale-105 transition-transform duration-200 cursor-pointer shadow-2xl" alt="Introducción" width={300} height={500}  />
    <div className="flex flex-wrap items-baseline-last justify-center gap-5 mt-10 mb-10">
    <FaJs className="text-8xl cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200 text-yellow-500" />
    <SiTypescript className="text-8xl cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200 text-blue-600" />
    <FaReact className="text-8xl cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200 text-blue-400" />
    <RiNextjsFill className="text-8xl cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200 text-black" />
    <FaNodeJs className="text-8xl cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200 text-green-600" />
    <BiLogoTailwindCss className="text-8xl cursor-pointer grayscale-100 hover:grayscale-0 transition-all duration-200 text-sky-400" />
    </div>
    <Image src={"https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612384/studies_vjuke2.png"} id="Studies" className="mt-10 min-w-[230px] min-h-[110px] hover:scale-105 grayscale-100 hover:grayscale-0 transition-all duration-200 cursor-pointer" alt="CV" width={500} height={300} />
    <div className="flex flex-wrap items-baseline-last justify-center gap-5 mt-10">
      <Imgtext imageUrl="https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/ENAP_snvoz3.png" text="ENAP" link="https://www.enap.edu.co/" />
      <Imgtext imageUrl="https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/PLATZI_pmoqol.jpg" text="Platzi" link="https://platzi.com/" />
      <Imgtext imageUrl="https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/HENRY_cpgg0x.jpg" text="Henry" link="https://www.soyhenry.com/" />
      <Imgtext imageUrl="https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612384/Youtube_f8ushi.webp" text="YouTube" link="https://www.youtube.com/" />
    </div>
    </section>


    <section id="Projects" className="p-6 flex gap-10 flex-col items-center">
   <Image src={"https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612384/Projects_zdr6k2.png"} className="mt-10 hover:scale-105 grayscale-100 hover:grayscale-0 transition-all duration-200 cursor-pointer" alt="Proyectos" width={500} height={300} /> 
    <ProyectCard
      title="Electric-Bikes E-commerce"
      description="A robust and scalable e-commerce solution specifically designed for electric vehicle companies. Built using modern technologies like Next.js, React, and TypeScript, this platform ensures a smooth, secure, and highly customizable user experience."
      imageUrl="https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612383/Ecommerce_cidkbm.png"
      link="https://electric-bikes-e-commerce.vercel.app/"
    />
    <ProyectCard
      title="Import Management System"
      description="Web Application Overview
This web application is built with Next.js on the frontend and NestJS on the backend, specifically designed to optimize the management of business logistics and import processes.
"
      imageUrl="https://res.cloudinary.com/dvyrs30i1/image/upload/v1754612384/TradeTrack_nrlgi0.png"
      link="https://trade-track-nu.vercel.app/"/>
    </section>

    </div>
  );
}
