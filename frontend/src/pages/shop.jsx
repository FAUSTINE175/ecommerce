import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Item  from '../components/Item/Item';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular /> {/* Capitalized "Popular" */}
            <Offers />
            <Item />
        </div>
    );
}

export default Shop;
