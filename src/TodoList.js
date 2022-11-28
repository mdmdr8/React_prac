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

            {/* map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할 */}
            {/* [].map(()=> ":)") */}
            <ul>
                {todos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;