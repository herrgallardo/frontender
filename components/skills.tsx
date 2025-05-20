"use client"

import React from "react"
import { skills, homePageContent } from "@/lib/data/data"
import { motion } from "framer-motion"
import Image from "next/image"

const fadeInAnimationVariants = {
  initial: {
    x: 50,
    y: 100,
  },
  animate: (index: number) => ({
    x: 0,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.1 * index,
    },
  }),
}

const Skills = () => {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto px-4 pb-24">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white text-shadow-md text-shadow-black/50">
          {homePageContent.sections.skills.title}
        </h2>
        <div className="max-w-[53rem] mx-auto">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg text-white">
            {skills.map((skill, index) => (
              <motion.li
                className="px-2 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 bg-bright-cyan/20 rounded-xl flex items-center shadow-xs shadow-black/50 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                  <div className="text-xs sm:text-sm md:text-base">
                    {skill.name}
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      height={32}
                      width={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
