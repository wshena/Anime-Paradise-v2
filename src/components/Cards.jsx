/* eslint-disable react/prop-types */

import { useState } from "react";
import {AiFillStar} from 'react-icons/ai'
import { sliceParagraph } from "../utils/functions";
import { Link } from "react-router-dom";

export const JumbotronCards = ({data}) => {
  return (
    <div className="relative w-full text-white flex justify-between h-[550px] lg:h-[400px] bg-center bg-cover py-[30px]" style={{
			backgroundImage : `url(${data.images?.jpg.image_url})`,
			backgroundRepeat: 'no-repeat',
		}}>
			<div className="absolute top-0 left-0 h-full w-full bg-black opacity-[0.7] z-10"></div>

			<div className="w-[100%] md:w-[65%] mx-auto flex flex-col gap-[20px] lg:gap-0 lg:flex-row items-center justify-between z-20 p-[20px] md:p-0">
				<div className="order-2 lg:order-1 w-[100%] lg:w-[50%] h-full flex md:items-center md:justify-center">
					<div className="flex flex-col">
						<h1 className="font-bold mb-[15px] text-[0.9rem] lg:text-[1.3rem]">{data.title}</h1>
						<p className="text-[12px] lg:text-[14px] hidden lg:inline-block">{sliceParagraph(data?.synopsis, 100)}</p>
						<p className="text-[12px] lg:text-[14px] inline-block lg:hidden">{sliceParagraph(data?.synopsis, 50)}</p>
						<div className="w-[100%] md:w-[70%]">
							<Link to={`/${data.title}/${data.mal_id}/${data.type}`}>
								<button className="mt-[20px] text-black bg-orange-500 py-[5px] px-[25px] font-bold text-[15px]">More Info</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-[150px] lg:w-[250px] lg:h-[100%] h-[300px] order-1 lg:order-2">
					<img src={data.images.jpg.image_url} alt={data.title} />
				</div>
			</div>
		</div>
  )
}

export const BigCards = ({data}) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	}
	const handleMouseExit = () => {
		setIsHovered(false)
	}
	return (
		<Link to={`/${data.title}/${data.mal_id}/${data.type}`}>
			<div className="w-[200px] relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
				<div className="w-[200px] h-[300px]">
					<img src={data.images.jpg.image_url} alt={data.title} />
				</div>
				<h1 className="truncate mt-[8px] font-bold text-[0.9rem]">{data.title}</h1>

				{
					isHovered && (
						<div className="absolute top-0 left-0 w-full h-full text-white bg-center bg-cover" style={{
							backgroundImage : `url(${data.images.jpg.image_url})`,
						}}>
							<div className="w-full h-full bg-black bg-opacity-80 p-[15px]">
								<div className="mb-[10px]">
									{/* <TruncatedHeading text={data.title} /> */}
									<h1 className="font-bold truncate">{data.title}</h1>
									<div className="flex items-center gap-[8px]">
										<p>{data.score}</p>
										<AiFillStar />
									</div>
								</div>
								<p className="line-clamp-6 text-[.8rem]">{data.synopsis}</p>
							</div>
						</div>
					)
				}
			</div>
		</Link>
	)
}

export const MoreLikeThisCard = ({data}) => {
	return (
		<Link to={data.entry.url} target="blank">
			<div className="w-[200px] relative">
				<div className="w-[200px] h-[300px]">
					<img src={data.entry.images.jpg.image_url} alt={data.entry.title} />
				</div>
				<h1 className="truncate mt-[8px] font-bold text-[0.9rem]">{data.entry.title}</h1>
			</div>
		</Link>
	)
}