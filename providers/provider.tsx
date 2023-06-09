import React, { createContext, useState, PropsWithChildren } from 'react';

// Create the context
const MyContext = createContext();

// Create the provider component
const MyProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Pass the state and functions as values to the context provider
  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };