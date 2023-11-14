import { useEffect, useState } from "react";
import { GetTopManga } from "../utils/api";
import HomeCarousel from "./HomeCarousel";

const TopMangaCarousel = () => {
	const [topManga, setTopManga] = useState([]);
	const fecthData = async () => {
		const apiData = await GetTopManga();
		if (apiData) {
			setTopManga(apiData.data)
		}
	}

	useEffect(() => {
		fecthData();
	}, [])
  return (
    <HomeCarousel data={topManga} headline1={'Read the top manga!'} headline2={'browse and discover top manga recommendations recommended by other users'}/>
  )
}

export default TopMangaCarousel