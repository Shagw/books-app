import { combineReducers } from "redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userLoginData from '../reducers/login';
import { persistReducer, persistStore } from "redux-persist";

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import getBooksDataReducer from "../reducers/moviesData";

const middleWares = applyMiddleware(logger,thunk);
const persistConfig = {
    key: "root",
    storage: storage,
    // whitelist: whitelist,
    // blacklist: [],
    // transforms: [encryptor]
  };
const enhancers = [middleWares]
const composedEnhancers = compose(...enhancers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  
const reducer = combineReducers({ dashBoardData:getBooksDataReducer, loginData: userLoginData});
const rootReducer = persistReducer(persistConfig,reducer)
const store = createStore(
    rootReducer,composedEnhancers 
    );

const persistor = persistStore(store, {}, () => {});
export { store, persistor };

 export default store