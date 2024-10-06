import { useState } from "react";
import "./App.css";
const App = () => {
	const [count, setCount] = useState(20);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>My name is Jivi</h1>
			<h1>My name is Aashray</h1>
			<h1>My name is Vineel</h1>
			<p>I am {count} years old.</p>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default App;
