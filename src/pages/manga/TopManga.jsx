import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import getRandomItems from "../../utils/functions";
import { JumbotronCarousel } from "../../components/Carousel";
import axios from "axios";
import { BigCards } from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { CustomHeightLoading, FullLoading } from "../../components/Loading";

const TopManga = () => {
  const [topManga, setTopManga] = useState([]);
  const [jumbotronAnime, setJumbotronAnime] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageChanging, setIsPageChanging] = useState(false);

  const fetchData = async (page) => {
    setIsPageChanging(true); // Menetapkan isLoading menjadi true ketika mulai mengambil data baru
    try {
      const apiData = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/top/manga?page=${page}`);
      const animeData = apiData.data.data
      const pagination = apiData.data.pagination

      if (apiData) {
        setTopManga(animeData);
        setJumbotronAnime(getRandomItems(animeData.slice(), 5));
        setHasNextPage(pagination.has_next_page);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
      setIsPageChanging(false);
    }
  }

  useEffect(() => {
    fetchData(currentPage);
  },[currentPage])

  if (isLoading) {
    return (
      <FullLoading />
    )
  }

  return (
    <Layout>
      <JumbotronCarousel data={jumbotronAnime} />
      <div className="container container__padding">
        <h1 className="text-[2rem] mb-[20px]">Top Manga</h1>
        {
          isPageChanging && (
            <CustomHeightLoading />
          )
        }
        <div className="flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
        {
          topManga.map((anime) => {
            return (
              <div key={anime.mal_id}>
                <BigCards data={anime} />
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="container flex items-center justify-center mb-[20px] px-[20px] md:px-[50px] lg:px-[80px]">
        <div className="flex justify-between items-center">
          <button className="p-[20px] border rounded-l-[50px] hover:cursor-pointer hover:text-white hover:bg-orange-500" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> <FaAngleLeft size={18}/> </button>
          <button className="p-[20px] border rounded-r-[50px] hover:cursor-pointer hover:text-white hover:bg-orange-500" onClick={() => setCurrentPage(currentPage + 1)} disabled={!hasNextPage}> <FaAngleRight size={18} /> </button>
        </div>
      </div>
    </Layout>
  )
}

export default TopManga