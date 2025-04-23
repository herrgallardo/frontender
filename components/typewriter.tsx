"use client"
import React, { useState, useEffect, useRef, useCallback } from "react"
import { heroText } from "@/lib/data/data"

type TypewriterProps = {
  text: string
  typingSpeed?: number
  pauseProbability?: number
  className?: string
}

const AITypewriter = ({
  text,
  typingSpeed = 5,
  pauseProbability = 0.03,
  className = "",
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Refs to store internal state
  const textToType = useRef(text)
  const originalText = useRef(text)
  const currentIndex = useRef(0)

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Function to simulate a pause in typing
  const pause = useCallback(() => {
    return new Promise<void>((resolve) => {
      const pauseDuration = Math.floor(Math.random() * 800) + 200
      setTimeout(resolve, pauseDuration)
    })
  }, [])

  // The main typing effect
  const typeText = useCallback(async () => {
    if (currentIndex.current >= textToType.current.length) {
      setIsTyping(false)
      return
    }

    // Randomly decide to pause
    if (Math.random() < pauseProbability) {
      await pause()
    }

    // Normal typing - add the next character
    const nextChar = textToType.current[currentIndex.current]
    setDisplayedText((prev) => prev + nextChar)
    currentIndex.current++

    // Randomize typing speed slightly for realism
    const randomDelay = typingSpeed * (0.8 + Math.random() * 0.4)
    setTimeout(typeText, randomDelay)
  }, [typingSpeed, pauseProbability, pause])

  // Start the typing effect
  useEffect(() => {
    // Reset when text changes
    textToType.current = text || "" // Ensure text is never undefined
    originalText.current = text || ""
    currentIndex.current = 0
    setDisplayedText("")
    setIsTyping(true)
    // Start typing
    typeText()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <div className={`${className} font-sans text-white`}>
      <div className="relative">
        <span>{displayedText}</span>
        <span
          className={`${
            cursorVisible && isTyping ? "opacity-100" : "opacity-0"
          } 
                     transition-opacity duration-100 inline-block w-0.5 h-5 bg-bright-cyan ml-0.5 relative top-0.5`}
        ></span>
      </div>
    </div>
  )
}

const Typewriter = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto rounded-lg bg-midnight-blue/95 my-12">
      <div className="p-4 rounded-lg mb-6 min-h-32">
        <AITypewriter
          text={heroText}
          typingSpeed={40}
          pauseProbability={0.05}
        />
      </div>
    </div>
  )
}

export default Typewriter

// export default function Typewriter() {
