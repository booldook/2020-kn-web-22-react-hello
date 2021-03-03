const { useState, useCallback, useMemo, useEffect, useRef } = React

/***************** App *******************/
const App = (props) => {
	var title = 'React 쇼핑몰'
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState([])
	const [resultProducts, setResultProducts] = useState([])

	useEffect(async () => {
		try {
			var { data } = await axios.get('../json/products.json')
			setProducts(data)
			setResultProducts(data)
		}
		catch(e) {
			console.log(e)
		}
	}, [])

	const commitChange = value => {
		setQuery(value)
		setResultProducts(products.filter(v => v.title.includes(value)))
	}

	return (
		<div className="container">
			<TitleBar query={query} title={title} className="my-4" />
			<Search onChange={commitChange} />
			<Products products={resultProducts} />
		</div>
	)
}

/***************** TitleBar *******************/
const TitleBar = (props) => {
	return (
		<div className="jumbotron">
			<h1>
				{props.title}
				<br />
				<small>쇼핑몰 검색 | {props.query}</small>
			</h1>
		</div>
	)
}

/***************** Search *******************/
const Search = (props) => {
	const [query, setQuery] = useState('')
	const inputRef = useRef(null)
	
	const handleChange = e => {
		onChange(e.target.value)
	}
	const handleRemove = e => {
		onChange('')
		inputRef.current.focus()
	}
	const onChange = value => {
		props.onChange(value)
		setQuery(value)
	}
	return (
		<form className="form-search">
			<input className="form-control py-2" type="text" onChange={handleChange} autoFocus value={query} ref={inputRef} />
			{
				query.length > 0
				? <i className="fa fa-times-circle bt-remove" onClick={handleRemove} />
				: ''
			}
		</form>
	)
}

/***************** Products *******************/
const Products = (props) => {
	return (
		<div className="list-wrapper">
			{ props.products.map(v => <Product value={v} key={v.id+'_'+v.title}/>) }
		</div>
	)
}

/***************** Product *******************/
const Product = (props) => {
		var { src, title, price } = props.value
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










ReactDOM.render(<App />, document.getElementById('app'))