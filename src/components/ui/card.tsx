// src/components/ui/card.tsx
import React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden">
      {children}
    </div>
  )
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 text-black">
      {children}
    </div>
  )
}
