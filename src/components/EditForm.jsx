import React from "react";
import "../assets/editform.scss";

export default function EditForm({text, index, handleChange, changeLocalStorage}){
  return <input
            className = "edit-form"
            autoFocus
            value = {text}
            onChange = {(event) => handleChange(event, index)}
            onBlur = {() => changeLocalStorage(index, "isEdit")}
            onKeyDown = {(event) => {if (event.code === "Enter") {
              changeLocalStorage(index, "isEdit")
            } }}
          ></input>


}
