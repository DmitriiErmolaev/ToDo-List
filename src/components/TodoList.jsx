import React from "react";
import ListItem from "./ListItem";

const TodoList = ({notes, startEdit, handleChange, deleteItem, changeLocalStorage}) => {
  const result = notes.map((elem, index) => {
		return <ListItem
                id = {elem.id}
                key = {elem.id}
                isEdit = {elem.isEdit}
                text = {elem.text}
                index = {index}
                startEdit = {startEdit}
                handleChange = {handleChange}
                deleteItem = {deleteItem}
                isChecked = {elem.isChecked}
                changeLocalStorage={changeLocalStorage}
              />
	})

  return (
    <div className="list-container">
      {result}
    </div>
  )
}

export default TodoList;

