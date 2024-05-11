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
      <h1>Video Games!</h1>
      <div>
        {allGames.map((game) => (
          <div key={game.id}>{game.name}</div>
        ))}
      </div>
    </div>
  )
}
export default VideoGameApi