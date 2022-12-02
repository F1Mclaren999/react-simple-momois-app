import React, { StrictMode, useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [name] = useState('PingPong...');
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const calc = useMemo(() => calculation(count), [count]);

  const addItems = () => {
    let existing = [...todo, Math.floor(Math.random() * 10)];
    console.log('existing...', existing);
    setTodo(existing);
  };

  return (
    <div id="main">
      <h3>Let's Learn Memois - {name}</h3>
      <h4>Count : {count}</h4>
      <h5>Calc : {calc}</h5>
      <h6>todo: {todo}</h6>
      <button onClick={() => setCount(count + 1)}>pingPong</button> &nbsp;
      <button onClick={() => addItems()}>ToDo</button>
    </div>
  );
};

const calculation = (counter) => {
  console.log('i am getting executed...');
  if (counter) {
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result = result + i + counter;
    }
    console.log('result...', result);
    return result;
  }
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
