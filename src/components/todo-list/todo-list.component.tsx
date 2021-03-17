import React from "react"
import TodoStickLoadingComponent from "../todo-stick-loading/todo-stick-loading.component"
import TodoStickComponent from "../todo-stick/todo-stick.component"

const TodoListComponent = () => {
  const [todoData, setTodoData] = React.useState<any>()
  const [todoLoading, setTodoLoading] = React.useState<any>(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        setTodoLoading(true)
        const res = await fetch("/.netlify/functions/get_todos")
        setTodoData(await res.json())
        setTodoLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      {todoLoading ? (
        <>
          <TodoStickLoadingComponent />
          <TodoStickLoadingComponent />
          <TodoStickLoadingComponent />
          <TodoStickLoadingComponent />
        </>
      ) : (
        todoData &&
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
