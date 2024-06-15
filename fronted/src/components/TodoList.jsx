import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';


const TodoList = () => {
    const {
        todos, newTodo,
        setNewTodo,
        handleAddTodo,
        handleUpdateTodo,
        handleDeleteTodo,
    } = useTodos();


    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onUpdate={handleUpdateTodo}
                        onDelete={handleDeleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
