import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/index.css"
import CheckList from "./CheckList"


function App() {
	return <div>
		<CheckList/>
	</div>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< App/>)