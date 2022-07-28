import TodoItem from "./TodoItem";
import { useState } from "react";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Wash the dishesh' },
        { id: 3, text: 'Go to the gym' }
    ]);


    const onTodoInputBlur = (e) => {
        let todo = {
            id: todos.length + 1,
            text: e.target.value
        };

        setTodos(state => [
            ...state,
            todo
        ]);
    }

    const onDeleteHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <input type="text" onBlur={onTodoInputBlur} />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={() => onDeleteHandler(todo.id)}/>)}
            </ul>
        </>
    );
}