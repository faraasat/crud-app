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
  initialState: {
    todos: { data: [] },
    updateId: "",
    todoLoading: false,
    allTodos: { data: [] },
  },
  reducers: {
    searchTodos: (state, action) => {
      const abc = state.allTodos.data.filter(da => {
        return da.data.task.toLowerCase().includes(action.payload.toLowerCase())
      })
      state.todos = { data: [...abc] }
    },
    refreshComponent: (state, action) => {
      state.updateId = action.payload
    },
    deleteTodo: (state, action) => {
      const abc = state.allTodos.data.filter(da => {
        return da.ref["@ref"].id !== action.payload
      })
      state.allTodos = { data: [...abc] }
      state.todos = { data: [...abc] }
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      console.log(state, action)
      state.todos = action.payload
      state.allTodos = action.payload
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

export const { searchTodos, refreshComponent, deleteTodo } = TodoSlice.actions
export const selectTodoData = (state: any) => ({
  todoData: state.todoReducer.todos,
  allTodos: state.todoReducer.allTodos,
  updateId: state.todoReducer.updateId,
  todoLoading: state.todoReducer.todoLoading,
})
export const TodoSliceReducer = TodoSlice.reducer
