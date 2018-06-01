import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'uuonnk4jucs0';
const API_TOKEN = '6d51e1a7d4c2464be137f2c7e419d08443edab1b57956aacdc9b7aac0afe5676';
export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);
  console.log(request);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
