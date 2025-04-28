"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { homePageContent } from "@/lib/data/data"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const headingVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const projectVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const featuredProjects = homePageContent.sections.featuredProjects.projects

  return (
    <div className="bg-gradient-to-b from-midnight-blue to-deep-teal text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            className="space-y-10"
          >
            <motion.div variants={headingVariants} className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bright-cyan text-shadow-md text-shadow-black">
                {homePageContent.sections.featuredProjects.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-aqua-green text-shadow-sm text-shadow-black/50">
                {homePageContent.sections.featuredProjects.description}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-16 mt-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={projectVariants}
                  custom={index}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-8 bg-midnight-blue/30 rounded-xl p-6 shadow-black/50 shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Project Image */}
                  <motion.div
                    className="w-full lg:w-1/2 relative overflow-hidden rounded-xl shadow-md shadow-black/50 aspect-video"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                        fill
                        priority={index === 0}
                      />
                    </div>
                  </motion.div>

                  {/* Project Information */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-bright-cyan text-shadow-sm text-shadow-black/50">
                        {project.title}
                      </h2>
                      <p className="text-lg text-aqua-green mb-4 text-shadow-xs text-shadow-black/40">
                        {project.briefDescription}
                      </p>
                      <p className="text-gray-200 mb-6 text-shadow-xs text-shadow-black/40">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-bright-cyan text-shadow-xs text-shadow-black/40">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-bright-cyan/20 text-aqua-green rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-bright-cyan text-midnight-blue font-semibold rounded-lg flex items-center gap-2 hover:bg-light-mint-green shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-transparent border-2 border-aqua-green text-aqua-green rounded-lg flex items-center gap-2 hover:bg-aqua-green font-semibold hover:text-midnight-blue shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Code</span>
                        <FaGithub size={16} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-aqua-green text-midnight-blue px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4">
            {homePageContent.sections.contact.title}
          </h2>
          <p className="text-center max-w-lg mx-auto mb-6">
            {homePageContent.sections.contact.description}
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-bright-cyan text-midnight-blue rounded-lg hover:bg-light-mint-green shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg font-semibold"
            >
              {homePageContent.buttons.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
