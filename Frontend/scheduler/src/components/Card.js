import React from "react"
import Go from './../lib/shared/goo.png'
import Task from '../lib/shared/logo-no-background-min.png'
export const Card = ({id, name}) => {
return(
    < div className="px-10 pb-24">
    <div className='flex flex-row w-full '>
        <div className='flex flex-col gap-10 gap-y-20 group cursor-pointer bg-gray-100 rounded-lg inset-0 border-gradient'> 
            <div className="relative h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200-ease-out border-4 border-gradient">
                <img src={Go} alt="idea"/>
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg p-6 flex justify-between'>
                    <div>
                        <p  className='font-bold text-xl'>{name} </p>
                        <p>Main Office</p>
                    </div>
                    <div className='flex flex-row  gap-y-2 gap-x-4 items-center'>
                        <img className="h-16" src={Task}></img>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
)
}