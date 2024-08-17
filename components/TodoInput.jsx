import { useState } from 'react';

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const [todoValue, setTodoValue] = useState('');

  const handleAdd = () => {
    handleAddTodos(todoValue);
    setTodoValue(''); // Clear the input field after adding
  };

  return (
    <div className="input-row">
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}