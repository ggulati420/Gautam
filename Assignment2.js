import React, { useState } from "react";


import "./App.css";

const App = () => {
const [counter, setCounter] = useState(0)

const handleClick1 = () => {

	setCounter(counter + 1)
}

const handleClick2 = () => {
	setCounter(counter - 1)
}

return (
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',

	}}>
  <b> <p>Task Done By Gautam gulati (12005494) </p></b>``
	Counter
	<div style={{a
		fontSize: '120%',
		position: 'relative',
		top: '10vh',
	}}>
		{counter}
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick1}>Increment</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick2}>Decrement</button>
    
	</div>
 
	</div>
  

)

}


export default App
