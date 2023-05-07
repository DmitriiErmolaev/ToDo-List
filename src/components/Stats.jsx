import React, {useState, useEffect} from "react";
import {getStats} from "../api/todo.js"
import "../assets/stats.scss"

const Stats = ({count, countedStatus: {completed, active}}) => {
  const [globalTodoCounter, setGlobalTodoCounter] = useState(0)

  useEffect (()=>{
    function getTotalTodosEverCount(){
      getStats().then(res => {
        setGlobalTodoCounter(res.globalTodoCounter)
      })
    }

    getTotalTodosEverCount()
  },[])

  return (
      <div className="stats">
        <h1 className="stats__title"><span>Stats</span></h1>
        <ul className="stats__list">
          <li className="stats__list-item">
            <h2 className="list-item__title">Number of Tasks:</h2>
            <p className="list-item__content">{count}</p>
          </li>
          <li className="stats__list-item">
            <h2 className="list-item__title">Number of completed Tasks:</h2>
            <p className="list-item__content">{completed}</p>
          </li>
          <li className="stats__list-item">
            <h2 className="list-item__title">Number of active Tasks:</h2>
            <p className="list-item__content">{active}</p>
          </li>
          <li className="stats__list-item">
            <h2 className="list-item__title">Number of Tasks for all time:</h2>
            <p className="list-item__content">{globalTodoCounter}</p>
          </li>
        </ul>
      </div>
  )
}

export default Stats
