import { ADD_FAV, REMOVE_FAV } from "./types";
import axios from "axios";
const URL = "http://localhost:3001/rickandmorty/fav";

export const addFav = (character) => {
  return (dispatch) => {
    axios.post(`${URL}`, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  return (dispatch) => {
    axios.delete(`${URL}/${id}`).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};
