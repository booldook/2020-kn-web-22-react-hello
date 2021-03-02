/*
const el = React.createElement(
	'h1',
	{
		className: 'blue'
	},
	'Hello React'
)

ReactDOM.render(el, document.getElementById('app'))
*/


const myName = 'booldook'
const el = <h1 className="blue">Hello React, {myName}</h1>

ReactDOM.render(
	el,
	document.getElementById('app')
)


