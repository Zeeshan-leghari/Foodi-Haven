import { configureStore,  } from "@reduxjs/toolkit";
import carslice from "./CartSlice";

const store = configureStore({
    reducer:{
        cart:carslice
    }
})

export default store;