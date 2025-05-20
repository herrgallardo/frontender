import React from "react"
import { motion } from "framer-motion"
import { FaFileDownload } from "react-icons/fa"

interface CVDownloadButtonProps {
  className?: string
  text?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  iconPosition?: "left" | "right"
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
  className = "",
  text = "Download CV",
  variant = "primary",
  size = "md",
  iconPosition = "left",
}) => {
  // Determine button styles based on variant
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-bright-cyan text-midnight-blue hover:bg-light-mint-green"
      case "secondary":
        return "bg-aqua-green text-midnight-blue hover:bg-light-mint-green"
      case "outline":
        return "bg-transparent border-2 border-aqua-green text-aqua-green hover:bg-aqua-green hover:text-midnight-blue"
      default:
        return "bg-bright-cyan text-midnight-blue hover:bg-light-mint-green"
    }
  }

  // Determine button size
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm"
      case "md":
        return "px-6 py-3 text-base"
      case "lg":
        return "px-8 py-4 text-lg"
      default:
        return "px-6 py-3 text-base"
    }
  }

  return (
    <motion.a
      href="/documents/antonio-gallardo-girela-cv.pdf"
      download
      className={`${getVariantClasses()} ${getSizeClasses()} font-semibold rounded-lg shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg inline-flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {iconPosition === "left" && <FaFileDownload className="mr-2" />}
      {text}
      {iconPosition === "right" && <FaFileDownload className="ml-2" />}
    </motion.a>
  )
}

export default CVDownloadButton
