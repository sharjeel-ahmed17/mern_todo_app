import React, { useState } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleUpdate = () => {
        onUpdate(todo._id, { title: newTitle });
        setIsEditing(false);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onUpdate(todo._id, { completed: !todo.completed })}
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
