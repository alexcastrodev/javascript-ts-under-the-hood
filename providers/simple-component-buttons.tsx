import React, { useContext } from 'react';
import { MyContext } from './provider';

const CounterButtons = () => {
  const { increment, decrement } = useContext(MyContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
