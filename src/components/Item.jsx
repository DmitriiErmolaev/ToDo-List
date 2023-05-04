import React from "react";
import DeleteItemButton from "./DeleteItemButton";
import "../assets/item.scss"

export default function Item({id, startEdit, index, text, deleteItem, isChecked, saveToLocalStorage}) {

  return <>
          <input
            className="switch"
            type = "checkbox"
            checked = {isChecked}
            onChange = {() => saveToLocalStorage(index, "isChecked")}
          ></input>
          <span
            className = {isChecked ? "listItem lined-through" : "listItem"}
            onClick = {() => startEdit(index)}
          >
            {text}
          </span>
          <DeleteItemButton
            id = {id}
            deleteItem = {deleteItem}
          />
        </>
}
