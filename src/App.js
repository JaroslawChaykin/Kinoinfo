import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/MoviePage/MoviePage';
import MainPage from './pages/MainPage/MainPage';
import './App.scss';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/movies/:id'} element={<MoviePage/>}/>
              <Route path={'*'} element={<Navigate to={'/'}/>}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
