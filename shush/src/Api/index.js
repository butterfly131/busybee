import axios from 'axios';

const url = 'https://busybee-api.vercel.app';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);