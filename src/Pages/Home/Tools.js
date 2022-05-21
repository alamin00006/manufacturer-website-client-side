import React, { useEffect, useState } from 'react';
import SingleTool from './SingleTool';

const Tools = () => {

    const [tools, setTools] = useState([]);
    
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setTools(data))
    }, [])

    return (
        <div className='mt-10'>
            <h1 className='text-center text-teal-500 text-3xl'>Our Machin Tools {tools.length}</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
           {
                tools.map(tool => <SingleTool key={tool.id} 
                    tool={tool}></SingleTool>)
            }
           </div>
        </div>
    );
};

export default Tools;