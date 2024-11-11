import React from 'react';
import './Popular.css';
import data_product from '../assets/data';  // Adjust path if necessary
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN IPHONE</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.Image}  // Pass Image here as 'image'
            new_price={item.new_price}  // Pass new_price here
            old_price={item.old_price}  // Pass old_price here
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

