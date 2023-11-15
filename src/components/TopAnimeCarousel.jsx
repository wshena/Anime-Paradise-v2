import { useEffect, useState } from "react";
import { GetTopAnime } from "../utils/api";
import HomeCarousel from "./HomeCarousel";

const TopAnimeCarousel = () => {
	const [topAnime, setTopAnime] = useState([]);
	const fecthData = async () => {
		const apiData = await GetTopAnime();
		if (apiData) {
			setTopAnime(apiData.data)
		}
	}

	useEffect(() => {
		fecthData();
	}, [])
  return (
    <HomeCarousel navigation={'/anime/top'} data={topAnime} headline1={'Watch the top animes!'} headline2={'browse and discover top anime recommendations recommended by other users'}/>
  )
}

export default TopAnimeCarousel