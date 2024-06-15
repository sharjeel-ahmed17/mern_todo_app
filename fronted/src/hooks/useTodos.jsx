import { useEffect, useState } from 'react';

import { getTodos, createTodo, updateTodo, deleteTodo } from '../api/todo';

const useTodos = () => {


    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos = await getTodos();
                setTodos(todos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTodos();
    }, []);

    const handleAddTodo = async () => {
        try {
            const newTodoItem = await createTodo({ title: newTodo });
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateTodo = async (id, updatedFields) => {
        try {
            const updatedTodo = await updateTodo(id, updatedFields);
            setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error(error);
        }
    };
    return {
        todos,
        newTodo,
        setNewTodo,
        handleAddTodo,
        handleUpdateTodo,
        handleDeleteTodo,
    }


}

export default useTodos;