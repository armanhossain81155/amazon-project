import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import thumbsUp from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        console.log('remove koro', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);

    }
        const [orderPlaced, setOrderPlaced] = useState(false)


      const handleOrderProcess = () => {

        setCart([]);
        setOrderPlaced(true);
        processOrder();
          console.log("order placed")
      }


    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
     
    let thankYou;
    if(orderPlaced){
            thankYou = <img src={ thumbsUp} alt="" />
    }

    return (
        <div className="twin-container">
            
         <div className="product-container">
         {cart.map(pd =>  <ReviewItem

                removeProduct ={removeProduct}
                 key={pd.key}
                  product = {pd}>

                  </ReviewItem>)
           }
          {
              thankYou
          }
         </div>
         <div className="cart-container">

             <Cart cart={cart}>

                <button onClick={handleOrderProcess} className="main-button">Place Order</button>
             </Cart>
             
        </div>   
         
        </div>
    );
};

export default Review;