import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice"
import themeReducer from "./todos/themeSlice"

const store = configureStore({
    reducer:{
        todos: todoReducer,
        theme: themeReducer,
    }
})

export default store;   