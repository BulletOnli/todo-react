const TaskList = (props) => {
    return props.todoList.map((list) => (
        <div className="task" key={list.id}>
            <p className={`task-name ${list.isDone ? "done" : ""}`}>
                <i className="fa-solid fa-circle"></i>
                {list.todo}
            </p>
            <span>
                <input
                    type="checkbox"
                    onChange={() => props.checkTask(list.id)}
                />
                <button onClick={() => props.removeTodo(list.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </span>
        </div>
    ));
};

export default TaskList;
