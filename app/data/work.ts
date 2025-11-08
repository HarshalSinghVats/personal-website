// app/data/work.ts
export type WorkItem = {
  company: string
  companyTag?: string
  title: string
  dateRange: string
  location: string
  bullets: string[]
  stack: string[]
}

export const WORK: WorkItem[] = [
  {
    company: "JustTutors",
    companyTag: "JustTutors",
    title: "Artificial Intelligence Research Intern",
    dateRange: "June 2025 - August 2025",
    location: "Remote",
    bullets: [
      "Engineered a virtual tutor system integrating speech recognition (STT), text-to-speech (TTS), and content delivery APIs, enabling     interactive learning experiences.",
      "Assisted in backend development with Python, implementing API integration, session management, and response generation, whichimproved system reliability by 25%",
      "Collaborated with senior developers and instructional teams to align technical workflows with pedagogy, achieving a 65% satisfactionrate in initial pilot testing.",
    ],
    stack: ["Python","APIs","Streamlit","pyttsx3","python-pptx","SpeechPy"]
  },
  {
    company: "EdEarn",
    companyTag: "EdEarn",
    title: "Fullstack Developer Intern",
    dateRange: "March 2025 - June 2025",
    location: "Remote",
    bullets: [
      "Contributed to the end-to-end development of EdEarn by designing and implementing intuitive, responsive frontend.",
      "Leveraged AI-assisted development tools to accelerate design workflows and reduce turnaround time by 10 hours.",
      "Developed and maintained RESTful API endpoints and implemented backend logic using Node.js, with MongoDB for schema-less data storage and efficient querying that saved costs of DB hosting and improved query performance by 20% enabling faster user response times."
    ],
    stack: ["React.js","Node.js","MongoDB","APIs","UI Designing", "Next.js"]
  }
]
