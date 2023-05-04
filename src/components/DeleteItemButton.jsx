import React from "react";
import "../assets/deleteitembutton.scss";

export default function DeleteItemButton({id, deleteItem}) {
  return  <div className="delete-item-container">
            <a className="delete-item-button" href="#" onClick={() => deleteItem(id)}> DELETE </a>
          </div>
}
