"use client"

import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/About"

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Projects />
      <Skills />
      <About />
    </main>
  )
}

