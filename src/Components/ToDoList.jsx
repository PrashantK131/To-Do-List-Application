import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDelete, onToggle, onEdit }){

    return(
        <div className="todo-list">
            {/* Conditional Rendering: If the list is empty, show a message. Otherwise, map the items.*/}
            {todos.length === 0 ? (<p className="empty-msg">No tasks yet. Add one above!</p>
            ) : (todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>))
            )}
        </div>
    )
}

export default ToDoList;