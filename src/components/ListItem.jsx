import React from "react";
import EditForm from "./EditForm";
import Item from "./Item";

export default function ListItem({isEdit, text, index, handleChange, toggleProp, deleteItem, isChecked}){
	let elem;

	if (isEdit) {
		elem = <EditForm
              text = {text}
              index = {index}
              handleChange = {handleChange}
              toggleProp = {toggleProp}
            />
	} else {
		elem = <Item
					    toggleProp = {toggleProp}
					    index = {index}
					    text = {text}
					    deleteItem = {deleteItem}
              isChecked = {isChecked}
				    />
	}

	return	<p>{elem}</p>;
}
