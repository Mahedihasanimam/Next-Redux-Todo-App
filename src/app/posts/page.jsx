'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../reduxToolkit/slice';

const page = () => {
    const dispatch=useDispatch()

    const apiUserdata=useSelector((data)=>data.fetchApiData)
   
    useEffect(()=>{
        dispatch(fetchApiData())
    },[])
    return (
        <div>
            <h3 className='text-4xl font-bold my-12'>this is post page</h3>
           <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6'>
           {apiUserdata && apiUserdata.length > 0 ? (
                apiUserdata.map(item => (
                    <div className='max-w-xl border p-4' key={item.id}>
                       <h3 className='text-blue-500'> {item.title}</h3>
                       <p className='text-xs'> {item.body}</p>
                        </div>
                ))
            ) : (
                <p>No data available</p>
            )}
           </div>
        </div>
    );
};

export default page;