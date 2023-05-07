import React from "react";
import EditForm from "./EditForm";
import Task from "./Task";
import "../assets/listitem.scss"

export default function ListItem({id, isEdit, text, index, handleChange, startEdit, deleteItem, isChecked,changeLocalStorage}){
	let elem;

	if (isEdit) {
		elem = <EditForm
              text = {text}
              index = {index}
              handleChange = {handleChange}
              changeLocalStorage={changeLocalStorage}
            />
	} else {
		elem = <Task
              id = {id}
					    startEdit = {startEdit}
					    index = {index}
					    text = {text}
					    deleteItem = {deleteItem}
              isChecked = {isChecked}
              changeLocalStorage={changeLocalStorage}
				    />
	}

	return	<div className="list-item">
    {elem}
    </div>;
}

