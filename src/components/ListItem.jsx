import React from "react";
import EditForm from "./EditForm";
import Item from "./Item";

export default function ListItem({id, isEdit, text, index, handleChange, toggleProp, deleteItem}){
	let elem;

	if (isEdit) {
		elem = <EditForm
              text={text}
              index={index}
              handleChange={handleChange}
              toggleProp={toggleProp}
            />
	} else {
		elem = <Item
					    toggleProp={toggleProp}
					    index={index}
					    text={text}
					    deleteItem={deleteItem}
				    />
	}

	return	<p key={id}>{elem}</p>;
}
