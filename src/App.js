import './App.scss';
import FilmsList from './components/FilmsList/FilmsList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path={'/films'} element={<FilmsList/>}/>
              <Route path={'*'} element={<Navigate to={'/films'} />}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
