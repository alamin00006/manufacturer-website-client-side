import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import SingleTool from './SingleTool';

const Tools = () => {

    const [tools, setTools] = useState([]);
    
    // useEffect(() =>{
    //     fetch('https://secure-anchorage-88576.herokuapp.com/parts')
    //     .then(res => res.json())
    //     .then(data =>setTools(data))
    // }, [])

    const url = 'https://secure-anchorage-88576.herokuapp.com/parts';
    const {isLoading} = useQuery(['parts'], ()=> fetch(url).then(res=>res.json()).then(data =>setTools(data)))
    
    if(isLoading){
        return <Loading></Loading>
    }


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