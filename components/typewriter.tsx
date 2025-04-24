"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { heroText, synonymMap } from "@/lib/data/data"

// Map of QWERTY keyboard adjacency to simulate realistic typos
const keyAdjacency: Record<string, string[]> = {
  a: ["q", "w", "s", "z"],
  b: ["v", "g", "h", "n"],
  c: ["x", "d", "f", "v"],
  d: ["s", "e", "r", "f", "c", "x"],
  e: ["w", "s", "d", "r"],
  f: ["d", "r", "t", "g", "v", "c"],
  g: ["f", "t", "y", "h", "b", "v"],
  h: ["g", "y", "u", "j", "n", "b"],
  i: ["u", "j", "k", "o"],
  j: ["h", "u", "i", "k", "m", "n"],
  k: ["j", "i", "o", "l", ",", "m"],
  l: ["k", "o", "p", ";", "."],
  m: ["n", "j", "k", ","],
  n: ["b", "h", "j", "m"],
  o: ["i", "k", "l", "p"],
  p: ["o", "l", ";", "["],
  q: ["w", "a"],
  r: ["e", "d", "f", "t"],
  s: ["a", "w", "e", "d", "x", "z"],
  t: ["r", "f", "g", "y"],
  u: ["y", "h", "j", "i"],
  v: ["c", "f", "g", "b"],
  w: ["q", "a", "s", "e"],
  x: ["z", "s", "d", "c"],
  y: ["t", "g", "h", "u"],
  z: ["a", "s", "x"],
}

// Props for the AITypewriter component
type AITypewriterProps = {
  text: string // The full text to display
  typingSpeed: number // Base delay per character (ms)
  pauseProbability: number // Chance to pause before typing a character
  synonymProbability: number // Chance to try a synonym before correct word
  mistakeProbability: number // Chance to introduce a typo for each character
  maxMistakeLength: number // Maximum number of wrong chars in a typo
  backtrackProbability: number // Chance to delete & retype a character
  resetKey: string // Key that triggers a reset (e.g. route path)
}

const AITypewriter: React.FC<AITypewriterProps> = ({
  text,
  typingSpeed,
  pauseProbability,
  synonymProbability,
  mistakeProbability,
  maxMistakeLength,
  backtrackProbability,
  resetKey,
}) => {
  // State to hold the current displayed text
  const [displayedText, setDisplayedText] = useState<string>("")
  // Whether typing is in progress
  const [isTyping, setIsTyping] = useState<boolean>(true)
  // Cursor visibility toggles for blinking effect
  const [cursorVisible, setCursorVisible] = useState<boolean>(true)

  // Blink the cursor every 530ms
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  // Main typing effect; resets whenever resetKey changes
  useEffect(() => {
    let active = true // Flag to cancel outstanding async tasks

    // Reset state
    setDisplayedText("")
    setIsTyping(true)

    // Utility: wait for ms milliseconds
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

    // Pick a realistic wrong character near the intended key
    const getWrongChar = (correct: string) => {
      const lower = correct.toLowerCase()
      const adj = keyAdjacency[lower] || []
      const choice = adj.length
        ? adj[Math.floor(Math.random() * adj.length)]
        : String.fromCharCode(97 + Math.floor(Math.random() * 26))
      // Preserve case
      return /[A-Z]/.test(correct) ? choice.toUpperCase() : choice
    }

    // Type a single character with behavior:
    // - random pauses
    // - occasional typos (multiple wrong chars then delete)
    // - minor backtrack (delete & retype)
    // - punctuation pauses
    // - variable delay
    const typeChar = async (char: string) => {
      if (!active) return
      // Thinking pause
      if (Math.random() < pauseProbability) {
        await wait(50 + Math.random() * 100) // shorter thinking pause
      }
      // Introduce typo
      if (Math.random() < mistakeProbability && /[A-Za-z0-9]/.test(char)) {
        const wrongCount = Math.ceil(Math.random() * maxMistakeLength)
        for (let i = 0; i < wrongCount; i++) {
          if (!active) return
          setDisplayedText((p) => p + getWrongChar(char))
          await wait(typingSpeed * 0.8)
        }
        // Pause to show typo
        await wait(typingSpeed * 1.5)
        // Delete each wrong char
        for (let i = 0; i < wrongCount; i++) {
          if (!active) return
          setDisplayedText((p) => p.slice(0, -1))
          await wait(typingSpeed * 0.6)
        }
      }
      if (!active) return
      // Type the intended character
      setDisplayedText((p) => p + char)
      // Quick backtrack: delete & retype
      if (Math.random() < backtrackProbability) {
        await wait(typingSpeed * 0.8)
        setDisplayedText((p) => p.slice(0, -1))
        await wait(typingSpeed * 0.8)
        setDisplayedText((p) => p + char)
      }
      // Pause on punctuation
      if (/[.,!?]/.test(char)) {
        await wait(20 + Math.random() * 80) // shorter punctuation pause
      }
      if (!active) return
      // Standard inter-character delay
      await wait(typingSpeed * (0.9 + Math.random() * 0.2))
    }

    // Delete a single character (used after synonyms and typos)
    const deleteChar = async () => {
      if (!active) return
      setDisplayedText((p) => p.slice(0, -1))
      await wait(typingSpeed * (0.6 + Math.random() * 0.2))
    }

    // Run through tokens (words & punctuation segments)
    // Insert synonyms occasionally, then correct to original
    const run = async () => {
      const tokens = text.match(/([A-Za-z-]+|[^A-Za-z-]+)/g) || []
      for (const token of tokens) {
        if (!active) break
        const syn = synonymMap[token]
        if (syn && Math.random() < synonymProbability) {
          // Type synonym
          for (const c of syn) await typeChar(c)
          // Delete synonym
          for (let i = 0; i < syn.length; i++) await deleteChar()
          // Type correct token
          for (const c of token) await typeChar(c)
        } else {
          // Just type the token
          for (const c of token) await typeChar(c)
        }
      }
      if (active) {
        setIsTyping(false) // Mark typing done
      }
    }

    void run() // Start the typing sequence
    return () => {
      active = false
    } // Cleanup cancels pending tasks
  }, [
    resetKey,
    text,
    typingSpeed,
    pauseProbability,
    synonymProbability,
    mistakeProbability,
    maxMistakeLength,
    backtrackProbability,
  ])

  return (
    <div className="font-sans text-white">
      <div className="relative">
        {/* Display the current text */}
        <span>{displayedText}</span>
        {/* Blinking cursor */}
        <span
          className={`${
            cursorVisible && isTyping ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100 inline-block w-0.5 h-5 bg-bright-cyan ml-0.5 relative top-0.5`}
        />
      </div>
    </div>
  )
}

// Main Typewriter component that resets on route changes
const Typewriter: React.FC = () => {
  // Use the current pathname as a reset key for navigation
  const resetKey = usePathname() || ""

  return (
    <div className="p-4 max-w-2xl mx-auto rounded-lg bg-midnight-blue/95 my-12">
      <div className="p-4 rounded-lg mb-6 min-h-32">
        <AITypewriter
          key={resetKey} // Force remount on route change
          resetKey={resetKey} // Trigger effect reset
          text={heroText}
          typingSpeed={40}
          pauseProbability={0.02}
          synonymProbability={0.2}
          mistakeProbability={0.03}
          maxMistakeLength={3}
          backtrackProbability={0.01}
        />
      </div>
    </div>
  )
}

export default Typewriter
