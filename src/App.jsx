import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from '../pages/Dashboard';
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      "Laura antworten",
      "Steckdose Fernseher",
      "Spülmaschine"
    ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleAddTodos(newTodo) {
    if (newTodo.trim() === '') return; // Prevent adding empty todos
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleDeleteTodo(indexToDelete) {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== indexToDelete));
  }

  function handleEditTodo(indexToEdit, newValue) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[indexToEdit] = newValue;
      return updatedTodos;
    });
  }

  return (
    <>
      <Dashboard />
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} />
    </>
  );
}

export default App;