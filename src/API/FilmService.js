import axios from 'axios';

export default class FilmService {
    static async getFilms() {
        return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
            params: {
                page: 3
            },
            headers: {
                'X-API-KEY': 'cbd19c79-5b04-4b60-818d-0bc745d2454c',
                'Content-Type': 'application/json',
            }
        })
    }
    static async getFilmById(id) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
    }
}