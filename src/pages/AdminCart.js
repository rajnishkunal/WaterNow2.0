import React, { useState, useEffect } from 'react';
import './AdminCart.css'; // Import CSS file
import { getDatabase, ref, onValue, remove } from "firebase/database";
import {app} from "../firebase.js";  // Import Firebase app instance

const AdminCart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Get a reference to the database service
    const db = getDatabase(app);
    // Reference to 'orders' node
    const ordersRef = ref(db, 'orders');
    
    // Fetch data from Firebase Realtime Database
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setOrders(ordersArray);
      } else {
        setOrders([]);
      }
    });

    // Cleanup function
    return () => {
      // Unsubscribe from database changes
      // This prevents memory leaks
      setOrders([]);
    };
  }, []);

  const handleDeliver = (id) => {
    // Get a reference to the database service
    const db = getDatabase(app);
    // Reference to the specific order node
    const orderRef = ref(db, `orders/${id}`);
    
    // Remove the order from the database
    remove(orderRef)
      .then(() => {
        console.log(`Order with ID ${id} delivered and removed from database`);
        // Update local state to reflect the changes
        setOrders(orders.filter(order => order.id !== id));
      })
      .catch((error) => {
        console.error("Error delivering order: ", error);
      });
  };

  return (
    <div className="admin-cart-container">
      <h2>Admin Cart</h2>
      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <div>
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
                <p><strong>Address:</strong> {order.address1}, {order.address2}</p>
                <p><strong>Delivery Time:</strong> {order.deliveryTime}</p>
              </div>
              <button onClick={() => handleDeliver(order.id)} className="deliver-btn">Deliver</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminCart;
