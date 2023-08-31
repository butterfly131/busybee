import * as api from '../Api/index';

import { FETCH_ALL, CREATE } from '../constants/actionTypes'

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      console.log("GET_POSTS", data);
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const createPosts = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch({ type: CREATE, payload: data });
      console.log("CREATE_POSTS", data);
    } catch (error) {
      console.log(error);
    }
  };