import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Item  from '../components/Item/Item';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <NewsLetter />
            <Offers />
            <Item />
            <NewCollections />
            
        </div>
    );
}

export default Shop;
