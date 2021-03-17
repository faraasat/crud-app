import React from "react"
import TodoStickLoadingComponent from "../todo-stick-loading/todo-stick-loading.component"
import TodoStickComponent from "../todo-stick/todo-stick.component"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, selectTodoData } from "../../store/todo.slice"

const TodoListComponent = () => {
  const dispatch = useDispatch()
  const { todoData, updateId, todoLoading } = useSelector(selectTodoData)

  React.useEffect(() => {
    dispatch(fetchTodos())
    console.log(updateId)
    console.log(todoData)
  }, [updateId])

  return (
    <>
      <div></div>
      {todoLoading || todoData.length === 0 ? (
        <>
          <TodoStickLoadingComponent />
          <TodoStickLoadingComponent />
          <TodoStickLoadingComponent />
          <TodoStickLoadingComponent />
        </>
      ) : (
        todoData.length !== 0 &&
        todoData.data.map((todoData: any) => {
          return (
            <span key={todoData.id}>
              <TodoStickComponent
                key={todoData.id}
                refObj={todoData}
                loading={todoData}
              />
            </span>
          )
        })
      )}
    </>
  )
}

export default TodoListComponent
