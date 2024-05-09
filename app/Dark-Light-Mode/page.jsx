'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import ThemeSwitch from '@/components/ThemeSwitch'

const DarkLightMode = () => {
  const[colorTheme, setColorTheme] = useState('');
  const[navTheme, setNavTheme] = useState('');
  const[arrowTheme, setArrowTheme] = useState('');
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if(resolvedTheme === 'dark') {
      setNavTheme('bg-slate-900 text-white');
      setColorTheme('bg-slate-800 text-white');
      setArrowTheme('/inverted-back-arrow.png');
    }
  
    if(resolvedTheme === 'light') {
      setNavTheme('bg-orange-300 text-black');
      setColorTheme('bg-white text-black');
      setArrowTheme('/back-arrow.png');
    }
  
  }, [resolvedTheme])

 
  return (
    <div className={colorTheme}> 
      <nav className={`${navTheme} flex flex-row justify-between items-center p-5`}>
        <div className='text-2xl'>D/L</div>
        <ul className={ `flex flex-row items-center`}>
          <Link className={`mx-2 text-2xl`} href='/Dark-Light-Mode/About'>About</Link>
          <Link className={`mx-2 text-2xl`} href='/Dark-Light-Mode/Pictures'>Pictures</Link>
        </ul>
      </nav>
      <main className={`${colorTheme} relative`}>
      <a href="/" className='justify-center items-center'>
        <Image src={arrowTheme} alt="" width={50} height={50} className="absolute left-5 top-0 hover:size-14 cursor-pointer"/>
      </a>
      <h1 className="text-4xl text-center mt-6">Dark/Light Mode</h1>
      <h2 className="mt-2 text-gray-500 text-center">Click icon below</h2>
      <div className='text-center mt-4'><ThemeSwitch /></div>
      <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus, repudiandae quas blanditiis dolor facilis. Voluptatum, fuga? Esse, nobis reprehenderit explicabo doloremque illo nam atque inventore minima harum at incidunt qui ratione magni ipsam dolorem magnam consequatur numquam. Similique tempore cum ipsa debitis distinctio, voluptates dolore molestiae magnam? Quas, dicta. Nam sint labore inventore hic repellat necessitatibus doloremque et deserunt autem dolorum. At necessitatibus non obcaecati et ipsam hic quam fugiat recusandae, iusto illo possimus perferendis quisquam labore laborum amet aliquam quaerat quasi dolores, incidunt repellat. Dolore animi accusamus quas consequuntur praesentium dolorum eos repudiandae cumque porro reiciendis illum fugiat incidunt, odio alias, inventore ratione. Explicabo totam, ipsam quis distinctio sequi quisquam veritatis quos fuga modi dolorum molestias, culpa sed nam error enim soluta magni numquam porro autem sunt. Tempore corporis illum nihil maiores ducimus architecto nulla veritatis magnam repellat assumenda, exercitationem veniam enim nobis quaerat. Omnis, ex magni unde, minus inventore pariatur dolorum ab aliquam a vero nostrum commodi consequatur nam eveniet itaque quaerat et rerum, excepturi voluptas. Suscipit similique in, eos natus est sapiente sint non distinctio. Reprehenderit iste cumque assumenda quidem numquam, architecto id tenetur, deserunt quas earum a eius neque. Impedit vitae tempora hic accusantium nihil. Natus laudantium ab assumenda blanditiis, molestias aspernatur alias iusto cupiditate voluptatibus veritatis. Architecto eaque earum nulla nisi cumque? Odio a autem illo! Repellendus commodi itaque minus cumque fugit rerum aperiam quod excepturi ab officia, asperiores necessitatibus odit tempore voluptatem quam hic! Aliquid, exercitationem dicta. Cumque, atque natus! Harum laboriosam minima assumenda, deserunt quis dignissimos deleniti eaque voluptate porro accusantium illum. Iusto maxime eveniet excepturi minima vel, ab alias sit blanditiis soluta sunt. Ea aliquid voluptatum magni quas perspiciatis, nihil officia corporis qui eaque consequuntur. Quaerat, hic placeat! Sequi ratione asperiores amet natus provident hic. Libero rem, labore veritatis expedita consectetur laborum! Itaque mollitia laboriosam temporibus sint adipisci accusantium quam, quidem reiciendis. Facilis perspiciatis non accusantium sunt voluptates, architecto at ex minus delectus hic minima ullam voluptatem eius iusto rem quisquam itaque rerum! Aliquid accusantium nihil repudiandae asperiores velit quam. Nihil ipsam reiciendis impedit a quos, distinctio fuga laborum. Eius, quae!</p>

      <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus, repudiandae quas blanditiis dolor facilis. Voluptatum, fuga? Esse, nobis reprehenderit explicabo doloremque illo nam atque inventore minima harum at incidunt qui ratione magni ipsam dolorem magnam consequatur numquam. Similique tempore cum ipsa debitis distinctio, voluptates dolore molestiae magnam? Quas, dicta. Nam sint labore inventore hic repellat necessitatibus doloremque et deserunt autem dolorum. At necessitatibus non obcaecati et ipsam hic quam fugiat recusandae, iusto illo possimus perferendis quisquam labore laborum amet aliquam quaerat quasi dolores, incidunt repellat. Dolore animi accusamus quas consequuntur praesentium dolorum eos repudiandae cumque porro reiciendis illum fugiat incidunt, odio alias, inventore ratione. Explicabo totam, ipsam quis distinctio sequi quisquam veritatis quos fuga modi dolorum molestias, culpa sed nam error enim soluta magni numquam porro autem sunt. Tempore corporis illum nihil maiores ducimus architecto nulla veritatis magnam repellat assumenda, exercitationem veniam enim nobis quaerat. Omnis, ex magni unde, minus inventore pariatur dolorum ab aliquam a vero nostrum commodi consequatur nam eveniet itaque quaerat et rerum, excepturi voluptas. Suscipit similique in, eos natus est sapiente sint non distinctio. Reprehenderit iste cumque assumenda quidem numquam, architecto id tenetur, deserunt quas earum a eius neque. Impedit vitae tempora hic accusantium nihil. Natus laudantium ab assumenda blanditiis, molestias aspernatur alias iusto cupiditate voluptatibus veritatis. Architecto eaque earum nulla nisi cumque? Odio a autem illo! Repellendus commodi itaque minus cumque fugit rerum aperiam quod excepturi ab officia, asperiores necessitatibus odit tempore voluptatem quam hic! Aliquid, exercitationem dicta. Cumque, atque natus! Harum laboriosam minima assumenda, deserunt quis dignissimos deleniti eaque voluptate porro accusantium illum. Iusto maxime eveniet excepturi minima vel, ab alias sit blanditiis soluta sunt. Ea aliquid voluptatum magni quas perspiciatis, nihil officia corporis qui eaque consequuntur. Quaerat, hic placeat! Sequi ratione asperiores amet natus provident hic. Libero rem, labore veritatis expedita consectetur laborum! Itaque mollitia laboriosam temporibus sint adipisci accusantium quam, quidem reiciendis. Facilis perspiciatis non accusantium sunt voluptates, architecto at ex minus delectus hic minima ullam voluptatem eius iusto rem quisquam itaque rerum! Aliquid accusantium nihil repudiandae asperiores velit quam. Nihil ipsam reiciendis impedit a quos, distinctio fuga laborum. Eius, quae!</p>

      <p className='m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus, repudiandae quas blanditiis dolor facilis. Voluptatum, fuga? Esse, nobis reprehenderit explicabo doloremque illo nam atque inventore minima harum at incidunt qui ratione magni ipsam dolorem magnam consequatur numquam. Similique tempore cum ipsa debitis distinctio, voluptates dolore molestiae magnam? Quas, dicta. Nam sint labore inventore hic repellat necessitatibus doloremque et deserunt autem dolorum. At necessitatibus non obcaecati et ipsam hic quam fugiat recusandae, iusto illo possimus perferendis quisquam labore laborum amet aliquam quaerat quasi dolores, incidunt repellat. Dolore animi accusamus quas consequuntur praesentium dolorum eos repudiandae cumque porro reiciendis illum fugiat incidunt, odio alias, inventore ratione. Explicabo totam, ipsam quis distinctio sequi quisquam veritatis quos fuga modi dolorum molestias, culpa sed nam error enim soluta magni numquam porro autem sunt. Tempore corporis illum nihil maiores ducimus architecto nulla veritatis magnam repellat assumenda, exercitationem veniam enim nobis quaerat. Omnis, ex magni unde, minus inventore pariatur dolorum ab aliquam a vero nostrum commodi consequatur nam eveniet itaque quaerat et rerum, excepturi voluptas. Suscipit similique in, eos natus est sapiente sint non distinctio. Reprehenderit iste cumque assumenda quidem numquam, architecto id tenetur, deserunt quas earum a eius neque. Impedit vitae tempora hic accusantium nihil. Natus laudantium ab assumenda blanditiis, molestias aspernatur alias iusto cupiditate voluptatibus veritatis. Architecto eaque earum nulla nisi cumque? Odio a autem illo! Repellendus commodi itaque minus cumque fugit rerum aperiam quod excepturi ab officia, asperiores necessitatibus odit tempore voluptatem quam hic! Aliquid, exercitationem dicta. Cumque, atque natus! Harum laboriosam minima assumenda, deserunt quis dignissimos deleniti eaque voluptate porro accusantium illum. Iusto maxime eveniet excepturi minima vel, ab alias sit blanditiis soluta sunt. Ea aliquid voluptatum magni quas perspiciatis, nihil officia corporis qui eaque consequuntur. Quaerat, hic placeat! Sequi ratione asperiores amet natus provident hic. Libero rem, labore veritatis expedita consectetur laborum! Itaque mollitia laboriosam temporibus sint adipisci accusantium quam, quidem reiciendis. Facilis perspiciatis non accusantium sunt voluptates, architecto at ex minus delectus hic minima ullam voluptatem eius iusto rem quisquam itaque rerum! Aliquid accusantium nihil repudiandae asperiores velit quam. Nihil ipsam reiciendis impedit a quos, distinctio fuga laborum. Eius, quae!</p>
      </main>
      <footer>
        <a href="https://www.flaticon.com/free-icons/light-mode" title="light mode icons">Light mode icons created by bsd - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/dark" title="dark icons">Dark icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  )
}
export default DarkLightMode