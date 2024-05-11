'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import ThemeSwitch from '@/components/ThemeSwitch'
import Navbar from '@/components/DarkLightMode/Navbar'


const About = () => {
  const[colorTheme, setColorTheme] = useState('');
  const[navTheme, setNavTheme] = useState('');
  const[arrowTheme, setArrowTheme] = useState('');
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if(resolvedTheme === 'dark') {
      setNavTheme('bg-slate-900 text-white');
      setColorTheme('bg-slate-800 text-white border-white');
      setArrowTheme('/inverted-back-arrow.png');
    }
  
    if(resolvedTheme === 'light') {
      setNavTheme('bg-orange-300 text-black');
      setColorTheme('bg-white text-black border-black');
      setArrowTheme('/back-arrow.png');
    }
  
  }, [resolvedTheme])
  return (
    <div className={`${colorTheme} h-screen`}>
      <Navbar navTheme={navTheme} linkUrl={''} linkText1={'Home'}/>
      <a href="/Dark-Light-Mode" >
        <Image src={arrowTheme} alt="" width={50} height={50} className="absolute left-6 top-24 hover:size-14 cursor-pointer"/>
      </a>
      <div className={`${colorTheme} my-4 mx-24`}>
      <h1 className={`${colorTheme} text-6xl pb-6 border-b-8`}>About</h1>
      <p className="text-2xl mt-2">Dark/Light Mode is persistent on other pages you visit!</p>
      </div>
    </div>
  )
}
export default About