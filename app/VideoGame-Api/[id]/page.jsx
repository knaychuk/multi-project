'use client'

import { fetchVideoGame, fetchVideoGames } from "@/utils";
import { useState, useEffect } from "react";

import Link from "next/link";

const page = () => {

  const [game, setGame] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(id) {
        const game = await fetchVideoGame()
        setGame(game)
        }
      } catch(err) {
        console.error(err)
        setGame(null)
      }
    }

    fetchData();
    console.log(game)
  }, [])

  console.log(game)

  return (
    <div>
      <h1 className='text-6xl'>Video Games!</h1>
      <div className='mt-2'>
       
          <div>
            {game && (
              <div>
                <h1>Game Details for {game.name}</h1>
              </div>
            )}

          </div>
    
      </div>
    </div>
  )
}
export default page