'use client'

import Projects from "@/components/Projects";


export default function Home() {

  return (
    <main className="flex flex-col items-center bg-white">
      <h1 className="mt-24 text-4xl">Boredom Projects</h1>
      <h2 className="mt-2 text-xl">By Kate Naychuk</h2>
      <Projects/>
    </main>
  );
}
