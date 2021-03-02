/**************** App ******************/
class App extends React.Component {
	state = {
		query: ''
	}
	handleChange = value => {
		this.setState({
			query: value
		})
	}
	render() {
		return (
			<div className="container">
				<TitleBar query={this.state.query} className="my-4" />
				<Search onChange={this.handleChange} />
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
	handleChange = e => {
		this.props.onChange(e.target.value)
	}
	render() {
		return (
			<form className="form-search">
				<input className="form-control" type="text" onChange={this.handleChange} autoFocus />
			</form>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))