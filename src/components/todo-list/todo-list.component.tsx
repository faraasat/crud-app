import React from "react"
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
      {todoData &&
        todoData.data.map(todoData => {
          return <TodoStickComponent key={todoData.id} refObj={todoData} loading={todoData} />
        })}
    </>
  )
}

export default TodoListComponent
