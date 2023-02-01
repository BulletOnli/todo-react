import "./index.css";
import React, { useState } from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function addTodo(event) {
        event.preventDefault();
        const newTodo = {
            todo: todo,
            id: Math.random(),
        };

        setTodoList([...todoList, newTodo]);
        setTodo("");
    }

    function removeTodo(id) {
        const newList = todoList.filter((list) => list.id !== id);

        setTodoList(newList);
    }

    return (
        <div className="App">
            <h1>Todo-List</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button>
                    <i class="fa-solid fa-plus"></i>
                </button>
            </form>

            <div className="task-container">
                {todoList.map((list) => (
                    <div className="task" key={list.id}>
                        <p>
                            <i class="fa-solid fa-circle"></i>
                            {list.todo}
                        </p>
                        <span>
                            <i class="fa-solid fa-check"></i>
                            <button onClick={() => removeTodo(list.id)}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
