"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "frontend", "backend", "analytics", "aI"]

  const skills = [
    {
      id: 1,
      title: "React & TypeScript",
      category: "frontend",
      percentage: 90,
    },
    {
      id: 2,
      title: "Python & Machine Learning",
      category: "aI",
      percentage: 85,
    },
    {
      id: 3,
      title: "Node.js & Express",
      category: "backend",
      percentage: 88,
    },
    {
      id: 4,
      title: "Data Visualization",
      category: "analytics",
      percentage: 82,
    },
    {
      id: 5,
      title: "Next.js & Tailwind",
      category: "frontend",
      percentage: 92,
    },
    {
      id: 6,
      title: "PostgreSQL & MongoDB",
      category: "backend",
      percentage: 80,
    },
    {
      id: 7,
      title: "TensorFlow & PyTorch",
      category: "aI",
      percentage: 78,
    },
    {
      id: 8,
      title: "Power BI & Tableau",
      category: "analytics",
      percentage: 85,
    },
  ]

  const filteredSkills = skills.filter((skill) =>
    selectedCategory === "all" ? true : skill.category === selectedCategory,
  )

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Skills
        </motion.h2>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="min-h-[500px]">
          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-900 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Proficiency</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <motion.div
                        className="bg-white h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
