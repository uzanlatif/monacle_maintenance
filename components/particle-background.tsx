"use client"

import { useEffect, useRef } from "react"

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Line class
    class Line {
      x1: number
      y1: number
      x2: number
      y2: number
      length: number
      angle: number
      speed: number
      color: string
      opacity: number

      constructor() {
        this.x1 = Math.random() * canvas.width
        this.y1 = Math.random() * canvas.height
        this.length = Math.random() * 100 + 50
        this.angle = Math.random() * Math.PI * 2
        this.x2 = this.x1 + Math.cos(this.angle) * this.length
        this.y2 = this.y1 + Math.sin(this.angle) * this.length
        this.speed = Math.random() * 0.001 + 0.0005

        // Random color from blue/cyan/purple palette
        const colors = ["#00BFFF", "#0080FF", "#9F7AEA"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.2 + 0.05
      }

      update() {
        this.angle += this.speed
        this.x2 = this.x1 + Math.cos(this.angle) * this.length
        this.y2 = this.y1 + Math.sin(this.angle) * this.length

        // Slowly move the origin point
        this.x1 += (Math.random() - 0.5) * 0.2
        this.y1 += (Math.random() - 0.5) * 0.2

        // Wrap around edges
        if (this.x1 < 0) this.x1 = canvas.width
        if (this.x1 > canvas.width) this.x1 = 0
        if (this.y1 < 0) this.y1 = canvas.height
        if (this.y1 > canvas.height) this.y1 = 0
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.strokeStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Create lines
    const lineCount = Math.min(30, Math.floor((window.innerWidth * window.innerHeight) / 30000))
    const lines: Line[] = []

    for (let i = 0; i < lineCount; i++) {
      lines.push(new Line())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update lines
      lines.forEach((line) => {
        line.update()
        line.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

export default ParticleBackground
