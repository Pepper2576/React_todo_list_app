import "./App.css";
import TodoList from "./conponents/todoList";

// renders TodoList onto the index.js and then root div in index.html
function App() {
	return (
		<div className='todo-app'>
			<TodoList />
		</div>
	);
}

export default App;
