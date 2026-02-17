"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      
      {/* Partículas */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full animate-pulse"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(0,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Logo / Nome */}
      <div className="relative text-center flex flex-col items-center">
        {/* LOGO AUMENTADA AQUI */}
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="mb-8 w-48 h-48 md:w-64 md:h-64 animate-pulse object-contain scale-150" 
        />
        <p className="mt-4 text-sm text-muted-foreground font-mono opacity-80">
          inicializando sistema...
        </p>
      </div>
    </div>
  )
}