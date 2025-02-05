"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, GitBranch, Handshake, Lightbulb, Mail, MessageSquare, Trello, Users } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../providers/LanguageProvider";

export default function About() {
  const [copied, setCopied] = useState(false);
  const email = "nicomendoza.92@gmail.com";
  const { t } = useLanguage();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

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
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="font-semibold">{t("contactMe")}:</p>
            <div className="flex gap-2">
              <Button onClick={copyToClipboard} variant="outline">
                <Copy className="mr-2 h-4 w-4" />
                {copied ? t("copied") : t("copyEmail")}
              </Button>
              <Button onClick={sendEmail} variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                {t("sendEmail")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-2xl mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("workSkills")}</CardTitle>
          <CardDescription>{t("workSkillsDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <SkillItem icon={<GitBranch className="h-6 w-6" />} name="GitHub" />
            <SkillItem icon={<Handshake className="h-6 w-6" />} name="Kanban" />
            <SkillItem icon={<Trello className="h-6 w-6" />} name="JIRA" />
            <SkillItem icon={<Lightbulb className="h-6 w-6" />} name="Devops" />
            <SkillItem icon={<Users className="h-6 w-6" />} name="Scrum" />
            <SkillItem icon={<MessageSquare className="h-6 w-6" />} name="Slack" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function SkillItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span>{name}</span>
    </div>
  )
}