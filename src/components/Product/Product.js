import React from 'react';
import {useStateValue} from '../../StateProvider';
import './Product.css';

const Product = ({ id, title, image, price, rating}) => {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispathc item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className='product' >
            <div className="product__info">
                <p className='product__title'>{title}</p>
                <p className='product__price'>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=> (
                        <p key={i} >⭐</p>
                    ))}
                    <p>⭐</p>
                </div>
                
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
