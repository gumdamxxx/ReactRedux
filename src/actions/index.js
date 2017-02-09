import axios from 'axios';
export const FETCH_WEATHER = 'FEATCH_WEATHER';
export const CREATE_POST = 'CREATE_POST ';
export const FETCH_POSTS = 'FETCH_POSTS ';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = `http://ali-weather.showapi.com/`;
const API_KEY = '165da94987284a69834a639c69596038';
const FORM_URL = '	http://reduxblog.herokuapp.com/api/posts';
const FORM_API_KEY = 'gumdamxxx';
export function fetchWeather(city = "丽江") {
    const url = `weatherhistory?area=${encodeURIComponent(city)}&month=201701`;
    const instance = axios.create({
        baseURL: ROOT_URL,
        timeout: 1000,
        headers: {'Authorization': `APPCODE ${API_KEY}`}
    });
    const request = instance.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


export function createPost(props) {
    const request = axios.post(`${FORM_URL}/posts/${FORM_API_KEY}`);
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPosts(id) {
    const request  = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${FORM_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    }
}