/* eslint-disable react/prop-types */
import { useRef } from "react";
import Slider from "react-slick";
import { BigCards, JumbotronCards, MoreLikeThisCard } from "./Cards";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


export const JumbotronCarousel = ({data}) => {
	const slider = useRef(null);

  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responesive: [
			{
				breakpoint: 320,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};
	
  return (
			<div className="relative">
        <Slider {...settings} ref={slider}>
					{
						data.map((item) => {
							return (
								<JumbotronCards key={item.mal_id} data={item} />
							)
						})
					}
        </Slider>
				<div className="hidden absolute top-0 left-0 h-full text-white md:flex items-center pl-[30px]">
					<button className="button" onClick={previous}>
						<FaAngleLeft size={30}/>
					</button>
				</div>
				<div className="hidden absolute top-0 right-0 h-full text-white md:flex items-center pr-[30px]">
					<button className="button" onClick={next}>
						<FaAngleRight size={30}/>
					</button>
				</div>
      </div>
  )
}

export const BigCarousel = ({data}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					className: 'center',
					centerPadding: '30px'
				}
			}
		]
	};

	return (
		<div className="">
      <Slider {...settings}>
				{
					data.map((item) => {
						return (
							<div className="" key={item.mal_id}>
								<BigCards key={item.mal_id} data={item} />
							</div>
						)
					})
				}
      </Slider>
    </div>
	)
}

export const MoreLikeThisCarousel = ({data}) => {
	const slider = useRef(null);

  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					className: 'center',
					centerPadding: '30px'
				}
			}
		]
	};

	return (
		<div className="relative flex flex-col items-center justify-center">
			<div className="w-[100%] lg:w-[80%]">
				<div className="w-[100%]">
					<Slider {...settings} ref={slider}>
						{
							data.map((item) => {
								return (
									<div className="" key={item.mal_id}>
										<MoreLikeThisCard key={item.mal_id} data={item} />
									</div>
								)
							})
						}
					</Slider>
				</div>
			</div>
				<div className="hidden absolute top-0 left-0 h-full text-white lg:flex items-center pl-[30px]">
					<button className="border-0 p-[5px] rounded-full bg-gray-500 lg:p-0 lg:rounded-none lg:bg-transparent" onClick={previous}>
						<FaAngleLeft size={30} color="black"/>
					</button>
				</div>
				<div className="hidden absolute top-0 right-0 h-full text-white lg:flex items-center pr-[30px]">
					<button className="border-0 p-[5px] rounded-full bg-gray-500 lg:p-0 lg:rounded-none lg:bg-transparent" onClick={next}>
						<FaAngleRight size={30} color="black"/>
					</button>
				</div>
			
			<div className="flex lg:hidden items-center justify-between w-full my-[20px]">
				<button className="" onClick={previous}>
					<FaAngleLeft size={30} color="black"/>
				</button>
				<button className="" onClick={next}>
					<FaAngleRight size={30} color="black"/>
				</button>
			</div>
    </div>
	)
}