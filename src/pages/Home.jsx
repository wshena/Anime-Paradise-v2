import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { AnimeThisSeason, GetTopAnime, GetTopManga } from '../utils/api';
import { JumbotronCarousel } from '../components/Carousel';
import getRandomItems from '../utils/functions';
import { AnimeTrailerSection } from '../components/AnimeTrailerSection';
import HomeCarousel from '../components/HomeCarousel';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jumbotronAnime, setJumbotronAnime] = useState([]);
	const [thisAnimeSeason, setThisAnimeSeason] = useState([]);
	const [topAnime, setTopAnime] = useState([])
	const [topManga, setTopManga] = useState([])

	const fecthData = async () => {
		const apiData = await AnimeThisSeason();
		const topAnime = await GetTopAnime(20);
		const topManga = await GetTopManga(20);

		if (apiData && topAnime && topManga) {
			setJumbotronAnime(getRandomItems(apiData.data.slice(), 3));
			setThisAnimeSeason(apiData.data);
			setTopAnime(topAnime.data);
			setTopManga(topManga.data);
			setIsLoading(false);
		}
	}

	useEffect(()=> {
		fecthData();
	}, []);

	if (isLoading) {
		return (
			<div className="w-full h-[100vh] flex items-center justify-center">
				<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
			</div>
		)
	}

  return (
    <Layout>
			<JumbotronCarousel data={jumbotronAnime}/>
			<HomeCarousel data={thisAnimeSeason} headline1={'Anime this seasons!'} headline2={'Find the best new and continuing this anime seasons here!'}/>
			<AnimeTrailerSection data={getRandomItems(thisAnimeSeason.slice(), 1)}/>
			<AnimeTrailerSection data={getRandomItems(thisAnimeSeason.slice(), 1)}/>
			<HomeCarousel data={topAnime} headline1={'Watch the top animes!'} headline2={'browse and discover top anime recommendations recommended by other users'}/>
			<HomeCarousel data={topManga} headline1={'Read the top manga!'} headline2={'browse and discover top manga recommendations recommended by other users'}/>
    </Layout>
  )
}

export default Home