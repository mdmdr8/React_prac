import { useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState('');

    const onChange = (e) => {
        setTodo(e.target.value);
    };
    return (
        <div>
            <h1>오늘 할 일</h1>
            <form>
                <input onChange={onChange} value={todo} type="text" placeholder="Write your to do..." />
                &nbsp;&nbsp;
                <button> Add To Do</button>
                <hr />
            </form>
        </div>
    )
}

export default TodoList;