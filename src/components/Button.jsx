import React from "react";
import "../assets/button.scss"
import {Link} from "react-router-dom"

const TO_RENDER_BUTTONS = {
  "Show Stats": ["root", "list"],
  "Show List": ["root", "stats"],
  "New Task": ["list"],
  "Clear List": ["list"],
}

export default function NewItemButton({name, func, mode, path, class_name}) {

  if (!TO_RENDER_BUTTONS[name].includes(mode)) {
    return;
  }

  if( !path ) {
	  return  <a className={class_name} href="#" onClick = {() => func()}><span> {name} </span></a>
  } else {
	  return  <Link className={class_name} to={path} onClick={() => func()}> <span> {name} </span> </Link>
  }

}
