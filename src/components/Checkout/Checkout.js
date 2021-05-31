import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src='' alt='' />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title' >Your shopping Basket</h2>
                    {basket?.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
