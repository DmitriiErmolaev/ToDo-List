import React, {useState, useEffect} from "react"
import ItemsList from "./ItemsList";
import NewItemButton from './NewItemButton';
import {nanoid} from "nanoid"




export default function CheckList(){
	const [notes,setNotes] = useState([])

/* внизу - 2 команды которые заменены одной общей */
	// function toggleEdit(index){
	// 	let copy = Object.assign([], notes);
	// 	copy[index].isEdit = !copy[index].isEdit
	// 	setNotes(copy)

	// }
	/* логика изменилась. Команда ниже не используется */
		// function lineThrough(index){
	// 	let copy = Object.assign([], notes);
	// 	copy[index].isLinedThrough = !copy[index].isLinedThrough;
	// 	setNotes(copy)
	// }

	function toggleProp(index,propName){
		let copy = Object.assign([], notes);
		copy[index][propName] = !copy[index][propName]
		setNotes(copy)
	}

	function handleChange(event,index){
		let copy = Object.assign([], notes);
		copy[index].text = event.target.value;
		setNotes(copy)
	}

	function addNewItem(){
		let newItem = {id:nanoid(), text:"", isEdit:true}
		setNotes([...notes,newItem])
	}

	function deleteItem(index){
		let copy = Object.assign([],notes)
		setNotes([...copy.slice(0,index),...copy.slice(index+1)])
	}
	


	useEffect( ()=> {
		let input = document.querySelector(".editinput");

		if (input){
			input.focus()
			input.selectionStart = input.value.length
		}
	})

	const result = notes.map((elem, index)=> {
		return <ItemsList 
					id={elem.id}
					isEdit={elem.isEdit} 
					isLinedThrough={elem.isLinedThrough}
					text={elem.text} 
					index={index} 
					toggleProp={toggleProp}
					handleChange={handleChange}
					deleteItem={deleteItem}
				/>
	})

	return <div>
		<NewItemButton addNewItem={addNewItem} />
		<div>
			{result}
		</div>
	</div>
	
}