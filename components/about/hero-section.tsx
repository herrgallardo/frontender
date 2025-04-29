"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { AboutPageContent } from "@/lib/types/types"

interface HeroSectionProps {
  content: AboutPageContent["hero"]
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className="pt-36 pb-24 px-6 md:px-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="w-full lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-bright-cyan text-shadow-md text-shadow-black"
            >
              {content.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="prose prose-lg text-white max-w-none"
            >
              {content.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-${index === 0 ? "xl" : "lg"} ${
                    index < content.description.length - 1 ? "mb-4" : ""
                  } text-shadow-sm text-shadow-black/50`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-bright-cyan shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Image
                src={content.profileImage}
                alt={content.profileImageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
