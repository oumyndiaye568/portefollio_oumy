"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  delay?: number
  className?: string
  loop?: boolean
}

export function Typewriter({ text, delay = 100, className = "", loop = false }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!loop) {
      // Original behavior - type once
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, delay)
        return () => clearTimeout(timeout)
      }
    } else {
      // Loop behavior - type, pause, delete, repeat
      if (!isDeleting && currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, delay)
        return () => clearTimeout(timeout)
      } else if (!isDeleting && currentIndex === text.length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000) // Pause before deleting
        return () => clearTimeout(timeout)
      } else if (isDeleting && currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))
          setCurrentIndex((prev) => prev - 1)
        }, delay / 2)
        return () => clearTimeout(timeout)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
      }
    }
  }, [currentIndex, delay, text, loop, isDeleting])

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse" />
    </span>
  )
}
