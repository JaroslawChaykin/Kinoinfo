import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/Movie/MoviePage';
import MainPage from './pages/Main/MainPage';
import './App.scss';
import Name from './pages/Name/Name';
import Gallery from './pages/Gallery/Gallery';
import Staff from './pages/Staff/Staff';

function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/movies/:id'} element={<MoviePage/>}/>
              <Route path={'/movies/:id/gallery'} element={<Gallery/>}/>
              <Route path={'/movies/:id/staff'} element={<Staff/>}/>
              <Route path={'/name/:id'} element={<Name/>}/>
              <Route path={'*'} element={<Navigate to={'/'}/>}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
