import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/assets/index.scss";
import CheckListPage from "./pages/CheckListPage";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
	return (
    <Router>
		  <CheckListPage/>
    </Router>
	)
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< App/>)
