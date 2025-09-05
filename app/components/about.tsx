"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section id="about-section" className="relative py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/minecraft-me.png?height=600&width=500"
              alt="Harshal Singh Vats"
              className="h-full w-full object-cover object-[center_20px]"
            />

          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">About Me</h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                I'm a passionate Software Engineer & Analyst with a keen eye for detail and a love for solving complex
                problems. My journey in technology has been driven by curiosity and the desire to create meaningful
                digital experiences.
              </p>
              <p>
                With expertise spanning full-stack development, data analysis, and system architecture, I bring a
                comprehensive approach to every project. I believe in the power of clean code, efficient algorithms, and
                user-centered design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                analyzing data patterns to uncover insights that drive business decisions.
              </p>
            </div>

            <a href="/cv.pdf" download>
              <Button className="rounded-full bg-white text-black hover:bg-gray-200 transition-colors mt-6">
                <Download className="mr-2 h-4 w-4 " />
                Download CV
              </Button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
