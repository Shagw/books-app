
import { API_BASE_URL } from "../../../constants/appConstants";
import axios from "axios";
import {CART_ITEM_ADDED, GET_CART_ITEMS} from "../../actionTypes.js"

export const addToCart=(cartItem)=>async (dispatch,getState)=>{
    try{
        const { loginData={} } = getState();
        const { data } = await axios.post(API_BASE_URL +'cart-item-added', cartItem,{
            headers: {
              Authorization: ' Bearer ' + loginData.loginData.token
            }
          });
        dispatch({type:CART_ITEM_ADDED,payload:data})
        dispatch(getCartList())
    } 
    catch(error){
        console.log(error);
    }
}

export const deleteFromCart=(cartItem)=>async (dispatch,getState)=>{
  try{
      const { loginData={} } = getState();
      const { data } = await axios.post(API_BASE_URL +'delete-cart-item', cartItem,{
          headers: {
            Authorization: ' Bearer ' + loginData.loginData.token
          }
        });
      dispatch(getCartList())
  } 
  catch(error){
      console.log(error);
  }
}


export const getCartList=()=>async (dispatch,getState)=>{
    try{
        const { loginData={} } = getState();
        const { data } = await axios.get(API_BASE_URL +'get-cart-items',{
            headers: {
              Authorization: ' Bearer ' + loginData.loginData.token
            }
          });
        dispatch({type:GET_CART_ITEMS,payload:data.data})
    } 
    catch(error){
        console.log(error);
    }
}

  