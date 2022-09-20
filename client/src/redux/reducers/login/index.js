import { ADD_ITEM_SUCCESS, CART_ITEM_ADDED, GET_CART_ITEMS, GET_WISHLIST_ITEMS, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../../actionTypes";

const INITIAL_STATE = {
  loginData:{},
  loader:true,
  isSession:false,
  signUpSuccess:false,
  wishListItems:[],
  wishListItemsSuccess:false,
  cartListItemSuccess:false,
  cartListItems:[]
};

const userLoginData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loader: false,
        isSession: true,
        loginData: action.payload,
      });
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signUpSuccess: true,
      });
    case SIGNUP_FAIL:
      return Object.assign({}, state, {
        signUpSuccess: false,
      });
    case ADD_ITEM_SUCCESS:
      return Object.assign({}, state, {
        wishListItemsSuccess: true,
      });
    case GET_WISHLIST_ITEMS:
      return Object.assign({}, state, {
        wishListItems: action.payload,
      });
    case CART_ITEM_ADDED:
      return Object.assign({}, state, {
        cartListItemSuccess: true,
      });
    case GET_CART_ITEMS:
      return Object.assign({}, state, {
        cartListItems: action.payload,
      });
    case LOGOUT:
      return Object.assign({})
    default:
      return state;
  }
};

export default userLoginData;
