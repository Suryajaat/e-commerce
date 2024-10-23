import React, { useEffect, useState } from 'react';
import '../styles/DelayedInput.css';

const DelayedInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setTypingTimeout(setTimeout(() => {
            setDisplayValue(e.target.value);
        }, 2000));
    };

    useEffect(() => {
        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, [typingTimeout]);

    return (
        <div className="delayed-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="input-field"
                placeholder="Type something..."
            />
            <p className="display-value">Displayed Value: {displayValue}</p>
        </div>
    );
};

export default DelayedInput;
