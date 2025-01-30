import { configureStore,  } from "@reduxjs/toolkit";
import carslice from "./CartSlice";
import searchSlice  from "./SearchSlice";

const store = configureStore({
    reducer:{
        cart:carslice,
        search:searchSlice
    }
})

export default store;