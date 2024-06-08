import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../slices/profileSlice";
import loaderReducer from "../slices/loaderSlice";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        loader: loaderReducer
    }
})