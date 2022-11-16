import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState();

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCarts = [...cart, product];
        const TotalPrice = newCarts.reduce((totalPrice, cart) => totalPrice + cart.price, 0);
        setPrice(TotalPrice);
        setCart(newCarts);
    }

    return (
        <div className='shop-product'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <p>Selected Items: {cart.length}</p>
                <p>Selected Items: {price || 0}</p>
            </div>
        </div>
    )
}
export default Shop;