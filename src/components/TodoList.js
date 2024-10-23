import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleComplete, editTodo } from '../redux/todoSlice';
import '../styles/TodoList.css';

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
    const [editingId, setEditingId] = useState(null);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            dispatch(editTodo({ id: editingId, title, description, priority }));
            setEditingId(null);
        } else {
            dispatch(addTodo({ id: Date.now(), title, description, priority, completed: false }));
        }
        setTitle('');
        setDescription('');
        setPriority('medium');
    };

    const handleEdit = (task) => {
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setEditingId(task.id);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                    className="input-field"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                    className="input-field"
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className="input-select">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button type="submit" className="submit-button">
                    {editingId ? 'Update' : 'Add'}
                </button>
            </form>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            <td className="task-title">{task.title}</td>
                            <td className="task-description">{task.description}</td>
                            <td>{task.priority}</td>
                            <td>
                                <button onClick={() => dispatch(toggleComplete(task.id))}>Complete</button>
                                <button onClick={() => handleEdit(task)}>Edit</button>
                                <button onClick={() => dispatch(removeTodo(task.id))}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
