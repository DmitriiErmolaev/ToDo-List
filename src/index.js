import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/assets/index.css"
import CheckListPage from "./pages/CheckListPage"


function App() {
	return <div>
		<CheckListPage/>
	</div>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< App/>)
