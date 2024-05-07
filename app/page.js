'use client'

import GameProjects from "@/components/GameProjects";

import TechnicalProjects from "@/components/TechnicalProjects";


export default function Home() {

  return (
    <main className="flex flex-col items-center bg-white">
      <h1 className="mt-24 text-4xl">Boredom Projects</h1>
      <h2 className="mt-2 text-xl">By Kate Naychuk</h2>

      <div className="text-2xl mt-16">
        <h3>Game Projects</h3>
        <GameProjects/>
      </div>

      <div className="text-2xl mt-16">
        <h3>Technical Projects</h3>
        <TechnicalProjects/>
      </div>
    </main>
  );
}
