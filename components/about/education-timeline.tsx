"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { EducationItem } from "@/lib/types/types"

interface EducationTimelineProps {
  educations: EducationItem[]
  sectionTitle: string
  showRecent: number
  recentText: string
  showAllButtonText: string
  showRecentButtonText: string
  sectionRef?: React.RefObject<HTMLDivElement>
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  educations,
  sectionTitle,
  showRecent,
  recentText,
  showAllButtonText,
  showRecentButtonText,
  sectionRef,
}) => {
  const [showAll, setShowAll] = useState(false)
  const internalRef = useRef<HTMLDivElement>(null)

  // Function to handle toggling section
  const toggleSection = (showAll: boolean) => {
    setShowAll(showAll)
    // If toggling back to show fewer items, scroll to section title
    if (!showAll) {
      setTimeout(() => {
        // Use the provided ref if it exists, otherwise use internal ref
        const currentRef = sectionRef?.current || internalRef.current
        if (currentRef) {
          window.scrollTo({
            top: currentRef.offsetTop - 100,
            behavior: "smooth",
          })
        }
      }, 250)
    }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, x: 50 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: Math.min(0.2 * i, 1.0),
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
    },
  }

  return (
    <div>
      <motion.h2
        // Use internal ref if no external ref is provided
        ref={sectionRef ? sectionRef : internalRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-10 text-bright-cyan text-shadow-sm text-shadow-black/50"
      >
        {sectionTitle}
      </motion.h2>
      <motion.div
        key={showAll ? "expanded" : "collapsed"}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative ml-24 md:ml-34 lg:ml-34"
      >
        <div className="space-y-6">
          {educations
            .slice(0, showAll ? educations.length : showRecent)
            .map((item, index, array) => {
              const isLastItem = showAll
                ? index === array.length - 1
                : index === showRecent - 1

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  className="pl-6 relative group"
                >
                  {/* Circle with cyan border */}
                  <div
                    className="absolute w-4 h-4 bg-midnight-blue border-2 border-bright-cyan rounded-full z-10 shadow shadow-black/50 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:bg-white"
                    style={{
                      left: "0",
                      top: "8px",
                      transform: "translateX(-50%)",
                    }}
                  ></div>

                  {/* Line segment (not shown for last item) */}
                  {!isLastItem && (
                    <div
                      className="absolute border-l-2 border-bright-cyan shadow shadow-black/20"
                      style={{
                        left: "0",
                        top: "8px",
                        height: "calc(100% + 34px)",
                        transform: "translateX(-50%)",
                      }}
                    ></div>
                  )}

                  {/* Date - outside, left of dot */}
                  <div
                    className="absolute text-bright-cyan font-semibold w-[80px] md:w-[140px] text-xs md:text-sm rounded-lg bg-midnight-blue p-2 shadow-black/50 shadow-sm group-hover:scale-102 group-hover:shadow-lg transition-all duration-300 text-shadow-xs text-shadow-black/40 hover:scale-102 hover:shadow-lg peer"
                    style={{
                      right: "calc(100% + 18px)",
                      textAlign: "center",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.date}
                  </div>

                  {/* Content */}
                  <div className="bg-midnight-blue/40 p-6 rounded-xl shadow-black/50 shadow-sm hover:shadow-lg duration-300 max-w-xl w-full hover:scale-105 peer-hover:scale-105 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 relative flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-medium text-bright-cyan text-shadow-xs text-shadow-black/40">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-aqua-green text-shadow-xs text-shadow-black/40">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-200 text-shadow-xs text-shadow-black/40">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-8"
        >
          {!showAll ? (
            <div>
              <p className="text-aqua-green italic mb-4 text-shadow-xs text-shadow-black/40">
                {recentText}
              </p>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onClick={() => toggleSection(true)}
                className="px-6 py-3 bg-bright-cyan text-midnight-blue font-semibold rounded-lg shadow-sm shadow-black transition-all duration-300"
              >
                {showAllButtonText}
              </motion.button>
            </div>
          ) : (
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => toggleSection(false)}
              className="px-6 py-3 bg-transparent border-2 border-bright-cyan text-bright-cyan font-semibold rounded-lg shadow-sm shadow-black transition-all duration-300 hover:bg-bright-cyan/10"
            >
              {showRecentButtonText}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EducationTimeline
