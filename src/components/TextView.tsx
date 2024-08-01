import React from 'react';

const TextView = ({ data, textColor }: {data: string, textColor: string}) => {
    return (
        <div className='animated-title' style={{color: textColor}}>
            <div className='track'>
                <div id='content'>{data}</div>
            </div>
        </div>
    );
};

export default TextView;