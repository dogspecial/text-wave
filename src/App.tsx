import React, { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import TextView from './components/TextView';

function App() {
  const [data, setData] = useState('');

  const handelDataChange = (newData: string) => {
    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <InputArea onDataChange={handelDataChange}/>
      </header>
      <section className='App-body'>
        <TextView data={data}/>
      </section>
    </div>
  );
}

export default App;
