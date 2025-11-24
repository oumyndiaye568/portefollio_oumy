"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Particle[] = []
    const particleCount = 150

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.3,
        hue: Math.random() * 40 + 200, // Blue to cyan hues (200-240)
      })
    }

    let mouseX = 0
    let mouseY = 0
    let mouseInfluence = false

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseInfluence = true
    }

    const handleMouseLeave = () => {
      mouseInfluence = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    let animationFrameId: number

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 30, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        if (mouseInfluence) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const force = (200 - distance) / 200
            particle.vx += (dx / distance) * force * 0.15
            particle.vy += (dy / distance) * force * 0.15
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.98
        particle.vy *= 0.98

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 4)
        gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 70%, ${particle.opacity})`)
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 85%, 65%, ${particle.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 60%, 0)`)

        ctx.fillStyle = gradient
        ctx.fill()

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            const avgHue = (particle.hue + otherParticle.hue) / 2
            const lineOpacity = 0.4 * (1 - distance / 150)

            const lineGradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
            lineGradient.addColorStop(0, `hsla(${particle.hue}, 85%, 65%, ${lineOpacity})`)
            lineGradient.addColorStop(0.5, `hsla(${avgHue}, 90%, 70%, ${lineOpacity * 1.2})`)
            lineGradient.addColorStop(1, `hsla(${otherParticle.hue}, 85%, 65%, ${lineOpacity})`)

            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-70" aria-hidden="true" />
}
