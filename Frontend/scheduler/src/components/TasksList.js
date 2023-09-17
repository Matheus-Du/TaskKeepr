import React from 'react';
import { ProgressBar } from './ProgressBar'; // Import ProgressBar component

export const TasksList = ({ fillArrays }) => {
    return (
        <>
            {fillArrays.map((fillArray, index) => (
                <div key={index}>
                    <div className='w-1/8'>
                        <p className='text-gray-100'>Task {index + 1}</p>
                    </div>
                    <div className='w-7/8 flex'>
                        <ProgressBar fillArray={fillArray} index={index} />
                    </div>
                </div>
            ))}
        </>
    );
};
