import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { AboutPageContent } from "@/lib/types/types"
import CVDownloadButton from "@/components/cv-download-button"

interface HeroSectionProps {
  content: AboutPageContent["hero"]
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-6 md:px-10">
      <div className="container mx-auto">
        {/* Title row with the image on small screens */}
        <div className="flex flex-row items-center mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-bright-cyan text-shadow-md text-shadow-black flex-1"
          >
            {content.title}
          </motion.h1>

          {/* Small floating image for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:hidden rounded-full overflow-hidden border-2 border-bright-cyan shadow-sm shadow-black ml-4"
          >
            <Image
              src={content.profileImage}
              alt={content.profileImageAlt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="prose prose-lg text-white max-w-none"
            >
              {content.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-sm sm:text-base md:text-lg ${
                    index === 0 ? "md:text-xl" : ""
                  } ${
                    index < content.description.length - 1 ? "mb-3 sm:mb-4" : ""
                  } text-shadow-sm text-shadow-black/50`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* CV Download Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 sm:mt-8"
            >
              <CVDownloadButton
                variant="primary"
                text="Download CV"
                iconPosition="left"
              />
            </motion.div>
          </div>

          {/* Larger image for tablet/desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 hidden md:flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-bright-cyan shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg">
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
