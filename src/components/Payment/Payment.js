import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../../reducer/reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';

import './Payment.css';
import { db } from '../../firebase';


const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    console.log(clientSecret);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation


            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET',
            })

            history.replace('/orders');
        })

        // const payload = await stripe 

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error? event.error.message: '');
    }



    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `payments/create?total=${Math.floor(getBasketTotal(basket) * 100) }`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
        
    }, [basket]);








    return (
        <div className='payment' >
            <div className="payment__container">
                <h1>
                    CheckOut (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Deivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>somewhter, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.image}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic */}
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'Rs'}
                                />
                                <button disabled={processing || disabled || succeeded } >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;
