import React, { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import TextView from './components/TextView';

function App() {
  const [data, setData] = useState('');
  const [textColor, setTextColor] = useState('#FFFF00');
  const [fontSize, setFontSize] = useState(10);

  const handelDataChange = (newData: string) => {
    setData(newData);
  };

  const handleColorChange = (newColor: string) => {
    setTextColor(newColor);
  }

  const handleFontSize = (newFontSize: number) => {
      setFontSize(newFontSize);
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputArea
            onDataChange={handelDataChange}
            onColorChange={handleColorChange}
            onChangeFontSize={handleFontSize}
        />
      </header>
      <section className='App-body'>
        <TextView
            data={data}
            textColor={textColor}
            fontSize={fontSize}
        />
      </section>
    </div>
  );
}

export default App;
