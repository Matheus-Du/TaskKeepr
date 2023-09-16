import React, { useEffect } from 'react';
import UAlberta from './shared/icon-ualberta.svg'

export const Profile = () => {
    let fillCells = 3;
    const cellsToFill = fillCells > 0 ? Math.min(fillCells, 7) : 0;
    console.log(cellsToFill)
    return (
        <div className='flex flex-wrap h-32 border rounded-md '>
            <div className='absolute flex flex-row'>
                <div className='py-6 px-6 relative overflow-visible'>
                    <div className='relative right-32 px-5 py-4 circle1 rounded-full border-2 h-20 w-20'>
                        <img src={UAlberta} alt='UAlberta Logo'></img>
                    </div>
                </div> 
            </div>
            <div className='w-1/8'>
                <p className='text-gray-100'>Task 1</p>
            </div>
            <div className='w-7/8 flex'>
                <div className={`flex-1/7 border-blue-500 grow ${cellsToFill >= 1 ? 'bg-blue-500' : ''}`}>
                    <div className='flex flex-col'>
                            <p>papaya </p>
                    </div>
                </div>
                <div className={`flex-1/7 border-blue-500 grow ${cellsToFill >= 2 ? 'bg-blue-500' : ''}`}>
                    <p>papaya</p>
                </div>
                <div className={`flex-1/7 border-blue-500 grow ${cellsToFill >= 3 ? 'bg-blue-500' : ''}`}>
                    <p>papaya</p>
                </div>
                <div className={`flex-1/7 border grow ${cellsToFill >= 4 ? 'bg-blue-500' : ''}`}>
                    <p>papaya</p>
                </div>
                <div className={`flex-1/7 border grow ${cellsToFill >= 5 ? 'bg-blue-500' : ''}`}>
                    <p>papaya</p>
                </div>
                <div className={`flex-1/7 border grow ${cellsToFill >= 6 ? 'bg-blue-500' : ''}`}>
                    <p>papaya</p>
                </div>
                <div className={`flex-1/7 border grow ${cellsToFill >= 7 ? 'bg-blue-500' : ''}`}>
                    <p>papaya</p>
                </div>
            </div>
        </div>
    )
}

// <div className='absolute circle1 rounded-full border-2 border-black h-24 w-24'>
//<img className='relative top-3 left-5' src={UAlberta} alt='UAlberta Logo'></img>
//</div>