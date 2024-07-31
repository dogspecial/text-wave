import React from 'react';

const TextView = ({ data }: {data: string}) => {
    return (
        <div className='animated-title'>
            <div className='track'>
                <div id='content'>{data}</div>
            </div>
        </div>
    );
};

export default TextView;