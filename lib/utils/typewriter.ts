/**
 * Utilities and types for the SmartTypewriter component
 */

// Keyboard adjacency map for realistic typos
export interface KeyboardMap {
  [key: string]: string[]
}

// QWERTY keyboard layout adjacency map
export const QWERTY_KEYBOARD: KeyboardMap = {
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

/**
 * Creates a custom keyboard map by extending the base map
 * @param baseMap - Base keyboard map (default is QWERTY)
 * @param customMap - Custom key adjacencies to add or override
 */
export function createKeyboardMap(
  baseMap: KeyboardMap = QWERTY_KEYBOARD,
  customMap: KeyboardMap = {}
): KeyboardMap {
  return { ...baseMap, ...customMap }
}

/**
 * Gets a random adjacent key for a character
 * @param char - The character to get an adjacent key for
 * @param keyboardMap - Keyboard adjacency map
 */
export function getRandomAdjacentKey(
  char: string,
  keyboardMap: KeyboardMap = QWERTY_KEYBOARD
): string {
  const lower = char.toLowerCase()
  const adjacentKeys = keyboardMap[lower] || []

  if (adjacentKeys.length === 0) {
    // If no adjacent keys defined, return a random letter
    return String.fromCharCode(97 + Math.floor(Math.random() * 26))
  }

  const adjacentKey =
    adjacentKeys[Math.floor(Math.random() * adjacentKeys.length)]

  // Preserve case
  return /[A-Z]/.test(char) ? adjacentKey.toUpperCase() : adjacentKey
}

/**
 * Configuration options for the SmartTypewriter component
 */
export interface TypewriterOptions {
  /** Base typing speed in milliseconds per character */
  typingSpeed?: number

  /** Probability (0-1) of pausing before typing a character */
  pauseProbability?: number

  /** Probability (0-1) of introducing a typo for each character */
  mistakeProbability?: number

  /** Maximum number of wrong characters to type in a typo sequence */
  maxMistakeLength?: number

  /** Probability (0-1) of deleting and retyping a character */
  backtrackProbability?: number

  /** Probability (0-1) of using a synonym instead of the original word */
  synonymProbability?: number

  /** Custom keyboard adjacency map for realistic typos */
  keyboardMap?: KeyboardMap

  /** Map of words to their synonyms for word replacement */
  synonymMap?: Record<string, string>

  /** Class applied to the cursor element */
  cursorClassName?: string

  /** Class applied to the text container */
  containerClassName?: string
}

/**
 * Props for the SmartTypewriter component
 */
export interface SmartTypewriterProps extends TypewriterOptions {
  /** The text to be typed */
  text: string

  /** Key to trigger a reset of the typewriter (e.g., route changes) */
  resetKey?: string

  /** Function called after typing is complete */
  onComplete?: () => void

  /** Function called before typing starts */
  onStart?: () => void

  /** Whether to start typing automatically */
  autoStart?: boolean

  /** Whether to show the cursor */
  showCursor?: boolean

  /** Whether to loop the typing animation */
  loop?: boolean

  /** Delay in milliseconds before looping */
  loopDelay?: number
}
