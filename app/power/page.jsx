'use client';
import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { motion } from 'framer-motion';

export default function Page() {
    const [devices, setDevices] = useState([]);

    const [powerUsage, setPowerUsage] = useState(0);
    const [amount, setAmount] = useState(0);

    const [totalPowerUsage, setTotalPowerUsage] = useState(0);

    const handleAdd = () => {
        //console.log('added ', powerUsage * amount, ' watts');

        const myDevices = [...devices];
        for (let i = 0; i < amount; i++) {
            const myDevice = { 'id': uuidv4(), 'watts': parseInt(powerUsage) };

            myDevices.push(myDevice);
        }
        setDevices(myDevices);
        //console.log('devices ', devices);
        let totalPower = 0;

        myDevices.forEach((device) => {
            totalPower += device.watts;
        });
        //console.log('totalPower ', totalPower);
        setTotalPowerUsage(totalPower);
    };
    const handleRemove = (idToRemove) => {
        //console.log('remove ', idToRemove);
        const updatedDevices = devices.filter(
            (device) => device.id !== idToRemove
        );
        setDevices(updatedDevices);

        let totalPower = 0;
        updatedDevices.forEach((device) => {
            totalPower += device.watts;
        });
        setTotalPowerUsage(totalPower);
    };
    useEffect(() => {
        const myDevices = [];
    }, []);
    return (
        <motion.div
            className='h-full mx-4 mt-4'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col '>
                <h2 className='my-4 text-xl text-semibold'>
                    Power Consumption Calculator
                </h2>
                <div className='my-1 text-semibold text-md'>
                    Power Consumption: (in Watts)
                </div>
                <div className='flex grid items-center grid-cols-10 my-1 bg-gray-200 border border-gray-300 rounded-sm '>
                    <div className='flex flex-row col-span-10'>
                        <button className='w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-400'>
                            <span className='m-auto text-2xl font-thin'>−</span>
                        </button>
                        <input
                            type='number'
                            className='flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default'
                            name='custom-input-number'
                            onChange={(e) => setPowerUsage(e.target.value)}
                        ></input>
                        <button className='w-20 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400'>
                            <span className='m-auto text-2xl font-thin'>+</span>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='my-1 text-semibold text-md'>Amount:</div>
                    <div className='flex flex-row col-span-10'>
                        <button className='w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-400'>
                            <span className='m-auto text-2xl font-thin'>−</span>
                        </button>
                        <input
                            type='number'
                            className='flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default'
                            name='custom-input-number'
                            onChange={(e) => setAmount(e.target.value)}
                        ></input>
                        <button className='w-20 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400'>
                            <span className='m-auto text-2xl font-thin'>+</span>
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => handleAdd()}
                    className='w-20 w-full h-full p-1 my-1 text-white rounded-r cursor-pointer bg-primary hover:bg-primary hover:bg-gray-400'
                >
                    <span className='w-full m-auto text-2xl font-semibold'>
                        Add
                    </span>
                </button>
            </div>
            <div>
                {devices.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className='flex items-center gap-2 bg-gray-100 -z-11 text-dark'
                        >
                            <div className=''>Device</div>
                            <div className='flex-grow text-dark'>
                                {item.watts} W
                            </div>
                            <div
                                className='mr-4 text-sm cursor-pointer text-dark'
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='fixed flex flex-col items-start justify-start w-64 h-32 pt-2 pl-2 text-white rounded-md -z-10 bottom-8 right-8 bg-primary drop-shadow-lg'>
                <div className='flex items-center gap-2 text-xl'>
                    <div>Total Power</div>
                    <div> {totalPowerUsage} W </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div>amout Devices</div>
                    <div> {devices.length} </div>
                </div>
                <div className='flex items-center gap-2 text-xs'>
                    <div>Average Power Consumption</div>
                    <div> {(totalPowerUsage / devices.length).toFixed(2)}</div>
                </div>
            </div>
        </motion.div>
    );
}
