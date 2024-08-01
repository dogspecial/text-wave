import React, { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import TextView from './components/TextView';

function App() {
  const [data, setData] = useState('');
  const [textColor, setTextColor] = useState('yellow');

  const handelDataChange = (newData: string) => {
    setData(newData);
  };

  const handleColorChange = (newColor: string) => {
    setTextColor(newColor);
  }



  return (
    <div className="App">
      <header className="App-header">
        <InputArea onDataChange={handelDataChange} onColorChange={handleColorChange}/>
      </header>
      <section className='App-body'>
        <TextView data={data} textColor={textColor}/>
      </section>
    </div>
  );
}

export default App;
