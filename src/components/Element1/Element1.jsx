import React from 'react';
import { useSelector } from 'react-redux';

const Element1 = () => {
    const count = useSelector((state) => state.counter.value); 

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
};

export default Element1;