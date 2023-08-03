'use client';

import { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { MdCable } from 'react-icons/md';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        //console.log('handleMenu');
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='relative flex items-center h-12 max-w-full px-2 bg-primary'>
            <div className='mr-2 text-3xl text-white text-bold '>
                <MdCable />
            </div>
            {menuOpen && (
                <motion.div
                    className='absolute top-0 left-0 flex flex-col h-screen max-w-full min-w-full pt-8 text-left divide-y divide-white bg-dark opacity-95 z-100 divide-solid'
                    onClick={handleMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className='pt-4 m-2 text-2xl text-white'>
                        <Link href='/'>Voltage Drop</Link>
                    </div>
                    <div className='pt-4 m-2 text-2xl text-white'>
                        <Link href='/dipswitch'>DMX to DipSwitch</Link>
                    </div>

                    <Link
                        href='/power'
                        className='pt-4 m-2 text-2xl text-white'
                    >
                        Power Consumption Calculator
                    </Link>
                    <Link
                        href='/delay'
                        className='pt-4 m-2 text-2xl text-white'
                    >
                        Audio Delay Calculator
                    </Link>
                </motion.div>
            )}

            <div className='flex-grow w-full text-xl text-white text-bold'>
                Event Tech Utilities
            </div>

            <div
                onClick={handleMenu}
                className='flex items-center h-full pr-2 z-200'
            >
                <FaBars className='text-xl text-white z-200 hover:scale-125' />
            </div>
        </div>
    );
}
