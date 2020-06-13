import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(10);
  useEffect(() => {
    setData(20);
  },[])
  return (
    <div className="App">
      <span>{data}</span>
    </div>
  );
}

export default App;
