import axios from 'axios';
const api = 'http://10.0.2.2:3000';


export function getPhotos() {
    return (dispatch) => {
        axios.get(`${api}/photos`)
        .then(res => {
            dispatch({
                type: 'GET_PHOTOS',
                payload: res.data
            })
        })
    }
  
}