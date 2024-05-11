import Image from 'next/image'
import Link from 'next/navigation'

const ProjectCard = ({ title, img, date, url, textSize }) => {
  return (
    <div className="outline-black outline-3 outline p-36 relative">
      <a href={url}>
      <Image src={img} alt="Mines Game" fill priority/>
      <div className='absolute bg-white p-5 w-full bottom-0 right-0 text-center'>
        <h1 className='text-2xl'>{title}</h1>
        <h2 className='text-lg'>Completed: {date}</h2>
      </div>
      </a>
    </div> 
  )
}
export default ProjectCard