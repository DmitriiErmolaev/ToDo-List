import React, {useState} from "react";
import DeleteItemButton from "./DeleteItemButton";

export default function Item({toggleProp, index, text, deleteItem}) {
	const [isChecked, setIsChecked] = useState(false);

  return <>
          <input
            type = "checkbox"
            checked = {isChecked}
            onChange = {() => setIsChecked(!isChecked)}
          ></input>
          <span
            className = {isChecked ?  "listItem lined-through" : "listItem"}
            onClick = {() => {toggleProp(index, "isEdit")}}
          >
            {text}
          </span>
          <DeleteItemButton

            index = {index}
            deleteItem = {deleteItem}
          />
        </>
}
