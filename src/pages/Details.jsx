/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { GetAnimeFullById, GetAnimeMoreLikeThis, GetMangaFullById, GetMangaMoreLikeThis } from "../utils/api";
import { MoreLikeThisCarousel } from "../components/Carousel";

const ShowMore = ({ text, maxChar }) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleShowMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p className={`text-black ${showFullText ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      {!showFullText && text?.length > maxChar ? (
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleShowMore}
        >
          Show More
        </button>
      ) : (
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleShowMore}
        >
          Show Less
        </button>
      )
    }
    </div>
  );
};

const Details = () => {
  const { title, id, type } = useParams();
  const [detail, setDetail] = useState({});
  const [moreLikeThis, setMoreLikeThis] = useState([]);

  const fetchDetail = async (id, type) => {
    try {
      if (type === 'Manga') {
        const mangaDetail = await GetMangaFullById(id);
        const mangaMoreLikeThis = await GetMangaMoreLikeThis(id);

        setDetail(mangaDetail);
        setMoreLikeThis(mangaMoreLikeThis);
      } else {
        const animeDetail = await GetAnimeFullById(id);
        const animeMoreLikeThis = await GetAnimeMoreLikeThis(id);

        setDetail(animeDetail);
        setMoreLikeThis(animeMoreLikeThis);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (type) {
      fetchDetail(id, type);
    }
  }, [id, type]);

  console.log(detail)

  return (
    <Layout>
      <div className="relative w-full h-[350px] bg-cover bg-center" style={{
        backgroundImage: `url(${detail.images?.jpg.image_url})`
      }}>
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-80">
          <div className="flex items-center justify-center h-full w-full">
            <div className="w-[200px] h-[300px]">
              <img src={detail.images?.jpg.image_url} alt={detail?.title} />
            </div>
          </div>
        </div>
      </div>
      <div className="container container__padding">
        <div className="flex flex-col lg:flex-row gap-[40px] justify-between">
          <div className="w-[100%] lg:w-[50%]">
            <h1 className='font-bold text-[1.9rem]'>{title} ({detail.type})</h1>
            <div className="flex items-center gap-[10px] mb-[15px]">
              <h3>Average Rating: {detail?.score}</h3>
              <span className="block w-[1px] h-[20px] bg-gray-900"></span>
              <h1>{detail?.scored_by} Reviews</h1>
            </div>
            <ShowMore text={detail?.synopsis} maxChar={250} />
            <div className="my-[20px] flex flex-wrap items-center gap-3">
              {
                detail?.genres?.map((item, idx) => {
                  return <div key={idx} className="px-3 py-1 bg-gray-700 text-white"><h1>{item.name}</h1></div>
                })
              }
            </div>
            {
              detail.type !== 'Manga' && (
                <div className="flex justify-between gap-3 pb-3 border-black border-b">
                  <h3>Studios:</h3>
                  <h3>{detail?.studios?.map(studio => studio.name).join(', ')}</h3>
                </div>
              )
            }

            {
              detail.type === 'Manga' && (
                <div className="flex justify-between gap-3 pb-3 border-black border-b">
                  <h3>Author:</h3>
                  <h3>{detail?.authors?.map(author => author.name).join(', ')}</h3>
                </div>
              )
            }

            {
              detail.type !== 'Manga' && (
                <div className="mt-[10px] flex justify-between gap-3 pb-3 border-black border-b">
                  <h3>Producers:</h3>
                  <h3>{detail?.producers?.map(producer => producer.name).join(', ')}</h3>
                </div>
              )
            }

            {
              detail.type === 'Manga' && (
                <div className="mt-[10px] flex justify-between gap-3 pb-3 border-black border-b">
                  <h3>Serializations:</h3>
                  <h3>{detail?.serializations?.map(serialization => serialization.name).join(', ')}</h3>
                </div>
              )
            }
          </div>
          
          {
            (detail.type !== 'Manga') && (
              <div className="w-[100%] flex items-center justify-center lg:w-[40%]">
                <iframe
                  className="w-[80%]"
                  height="250"
                  src={detail?.trailer?.embed_url}
                  title="YouTube Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )
          }
        </div>
        
        {
          moreLikeThis.length > 0 ? (
            <div className="mt-[50px]">
              <div className="">
                <h1 className="font-bold text-[1.9rem] mb-[20px]">More Like This</h1>
                <MoreLikeThisCarousel data={moreLikeThis} />
              </div>
            </div>
          ) : (
            ''
          )
        }
      </div>
    </Layout>
  )
}

export default Details