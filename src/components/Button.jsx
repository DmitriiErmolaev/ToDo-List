import React from "react";

export default function NewItemButton({name, func}) {
	return  <button onClick = {() => func()}> {name} </button>
}
