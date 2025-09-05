"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const images = [
    {
      src: "/heart.png",
      alt: "Project 1",
      title: "Health Prediction Model",
      link: "https://hsv-disease.streamlit.app",
    },
    {
      src: "/titanic.png",
      alt: "Project 2",
      title: "Titanic Survival Simulation",
      link: "https://titanic-survival-hsv.streamlit.app",
    },
    {
      src: "/football.jpg",
      alt: "Project 3",
      title: "Football Prediction Model",
      link: "https://football-prediction-model-hsv.streamlit.app",
    },
    {
      src: "/vid-player.jpg",
      alt: "Project 4",
      title: "Local Video Player",
      link: "https://github.com/HarshalSinghVats/video-player",
    },
  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Deliverables
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <Link
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Force uniform 3:4 aspect ratio */}
                <div className="aspect-[4.9/6] min-h-[22rem]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
