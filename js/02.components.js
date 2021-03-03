class SampleComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, React {this.props.myName}</h1>
				<h1>Hello, World</h1>
			</div>
		)
	}
}

class Board extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.value}</div>
				<hr />
			</div>
		)
	}
}

class App extends React.Component {
	state = {
		title: '',
		titles: []
	}
	handleChange = (e) => {
		this.setState({
			title: e.target.value,
			titles: [...this.state.titles, this.state.title]
		})
	}
	render() {
		return (
			<div className="container text-center my-4">
				<div>아래에 SampleComponent가 위치합니다.</div>
				<SampleComponent myName="booldook" />
				<hr />
				<h1 className="title">{this.state.title}</h1>
				<input type="text" className="form-control" onChange={this.handleChange} />
				{this.state.titles.map((v) => {
					return <Board value={v} />
				})}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))