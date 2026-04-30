import { useState } from "react";

function Header({onAdd}){
    // Local state to track what the user is typing in the input field
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page refresh on form submit

        // Prevent adding empty tasks or tasks with only whitespace
        if (inputValue.trim()) {
            onAdd(inputValue);
            setInputValue('');
        }
    };

    return(
       <header className="header">
            <h1>My To-Do List</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" placeholder="Add a new task..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </header>
    )   
}

export default Header;