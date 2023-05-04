import React from "react";
import "../assets/editform.scss";

export default function EditForm({text, index, handleChange, saveToLocalStorage}){
  return <input
            className = "edit-input"
            autoFocus
            value = {text}
            onChange = {(event) => handleChange(event, index)}
            onBlur = {() => saveToLocalStorage(index, "isEdit")}
            onKeyDown = {(event) => {if (event.code === "Enter") {
              saveToLocalStorage(index, "isEdit")
            } }}
          ></input>


}
