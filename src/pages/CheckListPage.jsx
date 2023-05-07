import React, {useState, useEffect} from "react";
// import ListItem from "../components/ListItem";
import Header from '../components/Header';
import TodoList from "../components/TodoList";
import Stats from "../components/Stats";
import {nanoid} from "nanoid";
import {getCollection,deleteById,putById, countTotalTodosEver} from "../api/todo";
import "../assets/checklistpage.scss";
import {Routes, Route} from "react-router-dom";



export default function CheckListPage() {
	const [notes,setNotes] = useState([]);

  function getDataFromStorage(){
    getCollection().then(result => setNotes(result))
  }

  function addNewItem() {
    countTotalTodosEver("increase");
		const newItem = {id:nanoid(), text:"", isEdit:true, isChecked:false};
		setNotes([...notes, newItem]);
	}

	function deleteItem(id) {
    deleteById(id).then(()=> getDataFromStorage())
	}

  function clearList() {
    localStorage.removeItem('todo_list');
    getDataFromStorage();
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

  function changeLocalStorage(index, propName) {
    let copy = Object.assign([], notes);
    let note = copy[index]
		note[propName] = !note[propName];

    if (propName === "isEdit" && note.text === "") {
      deleteItem(note.id);
      countTotalTodosEver("decrease");
      return;
    }

    putById(note.id, note, index).then(() => getDataFromStorage());

  }

  function getNumOfTasks(){
    let activeTodosNumber = 0;
    let completedTodosNumber = 0;

    notes.forEach(todo => {
      todo.isChecked ? completedTodosNumber++ : activeTodosNumber++
    })

    return {completed: completedTodosNumber, active: activeTodosNumber,}
  }

  useEffect(()=>{
    getDataFromStorage()
  },[])

	useEffect(() => {
		let input = document.querySelector(".editinput");

		if (input) {
			input.focus();
			input.selectionStart = input.value.length;
		}
	})

	return (
    <div className="wrappper">
      <Header addNewItem={addNewItem} clearList={clearList}/>
      <main>
        <Routes>
          <Route
            path = "/list"
            element = {
              <TodoList
                notes = {notes}
                startEdit = {startEdit}
                handleChange = {handleChange}
                changeLocalStorage = {changeLocalStorage}
                deleteItem = {deleteItem}
              />
            }
          />
          <Route
            path = "/stats"
            element = {
              <Stats
                count={notes.length}
                countedStatus={getNumOfTasks()}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

