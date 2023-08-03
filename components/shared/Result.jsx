import React from 'react';

export default function Result(props) {
    const { label, unit, icon, value } = props;
    return (
        // <div className='flex grid items-center grid-cols-12 my-2 mb-4 bg-gray-200 border border-gray-300 rounded-sm'>
        //     <div className='flex items-center justify-center col-span-1'>
        //         {icon}
        //     </div>
        //     <div className='h-full col-span-4'>
        //         <label className='block h-full mb-1 font-bold text-dark'>
        //             {label}
        //         </label>
        //     </div>

        //     <div className='flex items-center justify-center h-full col-span-5'>
        //         <label className='block h-full mb-1 font-bold text-dark'>
        //             {value}
        //         </label>
        //     </div>
        //     <div className='flex justify-center w-full col-span-2'>
        //         <label className='block mb-1 text-sm font-bold text-center text-dark'>
        //             {unit}
        //         </label>
        //     </div>
        // </div>

        <div className='flex flex-col'>
            <div className='my-1 text-sm text-semibold'> {label}</div>
            <div className='flex grid items-center grid-cols-10 my-1 bg-gray-200 border border-gray-300 rounded-sm '>
                <div className='flex flex-row col-span-8'>
                    <div className='flex ml-2 font-semibold text-center text-gray-700 bg-gray-300 outline-none full m-items-center focus:outline-none text-md hover:text-black focus:text-black'>
                        Voltage Drop = {value}
                    </div>
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
