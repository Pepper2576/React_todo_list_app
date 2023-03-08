import { useState } from "react";
import TodoForm from "./todoForm";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

// Todo conponent plus prop drills needed
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
	// usestate  to edit the entrys on the list
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});
	// edits the text value of the then ends then to the setEdit function
	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};
	// updates the TodoForm conponent
	if (edit.id) {
		return (
			<TodoForm
				edit={edit}
				onSubmit={submitUpdate}
			/>
		);
	}
	// maps the elements in the array and renders them onto todoList

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}
		>
			<div
				key={todo.id}
				onClick={() => completeTodo(todo.id)}
			>
				{todo.text}
			</div>
			<div className='icons'>
				<RiCloseCircleFill
					onClick={() => removeTodo(todo.id)}
					className='delte-icon'
				/>
				<TiEdit
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					className='edit-icon'
				/>
			</div>
		</div>
	));
};

export default Todo;
