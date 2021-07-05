import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const reviewItemStyle = {
        borderBottom : '1px  solid lightgray',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '200px'
    }
    const {name, quantity,price, key} = props.product;
    return (
        <div style={reviewItemStyle}>
            <h3 className="product-name">{name}</h3>
            <p>Quantity : {quantity}</p>
            <p>  <small>${price}</small> </p>
            <br />
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove Item</button>
        </div>
    );
};

export default ReviewItem;