import React from "react"

export default function DeleteItemButton({deleteItem,index}){
    return <button 
                onClick={() => deleteItem(index)}
            >
                Delete
            </button>
}