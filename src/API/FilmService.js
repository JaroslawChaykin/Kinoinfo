import axios from 'axios';

const API_FILMS_KEY = 'cbd19c79-5b04-4b60-818d-0bc745d2454c';

export default class FilmService {

    static async getFilms() {
        return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
            params: {
                page: 1
            },
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
    static async getFilmById(id) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
}