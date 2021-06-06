import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from '../../reducer/reducer';
import { useStateValue } from '../../StateProvider';

import './Subtotal.css';

const Subtotal = () => {

    const history = useHistory();
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
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'Rs'}
            />
            <button onClick={e => history.push('/payment')} >Procced to Checkout</button>
        </div>
    )
}

export default Subtotal;
