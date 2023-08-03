'use client';
import { useEffect, useState } from 'react';

import DipSwitch from '../../components/shared/DipSwitch';

import { motion } from 'framer-motion';

import { useDMXStore } from '../../store';

export default function Page() {
    const [binaryArray, setBinaryArray] = useState([]);

    const [dmxAddress, setDmxAddress] = useState(
        useDMXStore.getState().address || 0
    );

    useEffect(() => {
        useDMXStore.getState().setAddress(dmxAddress);
        handleDMXChange(dmxAddress);
    }, [dmxAddress]);

    useEffect(() => {
        console.log('Mounting DIP');
        console.log('Store: ', useDMXStore.getState());
        setDmxAddress(useDMXStore.getState().address);
        // setValue(useVoltageStore.getState()[name]);
    }, []);

    const handleDMXChange = (value) => {
        setDmxAddress(parseInt(value));

        //console.log(value);

        const addressNumber = parseInt(value);

        if (isNaN(addressNumber) || addressNumber < 1 || addressNumber > 512) {
            // setBinaryResult('Invalid DMX Address');
            return;
        }
        let binaryString = addressNumber.toString(2).padStart(10, '0');
        //console.log('binary ', binaryString);
        const myBinaryArray = binaryString.split('');
        setBinaryArray(myBinaryArray);
        //console.log('myBinaryArray ', myBinaryArray);
    };
    return (
        <motion.div
            className='h-full mx-4 mt-4'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col'>
                <h2 className='my-4 text-xl text-semibold'>
                    DMX Address to Dipswitch (Binary)
                </h2>
                <div className='my-2 text-sm text-semibold'>
                    Enter DMX Address:
                </div>
                <div className='flex grid items-center grid-cols-10 my-1 bg-gray-200 border border-gray-300 rounded-sm '>
                    <div className='flex flex-row col-span-10'>
                        <button
                            data-action='decrement'
                            className='w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400'
                            onClick={(e) => setDmxAddress(dmxAddress - 1)}
                        >
                            <span className='m-auto text-2xl font-thin'>−</span>
                        </button>
                        <input
                            type='number'
                            className='flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default'
                            name='custom-input-number'
                            onChange={(e) => handleDMXChange(e.target.value)}
                            value={dmxAddress}
                        ></input>
                        <button
                            data-action='increment'
                            className='w-20 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400'
                            onClick={(e) => setDmxAddress(dmxAddress + 1)}
                        >
                            <span className='m-auto text-2xl font-thin'>+</span>
                        </button>
                    </div>
                </div>
                <div className='mt-2 bg-gray-200'>
                    <div className='grid grid-cols-10'>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm font-light text-center text-white bg-gray-300'>
                            1
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm font-light text-center text-white bg-gray-300'>
                            2
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm font-light text-center text-white bg-gray-300'>
                            3
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm font-light text-center text-white bg-gray-300'>
                            4
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm text-center text-white bg-gray-300'>
                            5
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm text-center text-white bg-gray-300'>
                            6
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm text-center text-white bg-gray-300'>
                            7
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm text-center text-white bg-gray-300'>
                            8
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm text-center text-white bg-gray-300'>
                            9
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 mx-auto my-1 text-sm text-center text-white bg-gray-300'>
                            10
                        </div>
                    </div>
                    <div className='grid grid-cols-10 my-2 place-content-center'>
                        <DipSwitch value={binaryArray[9]} />
                        <DipSwitch value={binaryArray[8]} />
                        <DipSwitch value={binaryArray[7]} />
                        <DipSwitch value={binaryArray[6]} />
                        <DipSwitch value={binaryArray[5]} />
                        <DipSwitch value={binaryArray[4]} />
                        <DipSwitch value={binaryArray[3]} />
                        <DipSwitch value={binaryArray[2]} />
                        <DipSwitch value={binaryArray[1]} />
                        <DipSwitch value={binaryArray[0]} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
