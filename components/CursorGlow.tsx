"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-[999] h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition-transform duration-75"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
      }}
    />
  )
}