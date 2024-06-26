"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-bold">
            <span className="text-[#ae9807]">
              Hello, I&apos;m{" "}
              Zakaria
            </span>
            <br></br>
            <span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Front-End developer",
                1000,
                "Junior MERN Stack Developer",
                1000,
              ]}
              className="text-slate-500"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Creating & Developing <br/>
            user friendly and eye-catching
             modern website.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-600 text-white mt-3"
            >
              <span 
              className="block bg-gradient-to-br from-[#ae9807] to-[#f1e7cc] hover:bg-slate-800 text-black font-bold rounded-full px-6 py-2"
              >
               Hire Me
               </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1e0K3SimU4MMx9FFy1u74Fz4R2GCg8xnn/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-600 text-white mt-3"
            >
              <span 
              
              className="block bg-gradient-to-br from-[#ae9807] to-[#f1e7cc] hover:bg-slate-800 text-black font-bold rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[300px] relative">
            <Image
              src="/20240503_03563900.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={350}
              height={100}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;