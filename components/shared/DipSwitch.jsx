import React from 'react';

export default function DipSwitch(props) {
    const { value } = props;
    return (
        <div className='mx-auto text-white bg-gray-600 w-8 h-8 flex items-center justify-center'>
            {value === '1' ? 'o' : ''}
        </div>
    );
}
