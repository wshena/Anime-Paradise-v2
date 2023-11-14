import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { AnimeThisSeason } from '../utils/api';
import { JumbotronCarousel } from '../components/Carousel';
import getRandomItems from '../utils/functions';
import { AnimeTrailerSection } from '../components/AnimeTrailerSection';
import AnimeThisSeasonCarousel from '../components/AnimeThisSeasonCarousel';
import TopAnimeCarousel from '../components/TopAnimeCarousel';
import TopMangaCarousel from '../components/TopMangaCarousel';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jumbotronAnime, setJumbotronAnime] = useState([]);
	const [thisAnimeSeason, setThisAnimeSeason] = useState([]);

	const fecthData = async () => {
		const apiData = await AnimeThisSeason();

		if (apiData) {
			setJumbotronAnime(getRandomItems(apiData.data.slice(), 3));
			setThisAnimeSeason(apiData.data);
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
			<AnimeThisSeasonCarousel />
			<AnimeTrailerSection data={getRandomItems(thisAnimeSeason.slice(), 1)}/>
			<AnimeTrailerSection data={getRandomItems(thisAnimeSeason.slice(), 1)}/>
			<TopAnimeCarousel />
			<TopMangaCarousel />
    </Layout>
  )
}

export default Home