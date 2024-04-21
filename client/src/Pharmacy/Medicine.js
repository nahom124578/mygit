import React, { useState } from 'react';
import './medi.css';
function Medicine({ onAddMedicine }) {
  const [name, setName] = useState('');
  const [manufacturer,setManufacturer] =useState('');
  const [unit, setUnit] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(1); 
  const [expiryDate,setExpiryDate]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedicine({ id: Date.now(), name,manufacturer, unit, type, quantity ,expiryDate}); // Include quantity in data
    setName('');
    setUnit('');
    setType('');
    setQuantity(1); 
    setExpiryDate('');// Reset quantity after submission
  };

  return (
    <div>
      <h1>Medicine Info</h1>
      <form onSubmit={handleSubmit} className="medicine-form">
        <label htmlFor="name">Medicine Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="medicine-input"
        />
        <label htmlFor="manufacturer">Medicine Manufacturer:</label>
<input
  type="text"
  id="manufacturer"
  value={manufacturer}
  onChange={(e) => setManufacturer(e.target.value)}
  required
  className="medicine-input"
/>


        <label htmlFor="unit">Unit:</label>
        <input
          type="text"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          required
          className="medicine-input"
        />

        <label htmlFor="type">Medicine Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="medicine-input"
        />

<label htmlFor="expiryDate">Expiry Date:</label>
<input
  type="date"
  id="expiryDate"
  value={expiryDate}
  onChange={(e) => setExpiryDate(e.target.value)}
  required
  className="medicine-input"
/>



        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          placeholder="7"
          value={quantity}  
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="medicine-input"
        />

        <button type="submit" className="add-medicine-button">
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default Medicine;
