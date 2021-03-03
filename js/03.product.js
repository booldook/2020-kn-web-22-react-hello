/**************** App ******************/
class App extends React.Component {
	state = {
		query: '',
		products: [],
		resultProducts: []
	}
	commitChange = value => {
		this.setState({
			query: value,
			resultProducts: this.state.products.filter(v => v.title.includes(value))
		})
	}
	componentDidMount() {
		axios.get('../json/products.json')
		.then(r => {
			this.setState({
				products: r.data,
				resultProducts: r.data,
			})
			console.log(this.state.products)
		})
		.catch(e => {
			console.log(e)
		})
	}
	render() {
		let { query, resultProducts } = this.state 
		return (
			<div className="container">
				<TitleBar query={query} className="my-4" />
				<Search onChange={this.commitChange} />
				<Products products={resultProducts} />
			</div>
		)
	}
}

/**************** TitleBar ******************/
class TitleBar extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>
					React 쇼핑몰
					<br />
					<small>쇼핑몰 검색 | {this.props.query}</small>
				</h1>
			</div>
		)
	}
}


/**************** Search ******************/
class Search extends React.Component {
	state = {
		query: ''
	}
	inputRef = React.createRef() // DOM을 품는 변수가 되어라
	handleChange = e => {
		this.onChange(e.target.value)
	}
	handleRemove = e => {
		this.onChange('')
		// ref는 current로 접근하여야 한다.
		this.inputRef.current.focus()
	}
	onChange = value => {
		this.props.onChange(value)
		this.setState({
			query: value
		})
	}
	render() {
		return (
			<form className="form-search">
				<input className="form-control py-2" type="text" onChange={this.handleChange} autoFocus value={this.state.query} ref={this.inputRef /* 나를 inputRef에 담아라 */} />
				{
					this.state.query.length > 0
					? <i className="fa fa-times-circle bt-remove" onClick={this.handleRemove} />
					: ''
				}
			</form>
		)
	}
}

/**************** Products ******************/
class Products extends React.Component {
	render() {
		return (
			<div className="list-wrapper">
				{ this.props.products.map(v => <Product value={v} key={v.id+'_'+v.title}/>) }
			</div>
		)
	}
}

/**************** Product ******************/
class Product extends React.Component {
	render() {
		let { src, title, price } = this.props.value
		return (
			<div className="list">
				<div className="img-wrap">
					<img src={src} className="w-100"/>
				</div>
				<div className="title">{title}</div>
				<div className="price">${price}</div>
			</div>
		)
	}
}






ReactDOM.render(<App />, document.getElementById('app'))