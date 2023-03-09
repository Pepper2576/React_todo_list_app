import { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
	// Var for the input and resting state as an empty string
	const [input, setInput] = useState("");

	// makes te focus as the input  feel by default
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	});
	// sends the updated / changed inout feild to the setInput function to update the input function
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	// prevenst the window from refreshing when submit is called
	const handleSubmit = (e) => {
		e.preventDefault();

		// Created a random ID for each entery so that the unique ID can be tracked/ updated/ deleted as needs be
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		// returns the input useState to default empty string
		setInput("");
	};

	// HTML elements enerated and funtions as above
	return (
		<form
			className='todo-form'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				className='todo-input'
				placeholder='Add to your todo list'
				value={input}
				name='text'
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className='todo-btn btn-primary'>Add to list</button>
		</form>
	);
};

export default TodoForm;
