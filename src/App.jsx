import { useEffect, useState } from 'react'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'
import './App.css'

function App() {

  // Initializing state with data from Local Storage if it exists
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-todo-list');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // useEffect to save to Local Storage whenever 'todos' state changes
  useEffect(() => {
    localStorage.setItem('my-todo-list', JSON.stringify(todos));
  }, [todos]);

  // Handler to create a new task object and add it to the state
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Handler to remove a task from the list based on its ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handler to flip the completion status of a task
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handler to update the text content of an existing task
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <Header onAdd={addTodo}/>
        <ToDoList todos={todos} onDelete={deleteTodo} onToggle={toggleComplete} onEdit={editTodo}/>
      </div>
    </div>
  )
}

export default App
