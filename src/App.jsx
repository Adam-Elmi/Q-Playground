import Layout from './Layout';
import './App.css';
import { ValueContext } from './ValueContext';
import { useState } from 'react';

function App() {
  const [value1, setValue1] = useState(() => {
    const savedData = localStorage.getItem("jsonData");
    return savedData ? savedData : "";
  });
  const [value2, setValue2] = useState(() => {
    const savedData = localStorage.getItem("cssData");
    return savedData ? savedData : "";
  });
  return (
    <ValueContext.Provider value={{ value1, setValue1, value2, setValue2 }}>
      <Layout/>
    </ValueContext.Provider>
  )
}

export default App
