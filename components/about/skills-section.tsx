"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SkillItem } from "@/lib/types/types"

interface SkillsSectionProps {
  skills: SkillItem[]
  sectionTitle: string
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  sectionTitle,
}) => {
  const skillVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="py-16 bg-deep-teal/30 px-6 md:px-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-12 text-bright-cyan text-shadow-sm text-shadow-black/50"
        >
          {sectionTitle}
        </motion.h2>
        <motion.div
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={skillVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-midnight-blue/60 p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-12 h-12 mb-3 relative">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-center text-aqua-green font-medium text-shadow-xs text-shadow-black/40">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
