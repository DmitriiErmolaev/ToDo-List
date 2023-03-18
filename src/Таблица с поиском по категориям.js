import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// let jsonData = [
// 	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
// 	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
// 	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
// 	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
// 	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
// 	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];


// class FilterableProductTable extends React.Component {
// 	render(){
// 		return(
// 			<div className="filerableProductTable">
// 				<SearchBar />
// 				<ProductTable data={this.props.data}/>
// 			</div>
// 		)
// 	}
// }

// class SearchBar extends React.Component {
// 	render(){
// 		return (
// 			<form className="searchBar"> 
// 				<input type="text" className="searchBar-bar" placeholder="Search..."></input><br></br>
// 				<label className="checkBox-label">
// 					<input type="checkbox" className="checkBox"></input>
// 					<span className="checkBox-label-span">Only show products in stock</span>
// 				</label>
// 			</form>
// 		)
// 	}
// }

// class ProductTable extends React.Component {
	
// 	getUniqCategoriesArray(json) {
// 		let obj = {}
// 		let uniqCategoriesArray = []
// 		for(let i = 0,count=1; i < json.length; i++){ 
// 		  let currentCategory = json[i].category;
// 		  if(obj[currentCategory] === undefined){
// 			 count = 1
// 		  }
// 		  obj[currentCategory] = count++ 
// 		}
// 		uniqCategoriesArray = Object.entries(obj);
// 		return uniqCategoriesArray;
// 	  }

// 	getCategoryAndProducts(categories) {
// 		let CategoryAndProducts = categories.map(elem => {
// 			return <>
// 					<ProductCategoryRow category={elem[0]}/>
// 					<ProductRows category={elem[0]} /*amount={elem[1]}*/ />
// 			</>
// 		});

// 		return CategoryAndProducts;
// 	}

// 	render() {
// 		let data = this.props.data;
// 		let uniqCategories = this.getUniqCategoriesArray(data);

// 		return(
// 			<div className="table">
// 				<div className="table-head">
// 					<div className="table-head-row">
// 						<div className="table-cell name-column"><b>Name</b></div>
// 						<div className="table-cell price-column"><b>Price</b></div>
// 					</div>
// 				</div>
// 				<div className="table-body">
// 					{this.getCategoryAndProducts(uniqCategories)}
// 				</div>
// 			</div>
// 		)
// 	}
// }

// class ProductCategoryRow extends React.Component {
// 	render() {
// 		return <div className="table-body-category-row">
// 			{this.props.category}
// 		</div>
// 	}
// }

// class ProductRows extends React.Component {
// 	render() {
// 		let category = this.props.category;
// 		// let count = this.props.amount;
// 		let product = [];
// 		product = jsonData.map(elem => {
// 			if(elem.category === category) {
// 				return <div className="table-body-row table-row">
// 					<div className="table-cell name-cell">{elem.name}</div>
// 					<div className="table-cell price-cell">{elem.price}</div>
// 				</div>
// 			}
// 		})
// 		return product;
// 	}
// }

let jsonData = [
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


class FilterableProductTable extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			searchStringToSave: "", 
			inStockCheckedToSave:false,
			searchStringToRender: "", 
			inStockCheckedToRender: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(event) {
		this.setState({searchStringToSave: event.target.value})
	}
	handleCheckboxChange(event) {
		this.setState((prevState) => {
			return {inStockCheckedToSave: !prevState.inStockCheckedToSave}
		})
	}

	handleSubmit(event){
		this.setState({searchStringToRender: this.state.searchStringToSave})
		this.setState({inStockCheckedToRender: this.state.inStockCheckedToSave})
		this.setState({searchStringToSave: ""})
		this.setState({inStockCheckedToSave: false})		
		event.preventDefault();
	}

	render(){
		console.log(this.state.searchStringToSave)
		console.log(this.state.inStockCheckedToSave)
		return(
			<div className="filerableProductTable">
				<SearchBar   handleSubmit={this.handleSubmit} handleCheckboxChange={this.handleCheckboxChange} handleInputChange={this.handleInputChange} searchStringToSave={this.state.searchStringToSave} inStockCheckedToSave={this.state.inStockCheckedToSave}/>
				<ProductTable data={this.props.data} searchStringToRender={this.state.searchStringToRender} inStockCheckedToRender={this.state.inStockCheckedToRender}/>
			</div>
		)
	}
}

class SearchBar extends React.Component {
	render(){
		let handleSubmit = this.props.handleSubmit;
		let handleInputChange = this.props.handleInputChange;
		let handleCheckboxChange = this.props.handleCheckboxChange;
		let searchStringToSave = this.props.searchStringToSave;
		let inStockCheckedToSave = this.props.inStockCheckedToSave;
		return (<>
			<form action="/handler/" className="searchBar" onSubmit={handleSubmit}> 
				<input type="text" className="searchBar-bar" placeholder="Search..." value={searchStringToSave} onChange={handleInputChange}></input>
				<label className="checkBox-label">
					<input id="check" type="checkbox" className="checkBox" checked={inStockCheckedToSave} onChange={handleCheckboxChange} ></input>
					<span className="checkBox-label-span">Only show products in stock</span>
				</label>
			</form>
			</>
		)
	}
}

class ProductTable extends React.Component {
	render() {
		let data = this.props.data;
		let searchStringToRender = this.props.searchStringToRender;
		let inStockCheckedToRender = this.props.inStockCheckedToRender;
		let rows = [];
		console.log(".!.")
		function renderTable(searchString, inStockChecked) {
			// if ( !searchString ) {
			// отрисовываем всю таблицу если запрос = пустая строка	
				let savedCategory = null;
				let productsArray = data.filter(elem => {
						if (inStockChecked && !elem.stocked) {
							return false;
						}
						
						return !searchString || elem.name.includes(searchString)
					})
				productsArray.forEach(elem => {
					let category = elem.category;
					if(savedCategory !== category) {
						rows.push(<ProductCategoryRow  key={category} category={category}/>)
						savedCategory = category;
					}
					rows.push(<ProductRows key={elem.name} product={elem} inStockChecked={inStockChecked}/>)
				})
			// } else {
			// // отрисовываем искомую категорию с товарами
			// 	let productsArray = data.filter(elem => {
			// 		return elem.category === searchString;
			// 	})
			// 	console.log(productsArray)
			// 	rows.push(<ProductCategoryRow category={productsArray[0].category}/>)

			// 	productsArray.forEach( elem => {
			// 		rows.push(<ProductRows product={elem} inStockChecked={inStockChecked}/>)
			// 	})
			// }	
		}

		renderTable(searchStringToRender, inStockCheckedToRender)
	
		return(
			<div className="table">
				<div className="table-head">
					<div className="table-head-row">
						<div className="table-cell name-column"><b>Name</b></div>
						<div className="table-cell price-column"><b>Price</b></div>
					</div>
				</div>
				<div className="table-body">
					{rows}
				</div>
			</div>
		)
	}
}

class ProductCategoryRow extends React.Component {
	render() {
		return <div className="table-body-category-row">
			{this.props.category}
		</div>
	}
}

class ProductRows extends React.Component {
	render() {
		let productObject = this.props.product;
		let productName;
		if (productObject.stocked) {
			productName = productObject.name;
		} else if (!this.props.inStockChecked) {
			productName = <span style={{"color":"red"}}>{productObject.name}</span> 
		} else {
			return
		}
		
		return <div className="table-body-row table-row">
			<div className="table-cell name-cell">{productName}</div>
			<div className="table-cell price-cell">{productObject.price}</div>
		</div>
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FilterableProductTable data={jsonData}/>)
