import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Image 
      src="/testImage.png"
      width={36}
      height={36}
      priority={false}
    />    
  )

  if(resolvedTheme === 'dark') {
    return <button onClick={() => setTheme('light')}><Image src="/DarkLightMode/light.png" width={100} height={100} /></button>
  }

  if(resolvedTheme ==='light') {
    return <button onClick={() => setTheme('dark')}><Image src="/DarkLightMode/dark.png" width={100} height={100} /></button>
  }
}
export default ThemeSwitch