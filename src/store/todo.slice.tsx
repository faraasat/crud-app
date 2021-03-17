import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchTodos: any = createAsyncThunk(
  "data/fetchTodos",
  async (data, thunkAPI) => {
    const response = await fetch("/.netlify/functions/get_todos")
    return await response.json()
  }
)

export const TodoSlice = createSlice({
  name: "todoSlice",
  initialState: { todos: [], updateId: "", todoLoading: false },
  reducers: {
    searchTodos: (state, action) => {},
    refreshComponent: (state, action) => {
      state.updateId = action.payload
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      console.log(state, action)
      state.todos = action.payload
      state.todoLoading = false
    },
    [fetchTodos.reject]: (state, action) => {
      console.log("fetchTodos Rejected")
      state.todoLoading = false
    },
    [fetchTodos.pending]: (state, action) => {
      console.log("fetchStoreData Pending")
      state.todoLoading = true
    },
  },
})

export const { searchTodos, refreshComponent } = TodoSlice.actions
export const selectTodoData = (state: any) => ({
  todoData: state.todoReducer.todos,
  updateId: state.todoReducer.updateId,
  todoLoading: state.todoReducer.todoLoading,
})
export const TodoSliceReducer = TodoSlice.reducer
