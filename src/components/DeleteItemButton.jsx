import React from "react";
import "../assets/deleteitembutton.scss";
import {ReactComponent as TrashSVG } from "../assets/trash.svg"

export default function DeleteItemButton({id, deleteItem}) {
  return  <div className="task__delete-item">
            <a className="delete-item__button" href="#" onClick={() => deleteItem(id)}> <TrashSVG/> </a>
          </div>
}
