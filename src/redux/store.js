//import configureStore from redux
import { configureStore } from "@reduxjs/toolkit";

//import reducer actions from todo slice
import todoReducer from "./todoSlice"

//set up empty store
export default configureStore({
    reducer: {
        todos: todoReducer
    },
});