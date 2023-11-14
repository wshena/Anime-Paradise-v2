import { useEffect, useState } from "react"
import { AnimeThisSeason } from "../utils/api";
import HomeCarousel from "./HomeCarousel";

const AnimeThisSeasonCarousel = () => {
	const [animeThisSeason, setAnimeThisSeason] = useState([]);
	const fecthData = async () => {
		const apiData = await AnimeThisSeason();
		if (apiData) {
			setAnimeThisSeason(apiData.data)
		}
	}

	useEffect(() => {
		fecthData();
	}, [])

  return (
    <HomeCarousel data={animeThisSeason} headline1={'Anime this seasons!'} headline2={'Find the best new and continuing this anime seasons here!'}/>
  )
}

export default AnimeThisSeasonCarousel