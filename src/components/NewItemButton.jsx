import React from "react"

export default function NewItemButton({addNewItem}){
	return <button 
				onClick={()=> addNewItem()}
			>
				Добавить
			</button>
}