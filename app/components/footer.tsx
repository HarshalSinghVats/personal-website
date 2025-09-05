import { Github, Code, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px - 0">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Harshal Singh Vats</p>
          <div className="flex gap-6">
            <a href="https://github.com/harshalsinghvats" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Code className="h-5 w-5" />
              <span className="sr-only">LeetCode</span>
            </a>
            <a href="https://linkedin.com/in/harshal-singh-vats" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
