import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopAnime from './pages/anime/TopAnime';
import TopManga from './pages/manga/TopManga';
import AnimeSeasonList from './pages/anime/AnimeSeasonList';
import Search from './pages/Search';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anime/top' element={<TopAnime />} />
        <Route path='/anime/season' element={<AnimeSeasonList />} />
        <Route path='/manga/top' element={<TopManga />} />
        <Route path='/search/:title' element={<Search />} />
        <Route path='/:title/:id/:type' element={<Details />} />
      </Routes>
    </Router>        
  );
}

export default App;