import {REMOVE_MOVIE} from "./types"
import {EDIT_MOVIE} from "./types"
import{ ADD_MOVIE }from './types';
import{ SEARCH_MOVIE ,GET_NAME ,GET_RATE }from './types';

export const addMovie= newMovie =>{
    return{
    type: ADD_MOVIE,
    payload : newMovie
    }
}
export const searchMovie= () =>{
    return{
    type: SEARCH_MOVIE
    }
}
export const removeMovie=(id)=>{
    return{
    type: REMOVE_MOVIE,
    payload : id
    }
}
export const editMovie=(movieToUpdate)=>{
    return{
    type: EDIT_MOVIE,
    payload : movieToUpdate
    }
}
export const getName = name => {
    return {
      type: GET_NAME,
      payload: name
    };
  };
  export const getRating = rating => {
    return {
      type: GET_RATE,
      payload: rating
    };
  };