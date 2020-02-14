import { useState } from 'react'

export const useLocalStorage = (key, initialState) => {

    const [storedValues, setStoredValues] = useState(() => {
        const checkValue = window.localStorage.getItem(key);
        return checkValue ? JSON.parse(checkValue) : initialState;
    });

    
    const setValue = value => {
        setStoredValues(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValues, setValue];
}