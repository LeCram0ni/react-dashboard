import React, { useState } from 'react';

export default function TodoList(props) {
    const { todos, onDeleteTodo, onEditTodo } = props;
    const [editIndex, setEditIndex] = useState(null); // Track which item is being edited
    const [editValue, setEditValue] = useState(''); // Track the new value for editing

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditValue(todos[index]);
    };

    const handleSaveClick = () => {
        onEditTodo(editIndex, editValue);
        setEditIndex(null);
        setEditValue('');
    };

    return (
        <div id="todo-container">
            <h2 className="todo-heading">What needs to be done</h2>
            <ol>
                {todos.map((todo, todoIndex) => (
                    <li className="item" key={todoIndex}>
                        {editIndex === todoIndex ? (
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={handleSaveClick}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') handleSaveClick();
                                }}
                                autoFocus
                            />
                        ) : (
                            <>
                                {todo}
                                <img
                                    src="../public/edit.svg"
                                    alt="Edit"
                                    className="vector"
                                    id="edit"
                                    onClick={() => handleEditClick(todoIndex)}
                                />
                                <img
                                    src="../public/delete.svg"
                                    alt="Delete"
                                    className="vector"
                                    id="delete"
                                    onClick={() => onDeleteTodo(todoIndex)}
                                />

                            </>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}