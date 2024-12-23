import React from 'react';
import './Popular.css';
import data_product from '../assets/data';  // Adjust path if necessary
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN PHONE</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.Image}  
            new_price={item.new_price}  
            old_price={item.old_price}  
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

