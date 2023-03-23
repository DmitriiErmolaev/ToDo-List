import React from "react";

export default function EditForm({text, index, handleChange, saveToLocalStorage}){
  return <input
            className = "editinput"
            autoFocus
            value = {text}
            onChange = {(event) => handleChange(event, index)}
            onBlur = {() => saveToLocalStorage(index, "isEdit")}
            onKeyDown = {(event) => {if (event.code === "Enter") {
              saveToLocalStorage(index, "isEdit")
            } }}
          ></input>;
}
