/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import Layout from "../../components/Layout"
import { GetAnimeSeason, GetSeasonList } from "../../utils/api";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BigCards } from "../../components/Cards";
import { CustomHeightLoading, FullLoading } from "../../components/Loading";

const Dropdown = ({ data, setActiveTab }) => {
	const [selectedOption, setSelectedOption] = useState({ year: 2023, season: 'winter' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectOption = (year, season) => {
    const option = { year, season };
    setSelectedOption(option);
    setActiveTab(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
		<div className="flex flex-col">
			<div className="text-white bg-gray-700 hover:bg-gray-900 w-[150px]" ref={dropdownRef}>
				<div className="w-full flex items-center justify-center">
					<button className="p-[15px]" onClick={toggleDropdown}>
						{selectedOption ? <h1 className="capitalize flex items-center gap-[3px]"><FaAngleDown />{selectedOption.season} {selectedOption.year}</h1> : <h1 className="flex items-center gap-[3px]"><FaAngleDown /> Select Year</h1>}
					</button>
				</div>
				{isDropdownOpen && (
					<div className="h-[300px] overflow-y-auto">
						{data.slice(0, 16).map((item) => (
							item.seasons.map((season) => (
								<div
									key={`${item.year}-${season}`}
									onClick={() => selectOption(item.year, season)}
									className="p-[15px] hover:cursor-pointer text-white bg-gray-700 hover:bg-gray-900"
								>
									{item.year} {season}
								</div>
							))
						))}
					</div>
				)}
			</div>
		</div>
  );
};

const AnimeSeasonList = () => {
	const [seasonList, setSeasonList] = useState([]);
	const [animeSeason, setAnimeSeason] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
  const [isPageChanging, setIsPageChanging] = useState(false);
	const [activeTab, setActiveTab] = useState({ year: 2023, season: 'fall' });
	
	const fetchSeasonList = async () => {
		const apiData = await GetSeasonList();
		if (apiData) {
			setSeasonList(apiData.data);
		}
	}

	const fecthAnimeData = async (year, season, page) => {
		setIsPageChanging(true);
    try {
      const apiData = await GetAnimeSeason(year, season, page);
      const animeData = apiData.data
      const pagination = apiData.pagination

      if (apiData) {
        setAnimeSeason(animeData);
        setHasNextPage(pagination.has_next_page);
				setIsLoading(false)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
      setIsPageChanging(false);
    }
	}

	useEffect(()=> {
		fetchSeasonList();
		fecthAnimeData(activeTab.year, activeTab.season, currentPage)
	}, [activeTab, currentPage]);

	if (isLoading) {
    return (
      <FullLoading />
    )
  }

  return (
		<Layout>
			<div className="container container__padding">
				<div className="flex flex-col gap-[20px] md:gap-0 md:flex-row items-center relative mb-[50px]">
					<h1 className="text-[2rem]">Anime Season</h1>
					<div className="absolute top-[60px] md:top-0 md:right-0 z-40">
						<Dropdown data={seasonList} setActiveTab={setActiveTab}/>
					</div>
				</div>

				{
          isPageChanging && (
            <CustomHeightLoading />
          )
        }
        <div className="mt-[90px] md:mt-0 flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
        {
          animeSeason.map((anime) => {
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

export default AnimeSeasonList