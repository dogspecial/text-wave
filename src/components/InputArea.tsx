import React from 'react';

const InputArea = ({onDataChange}: any) => {
    const handleInputChange = (event: { target: { value: any; }; }) => {
        const newData = event.target.value;
        onDataChange(newData);
    };

    return (
        <div>
            <input type='text' onChange={handleInputChange} />
        </div>
    );
};

export default InputArea;