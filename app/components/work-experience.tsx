"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { WORK, type WorkItem } from "@/app/data/work"

function Chip({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
            {label}
        </span>
    )
}

function Bullet({ text }: { text: string }) {
    return (
        <li className="grid grid-cols-[1rem_1fr] gap-2 leading-relaxed">
            <span className="mt-1 text-zinc-400">▸</span>
            <span className="text-zinc-300/90">{text}</span>
        </li>
    )
}


function WorkCard({ item }: { item: WorkItem }) {
    return (
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                        {item.companyTag ?? item.company}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="rounded-full bg-zinc-800/70 px-3 py-1">{item.dateRange}</span>
                    {item.location ? <span className="text-zinc-500">• {item.location}</span> : null}
                </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-zinc-100">{item.title}</h3>

            <ul className="mt-4 space-y-2">
                {item.bullets.map((b, i) => (
                    <Bullet key={i} text={b} />
                ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map(s => (
                    <Chip key={s} label={s} />
                ))}
            </div>
        </div>
    )
}

export default function WorkExperience() {
    const ref = useRef<HTMLDivElement | null>(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="work" className="relative py-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-4xl font-bold text-zinc-200 text-center">Work Experience</h2>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {WORK.map((w, idx) => (
                        <WorkCard key={idx} item={w} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
