import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FilmsList from './components/FilmsList/FilmsList';
import MoviePage from './pages/MoviePage/MoviePage';
import './App.scss';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path={'/films'} element={<FilmsList/>}/>
              <Route path={'/films/:id'} element={<MoviePage/>}/>
              <Route path={'*'} element={<Navigate to={'/films'} />}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
