"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  glitchClassName?: string
}

const GlitchText = ({ text, className, glitchClassName }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch effect
    setTimeout(() => {
      setIsGlitching(true)

      setTimeout(() => {
        setIsGlitching(false)
      }, 200)
    }, 500)

    // Random glitch effect - less frequent
    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.8

      if (shouldGlitch) {
        setIsGlitching(true)

        setTimeout(() => {
          setIsGlitching(false)
        }, 150)
      }
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="relative">
      {/* Main text */}
      <h1 className={className}>{text}</h1>

      {/* Glitch layers */}
      <motion.div
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 bg-gradient-to-r bg-clip-text text-transparent",
          glitchClassName || "from-blue-400 to-cyan-400",
          className,
        )}
        animate={{
          opacity: isGlitching ? 1 : 0,
          x: isGlitching ? [-2, 1, -1, 2, 0] : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>

      <motion.div
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 bg-gradient-to-r bg-clip-text text-transparent",
          glitchClassName || "from-blue-400 to-cyan-400",
          className,
        )}
        animate={{
          opacity: isGlitching ? 0.8 : 0,
          x: isGlitching ? [2, -1, 1, -2, 0] : 0,
        }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        {text}
      </motion.div>
    </div>
  )
}

export default GlitchText
