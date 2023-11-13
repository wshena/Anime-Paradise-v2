import { NavbarNavigation } from "../utils/data"
import {BiSearchAlt} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-[20px] px-[20px] md:px-[50px] lg:px-[80px]">
			<div className="flex items-center gap-[35px]">
				<a href="/">Anime Paradise</a>
				<div className="hidden md:flex items-center gap-[35px]">
					{
						NavbarNavigation.map((nav) => {
							return (
								<a key={nav.link} href={nav.to}>{nav.link}</a>
							)
						})
					}
				</div>
			</div>

			<form className="md:w-[200px] lg:w-[350px] md:p-[8px] md:border border-gray-300 rounded-[10px] flex items-center justify-between">
				<input className="hidden md:block w-[80%] focus:outline-none text-[15px]" type="text" name="title" id="title" placeholder="Search anime, manga, or more..." autoComplete="off"/>
				<button> <BiSearchAlt size={25}/> </button>
			</form>
		</nav>
  )
}

export default Navbar