import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1>Hello From Product Component.</h1>
            <ul>
                <li><Link to='/products/p1'>Product Details 1</Link></li>
                <li><Link to='/products/p2'>Product Details 2</Link></li>
                <li><Link to='/products/p3'>Product Details 3</Link></li>
            </ul>
        </div>
    )
}

export default Product
