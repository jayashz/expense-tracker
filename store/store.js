import { configureStore } from "@reduxjs/toolkit";
import expSlice from "./exp-slice";
const store = configureStore({
    reducer:{
        expenses:expSlice.reducer,
    }
})
export default store;