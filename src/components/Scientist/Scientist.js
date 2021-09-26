import React from 'react';
//import react icons
import { FaShoppingCart, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Scientist.css';

//display scientist info by props
const Scientist = (props) => {

    const {name,education,university,age,salary,img}=props.scientist;

    return (
        <div className="single-sci">
            <div className="sci-img">
                <img src={img} alt="" width="200px" height="200px" />
            </div>
            <div className="sci-info">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Working field:{education}</p>
                <p>Institute: {university}</p>
                <p>Salary: ${salary}</p>
                <button onClick={()=>props.addToCart(props.scientist)}> <FaShoppingCart /> Hire now</button>
                <div className="icon">
                    <span> < FaFacebook /> </span>
                    <span> <FaTwitter/> </span>
                </div>
            </div>
        </div>
    );
};

export default Scientist;