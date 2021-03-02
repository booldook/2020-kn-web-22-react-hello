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

class App extends React.Component {
	render() {
		return (
			<div>
				<div>아래에 SampleComponent가 위치합니다.</div>
				<SampleComponent myName="booldook" />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))