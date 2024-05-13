'use client'

import { fetchVideoGames } from "@/utils";
import { useState, useEffect } from "react";

const page = () => {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await fetchVideoGames()
        setAllGames(games)
      } catch(err) {
        console.error(err)
      }
    }

    fetchData();
    console.log(allGames)
  }, [])

  console.log(allGames)

  return (
    <div>
      <h1 className='text-6xl'>Video Games!</h1>
      <div className='mt-2'>
        {allGames.map((game) => (
          
            // <Link href={`/VideoGame-Api/${game.id}`}>
            //   <p>{game.title}</p>
            // </Link>
          <div>
            <h1>Game {game.name}</h1>
            <Link href={`/VideoGame-Api/${game.id}`}>More Info</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default page