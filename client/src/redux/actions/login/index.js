import axios from "axios";
import { API_BASE_URL } from "../../../constants/appConstants";
import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS ,LOGOUT} from "../../actionTypes";
import { getCartList } from "../cartItem";
import { getWishlist } from "../wishlist";

export const userLogin = (email,password) => {
  return async (dispatch) => {
    try {
       await axios
        .post(API_BASE_URL +"signin",{email,password})
        .then((response) => {
          if (response.data.status == 1) {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: response.data,
            });
            dispatch(getWishlist());
            dispatch(getCartList())
          }
        });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:error
      });
    }
  };
};


export const userSignup = (name, email, password) => {
    return async (dispatch) => {
      try {
         await axios
          .post(API_BASE_URL + "signup",{name, email, password})
          .then((response) => {
            console.log(response);
            if (response.data.status == 1) {
              dispatch({
                type: SIGNUP_SUCCESS,
                payload: response,
              });
            }
          });
      } catch (error) {
        dispatch({
          type: SIGNUP_FAIL,
          payload:error
        });
      }
    };
  };


  export const logoutUser=()=>{
    return async (dispatch) => {
      dispatch({
        type: LOGOUT,
        payload: {},
      });
      }    
  }
  