"use client";
import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import LanguageIcons from "@/components/home/LanguageIcons";

export default function Home() {
  return (
    <MainLayout>
      <LanguageIcons />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center relative overflow-hidden"
      >
        {/* Left side - Introduction */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 z-10"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg mb-4"
          >
            Hi all. I am
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl md:text-6xl font-bold mb-6"
          >
            SYED MUZAMMIL AHMAD BUKHARI
          </motion.h1>
          <TypeAnimation
            sequence={[
              "> FULL STACK MERN DEVELOPER",
              1000,
              "> PRODUCT-BASED SOLUTIONS SPECIALIST",
              1000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-md md:text-md text-[#4D5BCE] mb-8"
          />

          <div className="text-left mb-8">
            <p className="text-[#607B96] mb-2">
              {/* Turn Your Dream Project Into Real Time Application */}
            </p>
            <TypeAnimation
              sequence={[
                "> Start Your Development Carrer With Me",
                1000,
                "> Code Your Way to Financial Freedom",
                1000,
                "> Start Learning New Technologies Today",
                1000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-md md:text-md text-[#ffffff] mb-4 mt-4"
            />
            <p className="text-[#607B96] mb-4">{/* Find My Profile On Github: */}</p>
            <div className="text-[#E5E9F0]">
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD]">githubLink</span> ={" "}
              <span className="text-[#E99287]">
                &quot;https://github.com/example/url&quot;
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right side - Code blocks with glow effect */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center relative"
        >
          {/* Image code block */}
          <div className="relative mt-10 mb-8 max-w-md w-full ">
            <div className="absolute inset-0 bg-[#615FFF] opacity-50 blur-xl rounded-lg"></div>
            <div className="relative bg-[#011627] border border-[#43D9AD] rounded-lg p-4 font-mono text-sm">
              <Image
                src="/icons/profile.png"
                alt="Code block"
                width={600}
                height={400}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
