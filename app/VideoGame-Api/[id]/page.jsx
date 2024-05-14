'use client'

import { fetchVideoGame, fetchVideoGames } from "@/utils";
import { useState, useEffect } from "react";

import Link from "next/link";

const page = () => {

  const [game, setGame] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const game = await fetchVideoGame('4504')
        setGame(game)
      
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
      {game && (
        <div>
          <h1 className="text-4xl">Game Details for {game.name}</h1>
          <p> {game.description} </p>
        </div>
      )}

    </div>
  
  )
}
export default page