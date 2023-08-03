'use client';
import VoltageDrop from '../components/VoltageDrop';


import Image from 'next/image';

import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
export default function Home() {
    return (
        <div className='w-5/6 mx-auto sm:w-1/2'>
            <VoltageDrop />
            {/* <DMXAddressToBinaryCalculator />
                <DMXAddressingTool />{' '} */}
        </div>
    );
}
