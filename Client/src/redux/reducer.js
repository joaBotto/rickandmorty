import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
  myFavourites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavourites: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavourites: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
