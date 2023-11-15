/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BigCarousel } from "./Carousel"

const HomeCarousel = ( props ) => {
	const { headline1, headline2, data, navigation } = props;
	
  return (
    <div className="container container__padding">
			<div className="flex flex-col gap-[10px] md:gap-0 md:flex-row md:items-center justify-between mb-[20px]">
				<div className="md:leading-[30px]">
					<h1 className='font-bold text-[1.4rem] md:text-[1.9rem]'>{headline1}</h1>
					<h3 className='text-[1rem] md:text-[1.2rem] text-gray-500'>{headline2}</h3>
				</div>
				<Link to={navigation}>See more</Link>
			</div>
			<BigCarousel data={data}/>
		</div>
  )
}

export default HomeCarousel