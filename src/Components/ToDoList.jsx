import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDelete, onToggle, onEdit }){

    return(
        <div className="todo-list">
            {todos.length === 0 ? (<p className="empty-msg">No tasks yet. Add one above!</p>
            ) : (todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>))
            )}
        </div>
    )
}

export default ToDoList;