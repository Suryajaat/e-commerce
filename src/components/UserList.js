import React, { useEffect, useState } from 'react';
import '../styles/UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        };

        const timer = setTimeout(() => {
            fetchUsers();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text-header">Loading users...</p>
        </div>
    );

    return (
        <div className="user-list-container">
            <h1>User List</h1>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
