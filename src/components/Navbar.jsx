/* eslint-disable react/prop-types */
import { useState } from "react"
import { NavbarNavigation } from "../utils/data"
import {BiSearchAlt} from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";

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

const MobileNav = ({click}) => {
	return (
		<div className="z-50 absolute top-0 left-0 w-[100vw] h-[100vh] bg-gray-700 text-white p-[50px]">
			<div className="flex flex-col gap-[20px]">
				<div className="w-full flex justify-end">
					<button onClick={click}> <ImCancelCircle color="white" size={24}/> </button>
				</div>

				<div className="flex flex-col border border-red-100">
					{
						NavbarNavigation.map((nav) => {
							return (
								<div className="w-full flex justify-end mb-[10px]" key={nav.link}>
									<button>{nav.link}</button>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

const DropDownNav = ({link, array}) => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick)
	}
	return (
		<div className="relative">
			<button className="hover:cursor-pointer" onClick={handleClick}>{link}</button>

			{
				isClick && (
					<div className="absolute top-[40px] left-0 bg-white text-black z-50 flex flex-col w-[170px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
						{
							array.map((nav) => {
								return (
									<div key={nav.link} className="hover:bg-black p-[20px] hover:text-white">
										<Link to={nav.to}>{nav.link}</Link>
									</div>
								)
							})
						}
					</div>
				)
			}
		</div>
	)
}

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);
	const [mobileNavIsClick, setMobileNavIsClick] = useState(false);

	const hendleMobileNavClick = () => {
		setMobileNavIsClick(!mobileNavIsClick);
	}
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
								<DropDownNav link={nav.link} array={nav.dropdown} key={nav.link}/>
							)
						})
					}
				</div>
			</div>

			<form onSubmit={handleFormSubmit} className="md:w-[200px] lg:w-[350px] md:p-[8px] md:border border-gray-300 rounded-[10px] hidden md:flex items-center justify-between">
				<input required className="hidden md:block w-[80%] focus:outline-none text-[15px]" type="text" name="title" id="title" placeholder="Search anime, manga, or more..." autoComplete="off" onChange={handleInputChange} value={input}/>
				<button type="submit" onClick={handleFormSubmit}> <BiSearchAlt size={25}/> </button>
			</form>

			<div className="flex gap-[20px]">
				<button className="block md:hidden" type="submit" onClick={hendleMobileNavClick}> <IoMdMenu  size={25}/> </button>

				<button className="block md:hidden" type="submit" onClick={handleClick}> <BiSearchAlt size={25}/> </button>
			</div>
			{
				isClick && (
					<MobileForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} input={input} click={handleClick}/>
				)
			}
			{
				mobileNavIsClick && (
					<MobileNav click={hendleMobileNavClick} />
				)
			}
		</nav>
  )
}

export default Navbar