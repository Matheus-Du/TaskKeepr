import React, { useEffect } from 'react';
import UAlberta from './shared/icon-ualberta.svg'
import { ProgressBar } from '../components/ProgressBar';
import { TasksList } from '../components/TasksList';

export const Profile = ({
    id,
    type,
    name,
    description, 
    startDate,
    endDate
}) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const fillArray = [];
    const daysOfWeek = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
    };

    const fillArrays = []
    for (let i = 0; i < 7; i++) {
        if (i >= daysOfWeek[start.toLocaleDateString('en-US', { weekday: 'long' })] &&
            i <= daysOfWeek[end.toLocaleDateString('en-US', { weekday: 'long' })]) {
            fillArray.push(0); // Fill the cell
        } else {
            fillArray.push(1); // Don't fill the cell
        }
    }
    fillArrays.push(fillArrays)
    console.log(fillArray);
    console.log(fillArrays)
    //Idea: Hover over profile logo and show name
    return (
        <div className='flex flex-wrap h-32 border rounded-md '>
            <div className='absolute flex flex-row'>
                <div className='py-6 px-6 relative overflow-visible'>
                    <div className='relative right-32 px-5 py-4 circle1 rounded-full border-2 h-20 w-20'>
                        <img src={UAlberta} alt='UAlberta Logo'></img>
                        <p className='text-gray-100 mt-4'>{name}</p> 
                    </div>
                  
                </div> 
            </div>
           <ProgressBar fillArray = {fillArray}/>
        </div>
    )
}

// <div className='absolute circle1 rounded-full border-2 border-black h-24 w-24'>
//<img className='relative top-3 left-5' src={UAlberta} alt='UAlberta Logo'></img>
//</div>