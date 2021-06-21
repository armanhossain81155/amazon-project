import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const {img , name, seller, price, stock} =  props.product;
    // console.log(props)
    return (
        <div className = "product">
                <div className="product-img"> 
                    <img src={img} alt="" />
                    
                </div>
            <div >
            <h3 className= " product-name" >{name}</h3>
            <br/>
            <p><small>By : {seller}</small></p>
            <br />
            <h5>price : ${price}</h5>
            <p><small>Available {stock} pieces. Order Soon</small></p>
            <button className="main-button"
            onClick = {() => props.handleAddProduct(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;