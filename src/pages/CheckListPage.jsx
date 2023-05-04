import React, {useState, useEffect} from "react";
import ListItem from "../components/ListItem";
import Button from '../components/Button';
import {nanoid} from "nanoid";
import {getCollection,deleteById,putById} from "../api/todo"
import "../assets/checklistpage.scss"



export default function CheckListPage() {
	const [notes,setNotes] = useState([]);

  function setDataFromStorage(){
    getCollection().then(result => setNotes(result))
  }

  function addNewItem() {
		const newItem = {id:nanoid(), text:"", isEdit:true, isChecked:false};
		setNotes([...notes, newItem]);
	}

	function deleteItem(id) {
    deleteById(id).then(()=> setDataFromStorage())
	}

  function clearList() {
    localStorage.removeItem('todo_list');
    setDataFromStorage();
  }

  function startEdit(position) {
    setNotes(notes.map((el, index) => {
      if (position === index) el.isEdit = !el.isEdit;
      return el;
    }))
	}

	function handleChange(event, position) {
    setNotes(notes.map((el, index) => {
      if (position === index) el.text = event.target.value;
      return el;
    }))
	}
  function saveToLocalStorage(index, propName) {
    let copy = Object.assign([], notes);
    let note = copy[index]
		note[propName] = !note[propName];

    if (propName === "isEdit" && note.text === "") {
      deleteItem(note.id);
      return;
    }

    putById(note.id, note, index).then(() => setDataFromStorage());
  }

  useEffect(()=>{
    setDataFromStorage()
  },[])

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
              startEdit = {startEdit}
              handleChange = {handleChange}
              deleteItem = {deleteItem}
              isChecked = {elem.isChecked}
              saveToLocalStorage={saveToLocalStorage}
				    />
	})

	return  <div className="main-container">
            <div class="head-container">
              <h1>ToDo List</h1>
              <div className="buttons-container">
                <Button name = "New Task" func = {addNewItem}/>
                <Button name = "Clear List" func = {clearList}/>
              </div>
            </div>
            <div className="list-conteiner">
              {result}
            </div>
          </div>

}

