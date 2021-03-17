import React from "react"
import TodoStickLoadingComponent from "../todo-stick-loading/todo-stick-loading.component"
import TodoStickComponent from "../todo-stick/todo-stick.component"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, selectTodoData } from "../../store/todo.slice"
import MoodBadIcon from "@material-ui/icons/MoodBad"
import "./todo-list.styles.css"

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
        !todoLoading &&
        (todoData.data.length !== 0 ? (
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
        ) : (
          <div className="crud-component__todo-list__nothing">
            <MoodBadIcon />
            Ooops! Nothing To show...
          </div>
        ))
      )}
    </>
  )
}

export default TodoListComponent
