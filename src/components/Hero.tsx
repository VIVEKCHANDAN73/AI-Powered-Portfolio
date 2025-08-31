// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I’m <span className="text-blue-500">Vivek</span>
      </motion.h1>
      <p className="text-xl mb-6">
        AI/ML Engineer | Full-Stack Python Developer
      </p>
      <div className="flex gap-4">
        
        <Link href="/explore">
          <Button variant="outline">Explore Manually</Button>
        </Link>
        <Link href="/chatbot">
          <Button variant="outline">Ask AI</Button>
        </Link>
        
      </div>
    </section>
  );
}
