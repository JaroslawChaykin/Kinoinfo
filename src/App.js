import './App.scss';
import FilmsList from './components/FilmsList/FilmsList';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';

let Home = () => {
    let params = useParams()
    return <h1>Home</h1>
}

function App() {
    return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path={'/films'} element={<FilmsList/>}/>
                  <Route path={'/home'} element={<Home/>}/>
                  <Route path={'/film/:id'} element={<Home/>}/>
                  <Route path={'*'} element={<Navigate to={'/films'} />}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App;
