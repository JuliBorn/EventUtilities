import React, { useState, useEffect, use } from 'react';

import { useVoltageStore } from '../../store';

export default function InputSelect(props) {
    const { label, unit, icon, name, step } = props;

    const [value, setValue] = useState(useVoltageStore.getState()[name] || 0);

    useEffect(() => {
        useVoltageStore.setState({ resistivity: value });
    }, [value]);

    const handleChange = (value) => {
        console.log('changing value', name, value);
        setValue(value);
    };

    const handleMaterialChange = (e) => {
        console.log(e);
        if (e === 'copper') {
            setValue(56);
            useVoltageStore.setState({ resistivity: 56 });
        }
        if (e === 'aluminum') {
            setValue(35);
            useVoltageStore.setState({ resistivity: 56 });
        }
    };
    return (
        <div className='flex flex-col'>
            <div className='my-1 text-sm text-semibold'> {label}</div>
            <div className='flex grid items-center grid-cols-10 my-1 bg-gray-200 border border-gray-300 rounded-sm '>
                <div className='flex justify-center col-span-2 text-dark'>
                    {icon}
                </div>

                <select
                    onChange={(e) => handleMaterialChange(e.target.value)}
                    className='col-span-2 px-2 mx-2 text-sm font-bold text-gray-600 border-2 outline-none appearance-none bg-bright'
                >
                    <option className='bg-red'>copper</option>
                    <option>aluminum</option>
                </select>
                <div className='flex flex-row col-span-4'>
                    <input
                        type='number'
                        step={step}
                        className='flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black'
                        name='custom-input-number'
                        onChange={(e) => handleChange(e.target.value)}
                        value={value}
                    ></input>
                </div>
                <div className='flex justify-center w-full col-span-2'>
                    <label className='block mb-1 text-sm font-bold text-center text-dark'>
                        {unit}
                    </label>
                </div>
            </div>
        </div>
    );
}
