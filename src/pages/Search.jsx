import { useParams } from "react-router-dom"
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { GetAnimeSearch, GetMangaSearch } from "../utils/api";
import { BigCards } from "../components/Cards";
import { CustomHeightLoading } from "../components/Loading";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Search = () => {
	const {title} = useParams();
	const [animeSearch, setAnimeSearch] = useState([]);
	const [mangaSearch, setMangaSearch] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageChanging, setIsPageChanging] = useState(false);

	const fetchData = async (title, page) => {
		try {
			const animeSearchRespone = await GetAnimeSearch(title, page);
			const mangaSearchRespone = await GetMangaSearch(title, page);
			setIsPageChanging(true);
	
			if (animeSearchRespone && mangaSearchRespone) {
				const newAnimeData = animeSearchRespone.data;
				const newMangaData = mangaSearchRespone.data;
				const animePagination = animeSearchRespone.pagination
				
				setAnimeSearch(newAnimeData);
				setMangaSearch(newMangaData)
				setHasNextPage(animePagination.has_next_page);
				setIsLoading(false);
			}
			
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setIsLoading(false);
      setIsPageChanging(false);
		}
	}

	const [isClick, setIsClick] = useState(false);
	const handleOnClick = () => {
		setIsClick(!isClick);
	}

	useEffect(() => {
		fetchData(title, currentPage)
	}, [title, currentPage])

	console.log(mangaSearch)

  return (
		<Layout>
			<div className="container container__padding">
				<div className="">
					<h1 className="font-bold text-[2rem] mb-[40px]">Searching anime of {title}</h1>
					{
						isPageChanging && (
							<CustomHeightLoading />
						)
					}
					{
						!animeSearch ? (
							<div className="flex items-center justify-center w-full">
								<h1 className="font-bold text-[1.5rem]">No Result</h1>
							</div>
						) : (
								isLoading ? (
									<div className="p-[40px]">
										<CustomHeightLoading />
									</div>
								) : (
									<div className="">
										<div className="flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
											{
												animeSearch.slice(0,10).map((anime) => (
													<div key={anime.mal_id}>
														<BigCards data={anime} />
													</div>
												))
											}
										</div>
										{
											isClick && (
												<div className="">
													<div className="mt-[20px] flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
														{
															animeSearch.slice(11, animeSearch.length).map((anime) => (
																<div key={anime.mal_id}>
																	<BigCards data={anime} />
																</div>
															))
														}
													</div>
													<div className="mt-[30px] container flex items-center justify-center mb-[20px] px-[20px] md:px-[50px] lg:px-[80px]">
														<div className="flex justify-between items-center">
															<button className="p-[20px] border rounded-l-[50px] hover:cursor-pointer hover:text-white hover:bg-orange-500" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> <FaAngleLeft size={18}/> </button>
															<button className="p-[20px] border rounded-r-[50px] hover:cursor-pointer hover:text-white hover:bg-orange-500" onClick={() => setCurrentPage(currentPage + 1)} disabled={!hasNextPage}> <FaAngleRight size={18} /> </button>
														</div>
													</div>
												</div>
											)
										}
										<div className="my-[40px] w-full flex items-center justify-center">
											<button className='border border-black py-[8px] px-[20px]' onClick={handleOnClick}>
												{
													isClick ? 'Load Less' : 'Load More'
												}
											</button>
										</div>
									</div>
								)
						)
					}
				</div>

				<div className="">
					<h1 className="font-bold text-[2rem] mb-[40px]">Searching manga of {title}</h1>
					{
						isPageChanging && (
							<CustomHeightLoading />
						)
					}
					{
						!mangaSearch ? (
							<div className="flex items-center justify-center w-full">
								<h1 className="font-bold text-[1.5rem]">No Result</h1>
							</div>
						) : (
								isLoading ? (
									<div className="p-[40px]">
										<CustomHeightLoading />
									</div>
								) : (
									<div className="">
										<div className="flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
											{
												mangaSearch.slice(0,10).map((anime) => (
													<div key={anime.mal_id}>
														<BigCards data={anime} />
													</div>
												))
											}
										</div>
										{
											isClick && (
												<div className="">
													<div className="mt-[20px] flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
														{
															mangaSearch.slice(11, mangaSearch.length).map((anime) => (
																<div key={anime.mal_id}>
																	<BigCards data={anime} />
																</div>
															))
														}
													</div>
													<div className="mt-[30px] container flex items-center justify-center mb-[20px] px-[20px] md:px-[50px] lg:px-[80px]">
														<div className="flex justify-between items-center">
															<button className="p-[20px] border rounded-l-[50px] hover:cursor-pointer hover:text-white hover:bg-orange-500" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> <FaAngleLeft size={18}/> </button>
															<button className="p-[20px] border rounded-r-[50px] hover:cursor-pointer hover:text-white hover:bg-orange-500" onClick={() => setCurrentPage(currentPage + 1)} disabled={!hasNextPage}> <FaAngleRight size={18} /> </button>
														</div>
													</div>
												</div>
											)
										}
										<div className="my-[40px] w-full flex items-center justify-center">
											<button className='border border-black py-[8px] px-[20px]' onClick={handleOnClick}>
												{
													isClick ? 'Load Less' : 'Load More'
												}
											</button>
										</div>
									</div>
								)
						)
					}
				</div>
			</div>
		</Layout>
  )
}

export default Search