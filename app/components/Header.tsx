"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileDown } from "lucide-react"
import { useLanguage } from "../providers/LanguageProvider"
import { ThemeLanguageToggle } from "./ThemeLanguageToggle"

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="container mx-auto px-4 py-16 text-center">
      <div className="flex justify-end mb-4">
        <ThemeLanguageToggle />
      </div>
      <div className="mb-8">
        <Image
          src="/images/avatar.png"
          alt="Nicolás Mendoza"
          width={150}
          height={150}
          className="mx-auto rounded-full"
        />
      </div>
      <h1 className="mb-4 text-4xl font-bold">Nicolás Mendoza</h1>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
      {t("mainDescription")}
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com/NicolasMendoza92" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://www.linkedin.com/in/nicolasmendoza92/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/files/NicolasMendozaCV.pdf" download>
            <FileDown className="mr-2 h-4 w-4" /> {t("downloadCV")}
          </a>
        </Button>
      </div>
    </header>
  )
}

