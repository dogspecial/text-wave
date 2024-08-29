import React from 'react';

const InputArea = ({onDataChange, onColorChange, onChangeFontSize}: any) => {
    const handleInputChange = (event: { target: { value: any; }; }) => {
        const newData = event.target.value;
        onDataChange(newData);
    };

    const handelColorChange = (event: { target: { value: any; }; }) => {
        onColorChange(event.target.value);
    }

    const handleFontSizeChange = (event: { target: { value: any; }; }) => {
        onChangeFontSize(event.target.value);
    };

    return (
        <div style={{padding: 20}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input type='text' onChange={handleInputChange} style={{width: '200px', height: '20px'}} placeholder='text 입력'/>
                <input type='color' onChange={handelColorChange} value='#FFFF00'/>
                <input type="range" min="10" max="200" onChange={handleFontSizeChange} /> {/* 폰트 크기 슬라이더 */}
            </div>
        </div>
    );
};

export default InputArea;