import { useState } from "react";

function ToDoItem({todo, onDelete, onToggle, onEdit}){

    const [isEditing, setIsEditing] = useState(false);
    // Temporary state for the text while editing
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        // If we are saving (transitioning from editing to not editing)
        if (isEditing && newText.trim()) {
            onEdit(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                {/* Checkbox for marking task as complete */}
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />         
                {isEditing ? (<input type="text" className="edit-input" value={newText} onChange={(e) => setNewText(e.target.value)} autoFocus/>) : (<span className="todo-text">{todo.text}</span>)}
            </div>

            <div className="actions">
                {/* Button toggles text between 'Edit' and 'Save' */}
                <button className="edit-btn" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ToDoItem;