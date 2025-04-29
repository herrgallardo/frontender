"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { LanguageItem } from "@/lib/types/types"

interface LanguagesSectionProps {
  languages: LanguageItem[]
  sectionTitle: string
  maxLevel: number
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  languages,
  sectionTitle,
  maxLevel,
}) => {
  const languageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="py-16 bg-midnight-blue/50 px-6 md:px-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center mb-12 text-bright-cyan text-shadow-sm text-shadow-black/50"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              custom={index}
              variants={languageVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-midnight-blue/80 p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={language.icon}
                  alt={language.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-aqua-green text-shadow-xs text-shadow-black/40">
                {language.name}
              </h3>
              <div className="flex mt-2">
                {[...Array(maxLevel)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < parseInt(language.level)
                        ? "text-bright-cyan"
                        : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LanguagesSection
