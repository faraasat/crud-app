import React from "react"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import DeleteIcon from "@material-ui/icons/Delete"
import UpdateIcon from "@material-ui/icons/Update"
import "./todo-stick.styles.css"

const TodoStickComponent = ({ refObj, loading }) => {
  const { ref, data } = refObj

  const handleTodoDelete = () => {
    console.log("Delete")
    console.log({
      refId: ref["@ref"].id,
      collection: ref["@ref"].collection["@ref"].id,
    })
  }

  const handleTodoUpdate = () => {
    console.log("Update")
    console.log({
      refId: ref["@ref"].id,
      collection: ref["@ref"].collection["@ref"].id,
    })
  }

  return (
    <div className="crud-component__todo-stick">
      <div className="crud-component__todo-stick__content">
        <span className="crud-component__todo-stick__content-star">
          {data.starred ? (
            <StarIcon style={{ color: "#7a9dff" }} />
          ) : (
            <StarBorderIcon style={{ color: "#ff7ad3" }} />
          )}
        </span>
        <span className="crud-component__todo-stick__content-task">
          {data.task}
        </span>
        <div className="crud-component__todo-stick__content-icons">
          <span
            className="crud-component__todo-stick__content-delete"
            title="Delete"
            onClick={() => {
              handleTodoDelete()
            }}
          >
            {<DeleteIcon />}
          </span>
          <span
            className="crud-component__todo-stick__content-update"
            title="Update"
            onClick={() => {
              handleTodoUpdate()
            }}
          >
            {<UpdateIcon />}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TodoStickComponent
