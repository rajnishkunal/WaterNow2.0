import React, { useState } from 'react';
import './OrderForm.css'; // Import CSS file
import { getDatabase, ref, push } from "firebase/database";
import {app} from "../firebase.js"; // Import Firebase app instance
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    deliveryTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get a reference to the database service
    const db = getDatabase(app);
    // Push data to the database
    const ordersRef = ref(db, 'orders');
    push(ordersRef, formData)
      .then(() => {
        console.log("Data saved successfully!");
        // Clear form data after submission
        setFormData({
          name: '',
          phoneNumber: '',
          address1: '',
          address2: '',
          deliveryTime: '',
        });
        Navigate('/');
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
      toast.success("Order Placed");
      
  };

  return (
    <div className="container">
      <form className="form order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address Line 1:</label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Address Line 2:</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryTime">Preferred Delivery Time:</label>
          <input
            type="text"
            id="deliveryTime"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
