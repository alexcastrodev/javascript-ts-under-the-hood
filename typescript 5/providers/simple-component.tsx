import React, { useContext } from 'react';
import { MyContext } from './provider';

const DisplayCount = () => {
  const { count } = useContext(MyContext);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default DisplayCount;
