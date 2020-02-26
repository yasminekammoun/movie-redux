import { ADD_MOVIE } from "../actions/types";
import { REMOVE_MOVIE } from "../actions/types";
import { SEARCH_MOVIE, EDIT_MOVIE, GET_NAME, GET_RATE } from "../actions/types";
import uuid from "uuid";

const initialState = {
  movies: [
    {
      title: "Frozen 2",
      img: "https://images-na.ssl-images-amazon.com/images/I/81sxpgZO6BL.jpg",
      count: 2,
      id: uuid(),
      description:
        "Together with Anna, Kristoff, Olaf and Sven, she'll set out on a dangerous but remarkable journey. In Frozen, Elsa feared her powers were too much for the world. In Frozen II, she must hope they are enough."
    },
    {
      title: "Jumanji",
      img:
        "https://www.cinehorizons.net/sites/default/files/affiches/1357318196-jumanji-next-level.jpg",
      count: 4,
      id: uuid(),
      description:
        "Jumanji, one of the most unique--and dangerous--board games ever, falls into the hands of the curious teen, Alan Parrish, in 1969. Mysterious and magical, the game strands the unsuspecting boy in the lush, savage forests of a mythical realm."
    },
    {
      title: "Black christmas",
      img:
        "http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/60/02/49/18698178.jpg",
      count: 3,
      id: uuid(),
      description:
        "A group of female students are stalked by a stranger during their Christmas break. That is until the young sorority pledges discover that the killer is part of an underground college conspiracy."
    }
  ],
  keyword: "",
  rating: 1,
  filtredList: []
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: state.movies.concat(action.payload) };
    case SEARCH_MOVIE:
      return {
        ...state,
        filtredList: state.movies.filter(el => el.rating > state.rating)
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el => el.id !== action.payload)
      };
    case GET_RATE:
      return { ...state, rating: action.payload };
    case GET_NAME:
      return { ...state, keyword: action.payload };
    case EDIT_MOVIE:
      return state.movies.map(el =>
        el.id === action.payload.id ? action.payload : el
      );
    default:
      return state;
  }
};

export default MovieReducer;
