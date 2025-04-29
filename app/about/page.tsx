"use client"

import React, { useRef } from "react"
import {
  experience,
  education,
  languages,
  skills,
  aboutPageContent,
} from "@/lib/data/data"

// Import components
import HeroSection from "@/components/about/hero-section"
import ExperienceTimeline from "@/components/about/experience-timeline"
import EducationTimeline from "@/components/about/education-timeline"
import LanguagesSection from "@/components/about/languages-section"
import SkillsSection from "@/components/about/skills-section"
import RunningSection from "@/components/about/running-section"

const About = () => {
  // Create refs
  const experienceSectionRef = useRef<HTMLDivElement>(null)
  const educationSectionRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-gradient-to-b from-midnight-blue to-deep-teal text-white min-h-screen">
      {/* Hero Section */}
      <HeroSection content={aboutPageContent.hero} />

      {/* Experience and Education */}
      <section className="py-16 bg-midnight-blue/30 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Experience */}
            <ExperienceTimeline
              experiences={experience}
              sectionTitle={aboutPageContent.sections.experience.title}
              showRecent={aboutPageContent.sections.experience.showRecent}
              recentText={aboutPageContent.sections.experience.recentText}
              showAllButtonText={
                aboutPageContent.sections.experience.showAllButtonText
              }
              showRecentButtonText="Show Recent Only"
              // Use type assertion to fix the TypeScript error
              sectionRef={
                experienceSectionRef as React.RefObject<HTMLDivElement>
              }
            />

            {/* Education */}
            <EducationTimeline
              educations={education}
              sectionTitle={aboutPageContent.sections.education.title}
              showRecent={aboutPageContent.sections.education.showRecent}
              recentText={aboutPageContent.sections.education.recentText}
              showAllButtonText={
                aboutPageContent.sections.education.showAllButtonText
              }
              showRecentButtonText={
                aboutPageContent.sections.education.showRecentButtonText
              }
              // Use type assertion to fix the TypeScript error
              sectionRef={
                educationSectionRef as React.RefObject<HTMLDivElement>
              }
            />
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <LanguagesSection
        languages={languages}
        sectionTitle={aboutPageContent.sections.languages.title}
        maxLevel={aboutPageContent.sections.languages.maxLevel}
      />

      {/* Skills Section */}
      <SkillsSection
        skills={skills}
        sectionTitle={aboutPageContent.sections.skills.title}
      />

      {/* Running Section */}
      <RunningSection content={aboutPageContent.sections.running} />
    </div>
  )
}

export default About
