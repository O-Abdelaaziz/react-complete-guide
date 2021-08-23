import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const param = useParams();
    console.log(param.productId);
    return (
        <section>
           <h1>Product Details</h1>
           <p>{param.productId}</p>
        </section>
    )
}
export default ProductDetails;