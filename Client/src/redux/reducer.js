import { ADD_FAV, ORDER, REMOVE_FAV, FILTER } from "./types";

const initialState = {
  myFavourites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavourites: [...state.allCharacters, payload],
      };
    case REMOVE_FAV:
      let filtered = state.myFavourites.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        myFavourites: filtered,
      };
    case FILTER:
      const filteredByGender = [...state.allCharacters].filter((char) => {
        return char.gender === payload;
      });
      return {
        ...state,
        myFavourites: filteredByGender,
      };
    case ORDER:
      const filterByOrder = [...state.allCharacters].sort((a, b) => {
        if (a.id > b.id) {
          return payload === "A" ? 1 : -1;
        } else if (a.id < b.id) {
          return payload === "D" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavourites: filterByOrder,
      };
    default:
      return state;
  }
};

export default reducer;
