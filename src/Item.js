import React from "react"
import DeleteItemButton from "./DeleteItemButton"

export default function Item({toggleProp,index,text,className,deleteItem,isChecked,setIsChecked}){
	return <>
			<input 
				type="checkbox"  
				checked={isChecked}
				onChange={()=> setIsChecked(!isChecked)}
			></input>
			<span 
				className={className} 
				onClick={()=> {toggleProp(index,"isEdit")}}
			>
				{text}
			</span>
			<DeleteItemButton index={index} deleteItem={deleteItem}/>
		</>
}