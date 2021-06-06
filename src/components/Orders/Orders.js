import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from '../Order/Order';
import './Orders.css';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [{user, basket}, dispatch] = useStateValue();

    console.log(orders);

    useEffect(() => {
        if(user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ))
        } else {
            setOrders([]);
        }
        
    }, []);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map((order, id) => (
                    <Order key={id} order={order} />
                )) }
            </div>
        </div>
    )
}

export default Orders;
