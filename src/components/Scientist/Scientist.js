import React, { useEffect, useState } from 'react';
import'./Scientist.css'
const Scientist = () => {
    const [scientists,setScientist]=useState([]);
    useEffect(()=>{
        fetch('./api.json')
        .then(res=>res.json())
        .then(data=>setScientist(data))
    },[])
    return (
        <div>
            <h1>{scientists.length}</h1>
        </div>
    );
};

export default Scientist;