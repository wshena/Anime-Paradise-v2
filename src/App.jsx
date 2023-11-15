import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopAnime from './pages/anime/TopAnime';
import TopManga from './pages/manga/TopManga';
import AnimeSeasonList from './pages/anime/AnimeSeasonList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      <Routes>
        <Route path='/anime/top' Component={TopAnime} />
      </Routes>
      <Routes>
        <Route path='/anime/season' Component={AnimeSeasonList} />
      </Routes>
      <Routes>
        <Route path='/manga/top' Component={TopManga} />
      </Routes>
    </Router>    
  );
}

export default App;