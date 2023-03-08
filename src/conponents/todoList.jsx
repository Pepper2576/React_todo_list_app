import React from "react";
import { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	// builds the array for the todo list
	const addTodo = (todo) => {
		// bellow eliminats any long gamps in the input (found on stack overflow)
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];
		// pushes the array into the todo function from the setTodo function
		setTodos(newTodos);
	};
	// allows user to update todo list using same logic as above
	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	// removes todo list item
	const removeTodo = (id) => {
		const removeFromArray = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeFromArray);
	};
	// marks the todo as complete and updates the list via the serTodo
	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	// renders list via App.jsx
	return (
		<div>
			<h1>Whats the plan</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</div>
	);
};

export default TodoList;
