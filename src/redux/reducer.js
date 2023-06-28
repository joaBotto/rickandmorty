import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
  myFavourites: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_FAV:
      return {
        ...state,
        myFavourites: [...state.myFavourites, payload]
      };
    case REMOVE_FAV:
      const filtered = state.myFavourites.filter((character) => character.id !== payload)
      return {
        myFavourites: filtered
      }
    default: return state;
  } 
};

export default reducer;
