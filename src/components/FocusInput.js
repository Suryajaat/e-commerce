import React, { useRef } from 'react';
import '../styles/FocusInput.css';

const FocusInput = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className="focus-input-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Type here..."
                className="input-field"
            />
            <button onClick={focusInput} className="focus-button">Focus Input</button>
        </div>
    );
};

export default FocusInput;
