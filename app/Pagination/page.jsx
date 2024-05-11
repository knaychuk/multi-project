'use client'

import { fetchVideoGames } from '@/utils';
import { useState, useEffect } from 'react'

const Pagination = async () => {
  const [data, setData] = useState('');

  useEffect(async () => {
    const allGames = await fetchVideoGames()

    setData(allGames)
    console.log(data)
  },[])
 

  return (
    <div>
      <h1>Pagination</h1>
      <div>
        
      </div>
    
    </div>
  )
}
export default Pagination