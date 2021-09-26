import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scientist/Scientist';
import'./Scientists.css';

//fetch data from api and store in a state
const Scientists = () => {
    const [scientists,setScientists]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./api.json')
            .then(res=>res.json())
            .then(data=>setScientists(data))
    },[]);

    const addToCart=(scientist)=>{
        const newScientist=[...cart,scientist];
        setCart(newScientist);
    };
    
    return (
        <div id="container">
            <div className="container">
                <div className="sci-container">
                    {
                        scientists.map(scientist=> <Scientist key={scientist.name} scientist={scientist} addToCart={addToCart}></Scientist>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Scientists;