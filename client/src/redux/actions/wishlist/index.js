
import { API_BASE_URL } from "../../../constants/appConstants";
import axios from "axios";
import {ADD_ITEM_SUCCESS, GET_WISHLIST_ITEMS} from "../../actionTypes.js"

export const addToWishlist=(wishlistItem)=>async (dispatch,getState)=>{
    try{
        const { loginData={} } = getState();
        const { data } = await axios.post(API_BASE_URL +'wishlist-item-added', wishlistItem,{
            headers: {
              Authorization: ' Bearer ' + loginData.loginData.token
            }
          });
        dispatch({type:ADD_ITEM_SUCCESS,payload:data});
        dispatch(getWishlist());
    } 
    catch(error){
        console.log(error);
    }
}

export const getWishlist=()=>async (dispatch,getState)=>{
    try{
        const { loginData={} } = getState();
        const { data } = await axios.get(API_BASE_URL +'get-wishlist-items',{
            headers: {
              Authorization: ' Bearer ' + loginData.loginData.token
            }
          });
        dispatch({type:GET_WISHLIST_ITEMS,payload:data.data})
    } 
    catch(error){
        console.log(error);
    }
}

export const deleteFromWishList=(wishListItem)=>async (dispatch,getState)=>{
  try{
      const { loginData={} } = getState();
      const { data } = await axios.post(API_BASE_URL +'delete-wishlist-item', wishListItem,{
          headers: {
            Authorization: ' Bearer ' + loginData.loginData.token
          }
        });
      dispatch(getWishlist())
  } 
  catch(error){
      console.log(error);
  }
}

  