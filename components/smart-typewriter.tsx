"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  QWERTY_KEYBOARD,
  SmartTypewriterProps,
  getRandomAdjacentKey,
} from "@/lib/utils/typewriter"

/**
 * A reusable typewriter component that simulates realistic typing
 * with pauses, typos, backtracking, and synonym substitution
 */
const SmartTypewriter: React.FC<SmartTypewriterProps> = ({
  text,
  typingSpeed = 40,
  pauseProbability = 0.02,
  mistakeProbability = 0.03,
  maxMistakeLength = 3,
  backtrackProbability = 0.01,
  synonymProbability = 0.2,
  keyboardMap = QWERTY_KEYBOARD,
  synonymMap = {},
  resetKey = "",
  onComplete,
  onStart,
  autoStart = true,
  showCursor = true,
  loop = false,
  loopDelay = 2000,
  cursorClassName = "",
  containerClassName = "",
}) => {
  // State management
  const [displayedText, setDisplayedText] = useState<string>("")
  const [isTyping, setIsTyping] = useState<boolean>(autoStart)
  const [cursorVisible, setCursorVisible] = useState<boolean>(true)

  // Refs to manage async operations
  const isActive = useRef(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to cancel any pending timeouts
  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // Cursor blinking effect
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isActive.current = false
      clearTimeouts()
    }
  }, [clearTimeouts])

  // Helper for async waits
  const wait = useCallback((ms: number): Promise<void> => {
    return new Promise((resolve) => {
      if (!isActive.current) {
        resolve()
        return
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null
        resolve()
      }, ms)
    })
  }, [])

  // Gets a wrong character for a typo
  const getWrongChar = useCallback(
    (correct: string): string => {
      return getRandomAdjacentKey(correct, keyboardMap)
    },
    [keyboardMap]
  )

  // Types a single character with effects
  const typeChar = useCallback(
    async (char: string): Promise<void> => {
      if (!isActive.current) return

      // Thinking pause
      if (Math.random() < pauseProbability) {
        await wait(50 + Math.random() * 100)
      }

      // Introduce typo
      if (Math.random() < mistakeProbability && /[A-Za-z0-9]/.test(char)) {
        const wrongCount = Math.ceil(Math.random() * maxMistakeLength)

        // Type wrong characters
        for (let i = 0; i < wrongCount; i++) {
          if (!isActive.current) return
          setDisplayedText((p) => p + getWrongChar(char))
          await wait(typingSpeed * 0.8)
        }

        // Pause to show typo
        await wait(typingSpeed * 1.5)

        // Delete wrong characters
        for (let i = 0; i < wrongCount; i++) {
          if (!isActive.current) return
          setDisplayedText((p) => p.slice(0, -1))
          await wait(typingSpeed * 0.6)
        }
      }

      if (!isActive.current) return

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
        await wait(20 + Math.random() * 80)
      }

      if (!isActive.current) return

      // Standard inter-character delay
      await wait(typingSpeed * (0.9 + Math.random() * 0.2))
    },
    [
      pauseProbability,
      mistakeProbability,
      maxMistakeLength,
      backtrackProbability,
      typingSpeed,
      getWrongChar,
      wait,
    ]
  )

  // Deletes a single character
  const deleteChar = useCallback(async (): Promise<void> => {
    if (!isActive.current) return
    setDisplayedText((p) => p.slice(0, -1))
    await wait(typingSpeed * (0.6 + Math.random() * 0.2))
  }, [typingSpeed, wait])

  // Main typing effect logic
  const runTypewriter = useCallback(async (): Promise<void> => {
    if (!isActive.current) return

    // Reset the displayed text
    setDisplayedText("")
    setIsTyping(true)

    if (onStart) {
      onStart()
    }

    // Split text into words and non-words (punctuation, spaces)
    const tokens = text.match(/([A-Za-z-]+|[^A-Za-z-]+)/g) || []

    for (const token of tokens) {
      if (!isActive.current) break

      const synonym = synonymMap[token]

      if (synonym && Math.random() < synonymProbability) {
        // Type synonym
        for (const c of synonym) {
          await typeChar(c)
          if (!isActive.current) return
        }

        // Delete synonym
        for (let i = 0; i < synonym.length; i++) {
          await deleteChar()
          if (!isActive.current) return
        }

        // Type correct token
        for (const c of token) {
          await typeChar(c)
          if (!isActive.current) return
        }
      } else {
        // Just type the token
        for (const c of token) {
          await typeChar(c)
          if (!isActive.current) return
        }
      }
    }

    if (!isActive.current) return

    setIsTyping(false)

    if (onComplete) {
      onComplete()
    }

    // Handle looping
    if (loop && isActive.current) {
      await wait(loopDelay)
      if (isActive.current) {
        runTypewriter()
      }
    }
  }, [
    text,
    typeChar,
    deleteChar,
    synonymMap,
    synonymProbability,
    onStart,
    onComplete,
    loop,
    loopDelay,
    wait,
  ])

  // Handle reset and initial typing
  useEffect(() => {
    clearTimeouts()
    isActive.current = true

    if (autoStart) {
      runTypewriter()
    }

    return () => {
      isActive.current = false
      clearTimeouts()
    }
  }, [resetKey, text, runTypewriter, autoStart, clearTimeouts])

  return (
    <div className={containerClassName}>
      <span>{displayedText}</span>
      {showCursor && (
        <span
          className={`${
            cursorVisible && isTyping ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100 inline-block w-0.5 h-5 bg-current ml-0.5 relative top-0.5 ${cursorClassName}`}
        />
      )}
    </div>
  )
}

export default SmartTypewriter
