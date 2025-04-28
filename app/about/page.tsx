"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  experience,
  education,
  languages,
  skills,
  aboutPageContent,
} from "@/lib/data/data"

const About = () => {
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const experienceVariants = {
    initial: { opacity: 0, x: -50 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const educationVariants = {
    initial: { opacity: 0, x: 50 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

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
    <div className="bg-gradient-to-b from-midnight-blue to-deep-teal text-white min-h-screen">
      {/* Hero Section */}
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
                {aboutPageContent.hero.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="prose prose-lg text-white max-w-none"
              >
                {aboutPageContent.hero.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-${index === 0 ? "xl" : "lg"} ${
                      index < aboutPageContent.hero.description.length - 1
                        ? "mb-4"
                        : ""
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
                  src={aboutPageContent.hero.profileImage}
                  alt={aboutPageContent.hero.profileImageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience and Education */}
      <section className="py-16 bg-midnight-blue/30 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Experience */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold mb-10 text-bright-cyan text-shadow-sm text-shadow-black/50"
              >
                {aboutPageContent.sections.experience.title}
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative ml-24 md:ml-34 lg:ml-34"
              >
                <div className="space-y-6">
                  {experience
                    .slice(0, aboutPageContent.sections.experience.showRecent)
                    .map((item, index, array) => {
                      const isLastItem = index === array.length - 1

                      return (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={experienceVariants}
                          className="pl-6 relative group"
                        >
                          {/* Circle with cyan border */}
                          <div
                            className="absolute w-4 h-4 bg-midnight-blue border-2 border-bright-cyan rounded-full z-10 shadow shadow-black/20 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:bg-white"
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
                          <div className="bg-midnight-blue/40 p-6 rounded-xl shadow-black/50 shadow-sm hover:shadow-lg duration-300 max-w-lg md:max-w-xl w-full hover:scale-105 peer-hover:scale-105 transition-all">
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
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-center mt-6"
                >
                  <p className="text-aqua-green italic text-shadow-xs text-shadow-black/40">
                    {aboutPageContent.sections.experience.recentText}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Education */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold mb-10 text-bright-cyan text-shadow-sm text-shadow-black/50"
              >
                {aboutPageContent.sections.education.title}
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative ml-24 md:ml-34 lg:ml-34"
              >
                <div className="space-y-6">
                  {education
                    .slice(0, aboutPageContent.sections.education.showRecent)
                    .map((item, index, array) => {
                      const isLastItem = index === array.length - 1

                      return (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={educationVariants}
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
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-center mt-6"
                >
                  <p className="text-aqua-green italic text-shadow-xs text-shadow-black/40">
                    {aboutPageContent.sections.education.recentText}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 bg-midnight-blue/50 px-6 md:px-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-center mb-12 text-bright-cyan text-shadow-sm text-shadow-black/50"
          >
            {aboutPageContent.sections.languages.title}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
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
                  {[...Array(aboutPageContent.sections.languages.maxLevel)].map(
                    (_, i) => (
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
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-deep-teal/30 px-6 md:px-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-12 text-bright-cyan text-shadow-sm text-shadow-black/50"
          >
            {aboutPageContent.sections.skills.title}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
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
      {/* Running Section */}
      <section className="py-16 bg-bright-cyan/20 px-6 md:px-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-12 text-bright-cyan text-shadow-sm text-shadow-black/50"
          >
            {aboutPageContent.sections.running.title}
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
                  {aboutPageContent.sections.running.description}
                </p>
                <h3 className="text-xl font-medium mb-4 text-bright-cyan text-shadow-xs text-shadow-black/40">
                  {aboutPageContent.sections.running.racesTitle}
                </h3>
                <ul className="space-y-2 text-white">
                  {aboutPageContent.sections.running.races.map(
                    (race, index) => (
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
                    )
                  )}
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
                  src={aboutPageContent.sections.running.image}
                  alt={aboutPageContent.sections.running.imageAlt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
