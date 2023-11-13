/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai"
import { sliceParagraph } from "../utils/functions"

export const AnimeTrailerSection = ({data}) => {
	return (
		<div className="container py-[30px] px-[20px] md:px-[50px] lg:px-[80px]">
			{
				data.map((anime) => {
					return (
						<div className="flex flex-col lg:flex-row items-center gap-[50px] w-full" key={anime.mal_id}>
							<iframe allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen className="w-[100%] lg:w-[50%] h-[300px]" src={anime.trailer.embed_url}></iframe>
							<div className='w-[100%] lg:w-[50%]'>
								<div className="flex items-center gap-[10px]">
									<h1 className='font-bold text-[1.3rem]'>{anime.title}</h1>
									<p className='text-[1.5rem]'>({anime.score})</p>
									<AiFillStar size={25}/>
								</div>
								<div className="flex flex-wrap justify-evently">
									<p className='my-[10px]'>{sliceParagraph(anime.synopsis, 80)}</p>
								</div>
								<button className='border py-[8px] px-[20px]'>More Info</button>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}