import axios from 'axios';

const api = 'http://10.0.2.2:3000';

export async function getPhotos() {

 const res = await axios.get(`${api}/photos`);
 
 return {
     type: 'GET_PHOTOS',
     payload: res.data
 }
}