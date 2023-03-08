import { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};

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
			<button className='todo-btn'>Add to list</button>
		</form>
	);
};

export default TodoForm;
