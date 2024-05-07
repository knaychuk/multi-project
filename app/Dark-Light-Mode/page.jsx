'use client'

import Image from 'next/image'
import Link from 'next/link'

import ThemeSwitch from '@/components/ThemeSwitch'

const DarkLightMode = () => {
  return (
    <div> 
      <h1 className="text-4xl mt-16">Dark/Light Mode</h1>
      <nav>
        {/* <Image src="/testImage.png" alt="" width={50} height={50}></Image> */}
        <div className='outline outline-2 text-blue-700'>Test Text</div>
        <ThemeSwitch />
      </nav>
    </div>
  )
}
export default DarkLightMode