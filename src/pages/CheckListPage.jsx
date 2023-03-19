import React, {useState, useEffect} from "react";
import ListItem from "../components/ListItem";
import NewItemButton from '../components/NewItemButton';
import {nanoid} from "nanoid";




export default function CheckListPage() {
	const [notes,setNotes] = useState([]);



	function toggleProp(index, propName) {
		let copy = Object.assign([], notes);
		copy[index][propName] = !copy[index][propName];
    copy = copy.filter(elem => elem.isEdit || elem.text);
		setNotes(copy)
	}

  // function toggleIsChecked(index, propName){
  //   let copy = Object.assign([], notes);
	// 	copy[index][propName] = !copy[index][propName];
  //   setNotes(copy)
  // }

	function handleChange(event, index) {
		let copy = Object.assign([], notes);
		copy[index].text = event.target.value;
		setNotes(copy);
	}

	function addNewItem() {
		const newItem = {id:nanoid(), text:"", isEdit:true, isChecked:false};
		setNotes([...notes, newItem]);
	}

	function deleteItem(index) {
		let copy = Object.assign([], notes);
		setNotes([...copy.slice(0,index), ...copy.slice(index+1)]);
	}



	useEffect(() => {
		let input = document.querySelector(".editinput");

		if (input) {
			input.focus();
			input.selectionStart = input.value.length;
		}
	})

	const result = notes.map((elem, index) => {
		return  <ListItem
              id = {elem.id}
              key = {elem.id}
              isEdit = {elem.isEdit}
              text = {elem.text}
              index = {index}
              toggleProp = {toggleProp}
              handleChange = {handleChange}
              deleteItem = {deleteItem}
              isChecked = {elem.isChecked}
				    />
	})

	return  <div>
            <NewItemButton addNewItem = {addNewItem}/>
            <div>
              {result}
            </div>
          </div>

}