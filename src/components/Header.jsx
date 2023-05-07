import React, {useState} from "react";
import Button from "../components/Button";

import "../assets/header.scss";



const Header = ({addNewItem, clearList}) => {
  const [mode, setMode] = useState("root")

  return (
    <header className="header">
      <h1 className="header__title">ToDo List</h1>
      <nav className="header__menu">
        <Button name = "Show List" class_name="button" mode={mode} path = "/list"  func={() => setMode("list")}/>
        <Button name = "Show Stats" class_name="button" mode={mode} path = "/stats"  func={() => setMode("stats")}/>
        <Button name = "New Task" class_name="button interact" mode={mode} func = {addNewItem} />
        <Button name = "Clear List" class_name="button interact" mode={mode} func = {clearList} />
      </nav>
    </header>
  )
}

export default Header;
