import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiospublic=useAxiosPublic()
    // const[loading,setLoading]=useState(true)
    //   const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])
    const{data:menu=[],isPending:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await axiospublic.get('/menu');
            return res.data
        }
    })

    return [menu,loading,refetch];
};

export default useMenu;