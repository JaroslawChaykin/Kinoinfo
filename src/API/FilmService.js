import axios from 'axios';

const API_FILMS_KEY = 'f5b645fa-06a0-4b07-bb9e-15e285ff1473';

export default class FilmService {

    static async getFilmById(id) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
    static async getFilmBoxOffice(id) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`, {
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
    static async getFilmStaff(filmId) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff`, {
            params: {
                filmId
            },
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
    static async getName(nameID) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${nameID}`, {
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
    static async getFilmVideos(filmId) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/videos`, {
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
    static async getFilmImages(filmId) {
        return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/images`, {
            headers: {
                'X-API-KEY': API_FILMS_KEY,
                'Content-Type': 'application/json',
            }
        })
    }
}