import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchTodo, update } from "./todoService";

const todoSlice = createSlice({
    name:"todos",
    initialState : {
        allTodos : [],
        edit : {todo : {} , isEdit :  false},
        isLoading : false ,
        isError : false ,
        isSuccess : false
    } ,
    reducers : {
        edit : (state , action) => {
            return {
                ...state,
                edit : {
                    todo : action.payload,
                    isEdit : true 
                }
            }
        },

        remove : (state , action) => {
            return{
                ...state,
                allTodos : state.allTodos.filter(todo => todo.id !== action.payload)
            }
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getTodos.pending , (state , action) => {
            state.isLoading = true 
            state.isError =  false
            state.isSuccess = false 
        })
        .addCase(getTodos.fulfilled , (state , action) => {
            state.isLoading = false 
            state.isError =  false
            state.isSuccess = true 
            state.allTodos = action.payload
        })
        .addCase(getTodos.rejected , (state , action) => {
            state.isLoading = false 
            state.isError =  true
            state.isSuccess = false 
        })
        .addCase(addTodos.pending , (state , action) => {
            state.isLoading = true 
            state.isError =  false
            state.isSuccess = false 
        })
        .addCase(addTodos.fulfilled , (state , action) => {
            state.isLoading = false 
            state.isError =  false
            state.isSuccess = true 
            state.allTodos = [action.payload , ...state.allTodos]
        })
        .addCase(addTodos.rejected , (state , action) => {
            state.isLoading = false 
            state.isError =  true
            state.isSuccess = false 
        })
        .addCase(removeTodo.pending , (state , action) => {
            state.isLoading = true 
            state.isError =  false
            state.isSuccess = false 
        })
        .addCase(removeTodo.fulfilled , (state , action) => {
            state.isLoading = false 
            state.isError =  false
            state.isSuccess = true 
            state.allTodos = allTodos.filter(todo => todo.id !== action.payload)
        })
        .addCase(removeTodo.rejected , (state , action) => {
            state.isLoading = false 
            state.isError =  true
            state.isSuccess = false 
        })
        .addCase(updateTodo.pending , (state , action) => {
            state.isLoading = true 
            state.isError =  false
            state.isSuccess = false 
        })
        .addCase(updateTodo.fulfilled , (state , action) => {
            state.isLoading = false 
            state.isError =  false
            state.isSuccess = true 
            state.allTodos = allTodos.map((todo) => todo._id === action.payload.id ? action.payload : todo)
        })
        .addCase(updateTodo.rejected , (state , action) => {
            state.isLoading = false 
            state.isError =  true
            state.isSuccess = false 
        })
    }

})

export const { edit , remove } = todoSlice.actions;

export default todoSlice.reducer;

//GET TODOS

export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
    try {
        return await fetchTodo(); 
    } catch (error) {
        console.log(error)
    }
})

// ADD TODOS
export const addTodos = createAsyncThunk("ADD/TODO", async (fromData) => {
    try {
        return await createTodo(fromData); 
    } catch (error) {
        console.log(error)
    }
})

// DELETE TODOS
export const removeTodo = createAsyncThunk("REMOVE/TODO", async (id) => {
    // console.log(id)
    try {
        return await deleteTodo(id); 
    } catch (error) {
        console.log(error)
    }
})

export const updateTodo = createAsyncThunk("UPDATE/TODO", async (formData) => {
    try {
        return await update(formData); 
    } catch (error) {
        console.log(error)
    }
})

