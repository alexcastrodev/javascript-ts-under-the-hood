import React from 'react';
import DisplayCount from './simple-component';
import CounterButtons from './simple-component-buttons';
import { MyProvider } from './provider';

const App = () => {
  return (
    <MyProvider>
      <DisplayCount />
      <CounterButtons />
    </MyProvider>
  );
};

export default App;