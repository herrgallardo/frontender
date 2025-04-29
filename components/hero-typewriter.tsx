"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { heroText, synonymMap } from "@/lib/data/data"
import SmartTypewriter from "@/components/smart-typewriter"

/**
 * The HeroTypewriter component used in the homepage
 */
const HeroTypewriter: React.FC = () => {
  // Use the current pathname as a reset key for navigation
  const resetKey = usePathname() || ""

  return (
    <div className="w-full rounded-lg bg-teal-blue/20 shadow-black/50 shadow-xs hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <div className="p-4 sm:p-12 rounded-lg min-h-20 sm:min-h-28 max-w-full">
        <SmartTypewriter
          text={heroText}
          resetKey={resetKey}
          typingSpeed={40}
          pauseProbability={0.02}
          synonymProbability={0.2}
          mistakeProbability={0.03}
          maxMistakeLength={3}
          backtrackProbability={0.01}
          synonymMap={synonymMap}
          containerClassName="font-sans text-white text-shadow-sm text-shadow-black/90 text-sm md:text-lg"
          cursorClassName="bg-bright-cyan"
        />
      </div>
    </div>
  )
}

export default HeroTypewriter
