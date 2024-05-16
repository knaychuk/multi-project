'use client'

import { fetchVideoGames } from '@/utils'
import { useState, useEffect } from 'react' 
import Link from 'next/link'
import Image from 'next/image'


const VideoGameApi = () => {
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
      <h1 className='text-6xl text-center m-10'>Video Games!</h1>
      <Image className="absolute left-10 top-10 hover:size-14 cursor-pointer" src="/back-arrow.png" width={50} height={50}/>
      <div className='grid grid-cols-4 gap-4 mx-4'>
        {allGames.map((game) => (
          <div className='border-black border-2 text-center p-10'>
            <h1 className='text-2xl m-5'>Game {game.name}</h1>
            <Link href={`/VideoGame-Api/${game.id}`} className='bg-blue-500 text-white p-2 hover:bg-blue-700'>More Info</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default VideoGameApi