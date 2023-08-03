import React, { useState, useEffect } from 'react';

import { useVoltageStore } from '../../store';

export default function InputNumber(props) {
    const { label, name, unit, icon, step, min, max, defValue } = props;

    const [value, setValue] = useState(useVoltageStore.getState()[name] || 0);

    // const useVoltageStore = (state) => state.voltage;
    const handleChange = (value) => {
        console.log('changing value', name, value);
        setValue(value);
    };

    useEffect(() => {
        console.log('changing value', name, value);

        if (name === 'current') {
            useVoltageStore.getState().setCurrent(value);
        }
        if (name === 'voltage') {
            useVoltageStore.getState().setVoltage(value);
        }
        if (name === 'distance') {
            useVoltageStore.getState().setDistance(value);
        }
        if (name === 'resistivity') {
            useVoltageStore.getState().setResistivity(value);
        }
        if (name === 'crossSection') {
            useVoltageStore.getState().setCrossSection(value);
        }
    }, [value]);

    useEffect(() => {
        console.log('Mounting', name, value);
        console.log('Store: ', useVoltageStore.getState()[name]);
        setValue(useVoltageStore.getState()[name]);
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='my-1 text-sm text-semibold'> {label}</div>
            <div className='flex grid items-center grid-cols-10 my-1 bg-gray-400 border border-gray-300 rounded-sm '>
                <div className='flex justify-center col-span-2 text-dark'>
                    {icon}
                </div>

                <div className='flex flex-row col-span-6'>
                    <input
                        type='Number'
                        className='flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black'
                        name='custom-input-number'
                        min={min}
                        onChange={(e) => handleChange(e.target.value)} // Use Decimal for input change
                        value={value}
                    ></input>
                </div>
                <div className='flex justify-center w-full col-span-2'>
                    <label className='block mb-1 text-sm font-bold text-center text-white'>
                        {unit}
                    </label>
                </div>
            </div>
        </div>
    );
}
