import Image from 'next/image'

const ProjectCard = ({ title, img, date }) => {
  return (
    <div className="outline-red-500 outline-1 outline mx-2 p-36 relative">
      <Image src="/testImage.png" fill priority/>
      <div className='absolute bg-blue-500 bottom-2 right-4'>
        <h1 className=' bg-blue-500'>{title}</h1>
        <h2>Completed: </h2>
      </div>
    </div> 
  )
}
export default ProjectCard