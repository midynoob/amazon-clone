import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketToral } from '../../reducer/reducer';
import { useStateValue } from '../../StateProvider';

import './Subtotal.css';

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}]</strong>
                    </p>
                    <small className="subtotal___gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketToral(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Procced to Checkout</button>
        </div>
    )
}

export default Subtotal;
