'use client'

import Projects from "@/components/Projects";


export default function Home() {

  return (
    <main className="flex flex-col items-center">
      <h1 className="mt-10">Check out some of the projects I've made!</h1>
      <Projects/>
    </main>
  );
}
