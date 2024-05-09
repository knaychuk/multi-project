import Link from "next/link"

const Navbar = ({ navTheme, linkUrl, linkText1 }) => {

  return (
    <nav className={`${navTheme} flex flex-row justify-between items-center p-5`}>
        <div className='text-2xl'>D/L</div>
        <ul className={ `flex flex-row items-center`}>
          <Link className={`mx-2 text-2xl`} href={`/Light-Dark-Mode/${linkUrl}`}>{linkText1}</Link>
          {/* <Link className={`mx-2 text-2xl`} href='/Dark-Light-Mode/Pictures'>Pictures</Link> */}
        </ul>
      </nav>
  )
}
export default Navbar