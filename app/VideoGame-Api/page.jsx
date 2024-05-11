'use client'

import { fetchVideoGames } from '@/utils'
import { useState, useEffect } from 'react' 

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
      <h1 className='text-6xl'>Video Games!</h1>
      <div className='mt-2'>
        {allGames.map((game) => (
          <div key={game.id} className='mt-4' >
            <div className='border-red-500 border-4 inline-block p-2 font-bold'>Title: {game.name}</div>
            <div className='border-blue-500 border-4 inline-block p-2'>First Released: {game.firstReleaseDate}</div>
            <div className='border-green-500 border-4 inline-block p-2'>Top Critic Score: {game.topCriticScore}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default VideoGameApi