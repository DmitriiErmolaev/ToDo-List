import React from "react"

export default function EditForm({text, index, handleChange, toggleProp}){
    return <input
                className="editinput"
                value={text}
                onChange={(event)=> handleChange(event,index)}
                onBlur={()=>toggleProp(index,"isEdit")}
                autoFocus
            ></input>
}