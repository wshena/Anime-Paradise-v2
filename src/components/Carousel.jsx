/* eslint-disable react/prop-types */
import { useRef } from "react";
import Slider from "react-slick";
import { BigCards, JumbotronCards } from "./Cards";
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
								<JumbotronCards key={item.mal_id} title={item.title} image={item.images.jpg.image_url} synopsis={item.synopsis} />
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