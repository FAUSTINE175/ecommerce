import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams(); // Get the productId from URL params

    // Check if product data has been loaded
    if (!all_product || all_product.length === 0) {
        return <div>Loading...</div>;  // Show loading if products are still being fetched
    }

    // Find the product by id
    const product = all_product.find((e) => e.id === Number(productId));

    // If the product is not found, show a not found message
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
};

export default Product;
