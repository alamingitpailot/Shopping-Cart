
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './product.css';

const Product = ({ product, handleAddToCart }) => {

    const { img, name, price, seller, ratings } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className="cart-btn">
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    )
}
export default Product;