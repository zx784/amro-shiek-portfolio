"use client";

import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import dynamic from "next/dynamic";
const Encryption = dynamic(() => import("@/components/main/encryption").then(mod => mod.Encryption), { ssr: false });
const Projects = dynamic(() => import("@/components/main/projects").then(mod => mod.Projects), { ssr: false });

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
