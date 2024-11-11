import React from 'react';
import './Item.css';

const Item = (props) => {
  console.log(props);  // Log the props to check if they are passed correctly
  return (
    <div className='item'>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          ksh {props.new_price}  {/* Access new_price correctly */}
        </div>
        <div className='item-price-old'>
          ksh {props.old_price}  {/* Access old_price correctly */}
        </div>
      </div>
    </div>
  );
};

export default Item;
