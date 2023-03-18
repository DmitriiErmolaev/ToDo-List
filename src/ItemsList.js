import React,{useState} from "react"
import EditForm from "./EditForm"
import Item from "./Item"

export default function ItemsList({id,isEdit,text,index,handleChange,toggleProp,deleteItem}){
	const [isChecked, setIsChecked] = useState(false)

	let elem;

	if( isEdit ) {
		elem = <EditForm 
                    text={text} 
                    index={index} 
                    handleChange={handleChange} 
                    toggleProp={toggleProp}
                />
	} else {
		if (text === ""){
			deleteItem(index)
			return null
		}
		const className = isChecked ?  "listItem lined-through" : "listItem" 
		elem = <Item 
					toggleProp={toggleProp}
					index={index}
					text={text}
					className={className}
					deleteItem={deleteItem}
					isChecked={isChecked}
					setIsChecked={setIsChecked}
				/>
	}
	
	return	<p key={id}>{elem}</p>
		
}