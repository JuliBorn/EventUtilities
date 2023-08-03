'use client';
import React, { useState, useEffect } from 'react';

import {
    FaRulerHorizontal,
    FaPlug,
    FaBolt,
    FaPercent,
    FaRuler,
} from 'react-icons/fa';

import { TbCircuitResistor } from 'react-icons/tb';
import { ImPower } from 'react-icons/im';

import InputNumber from './shared/InputNumber';
import InputSelect from './shared/InputSelect';
import Result from './shared/Result';

import { useVoltageStore } from '../store';

import { motion } from 'framer-motion';

const VoltageDrop = () => {
    //Get values from store
    const current = useVoltageStore((state) => state.current);
    const voltage = useVoltageStore((state) => state.voltage);
    const distance = useVoltageStore((state) => state.distance);
    const resistivity = useVoltageStore((state) => state.resistivity);
    const crossSection = useVoltageStore((state) => state.crossSection);

    const [units, setUnits] = useState('metric');

    // const [current, setCurrent] = useState(10);

    const [voltageDropPerc, setVoltageDropPercent] = useState(0);

    const calculate = () => {
        const prevState = useVoltageStore.getState();
        console.log('calculating...', prevState);
        const resistivityTotal =
            (2 * prevState.distance) /
            (prevState.resistivity * prevState.crossSection);
        console.log('resistivityTotal', resistivityTotal);
        const voltageDrop = resistivityTotal * prevState.current;
        console.log('voltageDrop', voltageDrop);
        setVoltageDropPercent((voltageDrop / prevState.voltage) * 100);
    };

    return (
        <div className='p-4'>
            {/* <div className='flex justify-center gap-2'>
                <div
                    className='flex items-center justify-center flex-grow p-2 text-sm border rounded-md shadow-sm border-primary text-bright hover:bg-middle hover:opacity-50'
                    onClick={() => setUnits('metric')}
                >
                    metric (m & mm²)
                </div>
                <div
                    className='flex items-center justify-center flex-grow p-2 text-sm border rounded-md shadow-sm border-primary text-bright hover:bg-middle hover:opacity-50'
                    onClick={() => setUnits('imperial')}
                >
                    imperial (ft & AWG)
                </div>
            </div> */}
            <h2 className='my-1 text-xl font-bold'>Voltage Drop Calculator</h2>
            <motion.div
                className='flex justify-center gap-4'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 0 }}
            >
                <div className='flex-grow p-2 text-sm text-center bg-gray-300 shadow-sm text-dark hover:bg-gray-400'>
                    AC
                </div>
                <div className='flex-grow p-2 text-sm text-center bg-gray-300 shadow-sm text-dark hover:bg-gray-400'>
                    AC 3-phase
                </div>
                <div className='flex-grow p-2 text-sm text-center bg-gray-300 shadow-sm text-dark hover:bg-gray-400'>
                    DC
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 1 }}
            >
                <InputNumber
                    label='Current'
                    name='current'
                    unit='A'
                    icon={
                        <FaPlug className='text-xl font-thin text-center text-white' />
                    }
                    step={0.1}
                    min={0}
                    deftValue={current}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 2 }}
            >
                <InputNumber
                    label='Voltage'
                    name='voltage'
                    unit='V'
                    icon={<FaBolt className='text-xl text-center text-white' />}
                    step={1}
                    min={0}
                    defValue={voltage}
                />
            </motion.div>{' '}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 3 }}
            >
                <InputNumber
                    label='Distance'
                    name='distance'
                    unit={units === 'metric' ? 'm' : 'ft'}
                    icon={
                        <FaRulerHorizontal className='text-xl text-center text-white' />
                    }
                    step={1}
                    min={0}
                    defValue={distance}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 4 }}
            >
                <InputSelect
                    label='Resistivity'
                    name='resistivity'
                    unit='Ω/m'
                    icon={
                        <TbCircuitResistor className='text-xl text-center text-white' />
                    }
                    step={1}
                    min={0}
                    defValue={resistivity}
                />
            </motion.div>{' '}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 5 }}
            >
                <InputNumber
                    label='Cross Section'
                    name='crossSection'
                    unit={units === 'metric' ? 'mm²' : 'AWG'}
                    icon={
                        <FaRuler className='text-xl text-center text-white' />
                    }
                    step={0.01}
                    min={0}
                    defValue={crossSection}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * 6 }}
            >
                <Result
                    label='Voltage Drop'
                    unit='%'
                    icon={
                        <FaPercent className='text-2xl text-center text-dark' />
                    }
                    value={voltageDropPerc.toFixed(2)}
                />
            </motion.div>
            <div
                className='flex flex-col items-center justify-center h-12 mt-8 text-2xl font-semibold text-white bg-primary'
                onClick={() => calculate()}
            >
                calculate
            </div>
        </div>
    );
};

export default VoltageDrop;
