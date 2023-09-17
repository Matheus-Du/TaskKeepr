import React from 'react';
import { Card } from './components/Card';
const teams = [
    {
        "id": "05efa594-3794-4466-adff-900ff9715a79",
        "name": "JSON event",
        
    }, 
    {
        "id": "05efa594-3794-4466-adff-900ff9715a79",
        "name": "Team 2",
        
    }, 
    {
        "id": "05efa594-3794-4466-adff-900ff9715a79",
        "name": "Team 3",
        
    }]
export const Home = () => {
    return (
        <div className='w-full space-y-10 bg-backgroundWork'>
            <div className='gap-16 flex flex-row'>
                <div className='grid-cols-2 sm:grid-cols-3 md:grid-cols-2'>
                    {
                        teams && teams.length > 0 ? 
                        <>
                        <div>
                        {teams.map((team)=>(
                            <Card id={team.id} name={team.name}/>
                        ) )} 
                        </div>
                        </> : <>
                        
                        </>
                    }
            </div>
      </div>
        </div>
    )
}