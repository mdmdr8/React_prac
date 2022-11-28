import { useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (todo === '') {
            return;
        }
        setTodo("");
        setTodos((currentArray) => [todo, ...currentArray])
    };

    return (
        <div>
            <h1>오늘 할 일[{todos.length}]</h1>
            <form onSubmit={onSubmit} >
                <input onChange={onChange} value={todo} type="text" placeholder="Write your to do..." />
                &nbsp;&nbsp;
                <button> Add To Do</button>
            </form>
            <hr />
        </div>
    )
}

export default TodoList;