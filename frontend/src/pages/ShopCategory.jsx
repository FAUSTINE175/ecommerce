import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt='' />
            <div className="shopcategory-indexSort">
                <p>
                    <span>showing 1,2,3,4</span> out of 5 products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt='' />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item) => {
                    if (props.category === item.category) {
                        return (
                            <Item  
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.Image}  // Use lowercase `image` if that's the correct key
                                new_price={item.new_price}  
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <div className="shopcategory-loadmore">
                explore more
            </div>
        </div>
    );
};

export default ShopCategory;
