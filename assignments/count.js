//code for the counter component

import React, { useState, useEffact } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffact(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
