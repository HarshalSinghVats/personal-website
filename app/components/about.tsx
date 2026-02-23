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
              src="/minecraft-me.jpg?height=600&width=500"
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
                I'm a passionate software engineer with a keen eye for detail and a love for solving complex
                problems. My journey in technology has been driven by curiosity and the desire to create meaningful
                digital experiences.
              </p>
              <p>
                With expertise spanning full-stack development, data analysis, and artificial intelligence, I bring a
                comprehensive approach to every project. I believe in the power of clean code, efficient algorithms, and
                user-centered design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, playing Valorant, or
                just existing thinking about random topics.
              </p>
              <p>
                Currently, I'm studying Golang, looking forward to work with it.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="/cv.pdf" download>
                <Button className="w-40 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
              {/* <a href="/cv.pdf">
                <Button className="w-40 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                  My blogs!
                </Button>
              </a> */}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
