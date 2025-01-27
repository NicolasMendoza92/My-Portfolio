"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "../providers/LanguageProvider"

export default function About() {
  const [copied, setCopied] = useState(false)
  const email = "nicomendoza.92@gmail.com"
  const { t } = useLanguage()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold text-center">{t("about")}</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{t("about")}</CardTitle>
          <CardDescription>{t("aboutDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{t("aboutContent")}</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold">{t("contactMe")}:</p>
            <Button onClick={copyToClipboard} variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              {copied ? t("copied") : t("copyEmail")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

