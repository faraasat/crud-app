import React from "react"
import "./search-todo.styles.css"

const SearchTodoComponent = () => {
  const handleSearchChange = (event: any) => {
    console.log(event.target.value)
  }

  return (
    <div className="crud-component__search-todo">
      <input
        type="text"
        className="crud-component__search-todo__input"
        placeholder="Search Todos"
        id="search-todos"
        onChange={e => handleSearchChange(e)}
      />
    </div>
  )
}

export default SearchTodoComponent
