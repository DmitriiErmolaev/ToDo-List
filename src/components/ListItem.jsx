import React from "react";
import EditForm from "./EditForm";
import Item from "./Item";
import "../assets/listitem.scss"

export default function ListItem({id, isEdit, text, index, handleChange, startEdit, deleteItem, isChecked,saveToLocalStorage}){
	let elem;

	if (isEdit) {
		elem = <EditForm
              text = {text}
              index = {index}
              handleChange = {handleChange}
              saveToLocalStorage={saveToLocalStorage}
            />
	} else {
		elem = <Item
              id = {id}
					    startEdit = {startEdit}
					    index = {index}
					    text = {text}
					    deleteItem = {deleteItem}
              isChecked = {isChecked}
              saveToLocalStorage={saveToLocalStorage}
				    />
	}

	return	<p>{elem}</p>;
}
