import React from 'react';
import { increment, decrement } from '../../store/store';
import { useDispatch } from 'react-redux';

const Element2 = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Plus</button>
            <button onClick={() => dispatch(decrement())}>Minus</button>

        </div>
    );
};

export default Element2;