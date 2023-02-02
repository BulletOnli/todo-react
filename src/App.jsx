import "./index.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import TaskList from "./components/TaskList";

function App() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function addTodo(event) {
        event.preventDefault();

        const newTodo = {
            todo: todo,
            isDone: false,
            id: nanoid(),
        };

        setTodoList([...todoList, newTodo]);
        setTodo("");
    }

    function removeTodo(id) {
        const newList = todoList.filter((list) => list.id !== id);
        setTodoList(newList);
    }

    // When the task is done
    function checkTask(id) {
        setTodoList((prevList) =>
            prevList.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
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
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>

            <div className="task-container">
                <TaskList
                    todoList={todoList}
                    checkTask={checkTask}
                    removeTodo={removeTodo}
                />
            </div>
        </div>
    );
}

export default App;
