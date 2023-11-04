import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38081629-f3deed67400d6b6dc0e964249';
const urlAxiosKey = `?key=${API_KEY}`;

export const fetchImage = async (page, query) => {
  const response = await axios.get(urlAxiosKey, {
    params: {
      page: page,
      q: query,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
};
