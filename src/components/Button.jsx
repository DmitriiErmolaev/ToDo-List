import React from "react";
import "../assets/button.scss"

export default function NewItemButton({name, func}) {
	return  <a className="button" href="#" onClick = {() => func()}> {name} </a>
}
