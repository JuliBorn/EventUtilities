'use client';
import VoltageDrop from '../components/VoltageDrop';

import Image from 'next/image';

import React, { useState, useEffect } from 'react';

export default function Home() {
    return (
        <div className='mx-auto '>
            <VoltageDrop />
            {/* <DMXAddressToBinaryCalculator />
                <DMXAddressingTool />{' '} */}
        </div>
    );
}
