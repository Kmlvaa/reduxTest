import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/Slices/counterSlice'
import userReducer from '../redux/Slices/userSlice'
import themeReducer from '../redux/Slices/themeSlice'
import {countryAPi} from '../services/countryApi'
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../services/postsApi";

export const store = configureStore({
    reducer: {
        counterx: counterReducer,
        user: userReducer,
        theme: themeReducer,
        [countryAPi.reducerPath]: countryAPi.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryAPi.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})


setupListeners(store.dispatch)