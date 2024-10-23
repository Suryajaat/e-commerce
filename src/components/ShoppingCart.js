import React, { useEffect, useState } from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = sessionStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = () => {
        const newItem = `Item ${cartItems.length + 1}`;
        setCartItems([...cartItems, newItem]);
    };

    const removeItem = (itemToRemove) => {
        setCartItems(cartItems.filter(item => item !== itemToRemove));
    };

    return (
        <div className="shopping-cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            <button onClick={addItem} className="add-item-button">Add Item</button>
            <ul className="cart-items-list">
                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            {item} 
                            <button onClick={() => removeItem(item)} className="remove-item-button">Remove</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ShoppingCart;
