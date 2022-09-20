import {GET_BOOK_DATA} from "../../actionTypes.js"
import axios from "axios";
import { API_BASE_URL } from "../../../constants/appConstants";

export const getBooksData = (email,password) => {
  return async (dispatch) => {
    try {
       await axios
        .get(API_BASE_URL +"getBooksData")
        .then((response) => {
          if (response.data) {
            dispatch({
              type: GET_BOOK_DATA,
              payload: response.data,
            });
          }
        });
    } catch (error) {
      dispatch({
        type: GET_BOOK_DATA,
        payload: [],
      });
    }
  };
};

  