import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/assets/index.scss"
import CheckListPage from "./pages/CheckListPage"


function App() {
	return <div>
		<CheckListPage/>
    <img src="coffe.png" alt="a cup of coffe"/>
	</div>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< App/>)
