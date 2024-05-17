'use client'

import { fetchVideoGame, fetchVideoGames } from "@/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";

const page = ({ params }) => {

  const [game, setGame] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const game = await fetchVideoGame(params.id)
        setGame(game)
      
      } catch(err) {
        console.error(err)
        setGame(null)
      }
    }

    fetchData();
    console.log(game)
  }, [])

  console.log(params.id)

  return (

    <div>
      <a href="/VideoGame-Api" >
        <Image src="/back-arrow.png" alt="" width={50} height={50} className="absolute left-10 top-10 hover:size-14 cursor-pointer"/>
      </a>
      {game && (
        <div>
          <h1 className="text-4xl underline text-center m-10">Game Details for {game.name}</h1>
          <p className="text-2xl mx-10 text-gray-600"> {game.description} </p>
        </div>
      )}

    </div>
  
  )
}
export default page