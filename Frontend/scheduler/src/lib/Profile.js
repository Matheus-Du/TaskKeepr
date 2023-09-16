import React from 'react';
import UAlberta from './shared/icon-ualberta.svg'

export const Profile = () => {
    return (
    <div className='relative'> 
        <div className=' absolute bottom-0 left-0'>
            <div className='circle1 rounded-full border-2 border-black h-28 w-24'>
                <img className='' src={UAlberta} alt='UAlberta Logo'></img>
            </div>
        </div>
        <div className='absolute bottom-0 right-0'>
            <p className='text-gray-100'>papaya</p>
        </div>
    </div>
    )
}