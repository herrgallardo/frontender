"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { AboutPageContent } from "@/lib/types/types"

interface RunningSectionProps {
  content: AboutPageContent["sections"]["running"]
}

const RunningSection: React.FC<RunningSectionProps> = ({ content }) => {
  const runningVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 bg-bright-cyan/20 px-6 md:px-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-12 text-bright-cyan text-shadow-sm text-shadow-black/50"
        >
          {content.title}
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            variants={runningVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-midnight-blue/40 p-6 rounded shadow-md shadow-black/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <p className="text-lg mb-6 text-aqua-green text-shadow-sm text-shadow-black/50">
                {content.description}
              </p>
              <h3 className="text-xl font-medium mb-4 text-bright-cyan text-shadow-xs text-shadow-black/40">
                {content.racesTitle}
              </h3>
              <ul className="space-y-2 text-white">
                {content.races.map((race, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-bright-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-shadow-xs text-shadow-black/40">
                      {race}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={runningVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="max-w-sm w-full shadow-md shadow-black/50 hover:scale-115 transition-all duration-300 hover:shadow-xl">
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RunningSection
