import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Welcome from './components/Welcome';
import FocusInput from './components/FocusInput';
import UserList from './components/UserList';
import DelayedInput from './components/DelayedInput';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './Nav.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shopping-cart">Shopping Cart</Link>
                    <Link to="/focus-input">Focus Input</Link>
                    <Link to="/user-list">User List</Link>
                    <Link to="/delayed-input">Delayed Input</Link>
                    <Link to="/todo-list">To-Do List</Link>
                </nav>
                <Routes>
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/focus-input" element={<FocusInput />} />
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/delayed-input" element={<DelayedInput />} />
                    <Route path="/todo-list" element={<TodoList />} />
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
