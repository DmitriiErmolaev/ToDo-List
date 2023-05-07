import React from "react";
import DeleteItemButton from "./DeleteItemButton";
import "../assets/task.scss"

export default function Task({id, startEdit, index, text, deleteItem, isChecked, changeLocalStorage}) {

  return (
    <div className="task">
      <input
        className="task__switch"
        type = "checkbox"
        checked = {isChecked}
        onChange = {() => changeLocalStorage(index, "isChecked")}
      ></input>
      <span
        className = {isChecked ? "task__content lined-through" : "task__content"}
        onClick = {() => startEdit(index)}
      >
        {text}
      </span>
      <DeleteItemButton
        id = {id}
        deleteItem = {deleteItem}
      />
    </div>
  )
}
