import React from "react";
import DeleteItemButton from "./DeleteItemButton";

export default function Item({toggleProp, index, text, deleteItem, isChecked}) {

  return <>
          <input
            type = "checkbox"
            checked = {isChecked}
            onChange = {() => toggleProp(index, "isChecked")}
          ></input>
          <span
            className = {isChecked ? "listItem lined-through" : "listItem"}
            onClick = {() => toggleProp(index, "isEdit")}
          >
            {text}
          </span>
          <DeleteItemButton
            index = {index}
            deleteItem = {deleteItem}
          />
        </>
}
