import React from 'react';
import './Cart.css';

//add salary to the cart
const Cart = (props) => {
    const {cart}=props;
    let addedPeople='';
    let total=0;
    let  totalQuantity=0;

   for (const scientist of cart){
       scientist.quantity=!scientist.quantity ? 1:scientist.quantity;
       total=total+(scientist.salary*scientist.quantity);
       totalQuantity= totalQuantity+scientist.quantity;
       addedPeople=addedPeople+"   "+scientist.name;
   };

    return (
        <div className="cart-info">
            <h4>Scientists added:{totalQuantity} </h4>
            <h2>Total Cost:${total} </h2>
            <h1>{addedPeople}</h1>
        </div>
    );
};

export default Cart;