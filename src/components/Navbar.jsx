/* eslint-disable react/prop-types */
import { useState } from "react"
import { NavbarNavigation } from "../utils/data"
import {BiSearchAlt} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const MobileForm = ({handleFormSubmit, handleInputChange, input, click}) => {
	return (
		<div className="block md:hidden absolute h-[100vh] top-0 left-0 bg-gray-900 w-full z-50">
			<div className="mt-[50px] flex flex-col items-center justify-center">
				<button onClick={click}> <ImCancelCircle color="white" size={24}/> </button>
				<form onSubmit={handleFormSubmit} className="mt-[20px] w-[290px] p-[8px] border-b border-gray-300 flex items-center justify-between">
					<input className="bg-gray-900 text-white block w-[100%] focus:outline-none text-[15px]" type="text" name="title" id="title" placeholder="Search anime, manga, or more..." autoComplete="off" onChange={handleInputChange} value={input}/>
				</form>
			</div>
		</div>
	)
}

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick);
	}
	const [input, setInput] = useState('');
	const navigate = useNavigate();
	const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = () => {
    navigate(`/search/${input}`);
  };

  return (
    <nav className="relative container flex items-center justify-between py-[20px] px-[20px] md:px-[50px] lg:px-[80px]">
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

			<form onSubmit={handleFormSubmit} className="md:w-[200px] lg:w-[350px] md:p-[8px] md:border border-gray-300 rounded-[10px] hidden md:flex items-center justify-between">
				<input required className="hidden md:block w-[80%] focus:outline-none text-[15px]" type="text" name="title" id="title" placeholder="Search anime, manga, or more..." autoComplete="off" onChange={handleInputChange} value={input}/>
				<button type="submit" onClick={handleFormSubmit}> <BiSearchAlt size={25}/> </button>
			</form>

			<button className="block md:hidden" type="submit" onClick={handleClick}> <BiSearchAlt size={25}/> </button>
			{
				isClick && (
					<MobileForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} input={input} click={handleClick}/>
				)
			}
		</nav>
  )
}

export default Navbar