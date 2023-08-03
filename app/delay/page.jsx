'use client';
import React, { useState, useEffect } from 'react';

import { FaRulerHorizontal, FaRuler } from 'react-icons/fa';

import { TbCircuitResistor } from 'react-icons/tb';
import {TbBrandSpeedtest} from 'react-icons/tb';

import InputNumber from '../../components/shared/InputNumber';
import InputSelect from '../../components/shared/InputSelect';
import Result from '../../components/shared/Result';

import { motion } from 'framer-motion';

const Page = () => {
    const [units, setUnits] = useState('metric');

    const [speakerDelay, setSpeakerDelay] = useState(0.0);

    const [length, setLength] = useState(10);
    const [speed, setSpeed] = useState(343);
    const calculate = (obj) => {
        console.log('calculating', obj);

        if (obj.label === 'Length') {
            setLength(obj.value);
        }
        if (obj.label === 'Speed of Sound') {
            setSpeed(obj.value);
        }

        const delay = (length / speed) * 1000;
        console.log('delay', delay);

        setSpeakerDelay(delay);
    };

    return (
        <motion.div
            className='mt-4 mx-4 h-full'
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <h2 className='text-semibold text-xl my-4'>
                Audio Delay Calculator
            </h2>
            <motion.div
                className='flex justify-end gap-2'
                initial={{ opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div
                    className='p-1 border border-primary rounded-md text-bright shadow-sm  text-sm hover:bg-middle hover:opacity-50 flex items-center justify-center'
                    onClick={() => setUnits('metric')}
                >
                    metric (m & mm²)
                </div>
                <div
                    className='p-1 border border-primary rounded-md text-bright shadow-sm text-sm hover:bg-middle hover:opacity-50 flex items-center justify-center'
                    onClick={() => setUnits('imperial')}
                >
                    imperial (ft & AWG)
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <InputNumber
                    label='Length'
                    unit={units === 'metric' ? 'm' : 'ft'}
                    icon={
                        <FaRulerHorizontal className='text-2xl text-center' />
                    }
                    calculate={calculate}
                />
                <InputNumber
                    label='Speed of Sound'
                    unit={units === 'metric' ? 'm/s' : 'ft/s'}
                    icon={<TbBrandSpeedtest className='text-2xl text-center' />}
                    calculate={calculate}
                    defaultValue={343}
                    value={speed}
                />

                <div className='mb-4 grid grid-cols-12 flex items-center my-2 border-gray-300 border bg-gray-200 rounded-sm'></div>
                <Result
                    label='Speaker delay'
                    unit='ms'
                    icon={
                        <FaRuler className='text-2xl text-center text-dark' />
                    }
                    value={speakerDelay.toFixed(2)}
                />
            </motion.div>
        </motion.div>
    );
};

export default Page;
