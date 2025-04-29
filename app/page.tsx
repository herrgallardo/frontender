"use client"

import Skills from "@/components/skills"

import Link from "next/link"
import Image from "next/image"
import { homePageContent } from "@/lib/data/data"
import HeroTypewriter from "@/components/hero-typewriter"

export default function Home() {
  const { hero, buttons, sections } = homePageContent

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="pt-36 pb-24 bg-gradient-to-b from-midnight-blue to-deep-teal text-white px-8 min-h-[100vh]"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center mt-8">
              {/* Typewriter and Image Container */}
              <div className="flex w-full mb-8 relative pr-6 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24 sm:pb-12">
                {/* Typewriter Container */}
                <div className="w-4/5 md:w-5/6">
                  <HeroTypewriter />
                </div>

                {/* Image Container */}
                <div className="w-1/5 md:w-1/6 relative hover:scale-125 transition-all duration-300">
                  <div className="absolute left-0 sm:left-4 md:left-2 lg:left-0 -top-2">
                    <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                      <Image
                        src="/images/hero-image.png"
                        alt="Hero image"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description and Buttons */}
              <div className="w-full text-center mt-6">
                <p className="text-xl sm:text-3xl mb-8 max-w-5xl mx-auto text-shadow-md text-shadow-black">
                  {hero.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/projects"
                    className="px-6 py-3 bg-bright-cyan text-midnight-blue font-semibold rounded-lg hover:bg-light-mint-green shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    {buttons.viewProjects}
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-transparent border-2 border-aqua-green text-aqua-green rounded-lg hover:bg-aqua-green font-semibold hover:text-midnight-blue shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    {buttons.contactMe}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="py-16 bg-aqua-green/10 text-midnight-blue px-4"
        >
          <Skills />
        </section>

        {/* Featured Projects Section */}
        <section
          id="projects"
          className="py-16 bg-gradient-to-b from-midnight-blue to-deep-teal text-white text-shadow-sm text-shadow-black/50 px-4"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">
              {sections.featuredProjects.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sections.featuredProjects.projects.map((project, idx) => (
                <div key={idx} className="bg-midnight-blue/80 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.briefDescription}
                  </p>
                  <Link
                    href={`/projects`}
                    className="underline text-bright-cyan hover:text-light-mint-green"
                  >
                    {buttons.learnMore}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          id="contact"
          className="py-16 bg-aqua-green text-midnight-blue px-4"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              {sections.contact.title}
            </h2>
            <p className="text-center max-w-lg mx-auto mb-6">
              {sections.contact.description}
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-bright-cyan text-midnight-blue rounded-lg hover:bg-light-mint-green shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg font-semibold"
              >
                {buttons.getInTouch}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
