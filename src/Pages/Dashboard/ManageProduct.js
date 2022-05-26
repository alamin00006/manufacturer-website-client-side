import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProduct = () => {
    const [tools, setTools] = useState([]);
    const [productDelete, setProductDelete] = useState(null)
    
    useEffect(() =>{
        fetch('https://secure-anchorage-88576.herokuapp.com/parts')
        .then(res => res.json())
        .then(data =>setTools(data))
    }, [])

    return (
        <div className='mt-10'>
            <h1 className='text-center text-teal-500 text-3xl'>Our Machin Tools {tools.length}</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
           {
                tools.map(tool => <ManageSingleProduct key={tool.id} 
                    tool={tool} tools={tools}
                    setTools={setTools} setProductDelete={setProductDelete}></ManageSingleProduct>)
            }
           </div>

           {
               productDelete && <DeleteModal tools={tools} productDelete={productDelete} setProductDelete={setProductDelete} setTools={setTools}></DeleteModal>
           }
        </div>
    );
};

export default ManageProduct;