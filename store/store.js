import { configureStore } from "@reduxjs/toolkit";
import expSlice from "./exp-slice";
import authSlice from "./auth-slicee";

const store = configureStore({
    reducer:{
        expenses:expSlice.reducer,
        authenticate:authSlice.reducer
    }
})
export default store;