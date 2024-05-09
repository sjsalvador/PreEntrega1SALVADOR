import { useState } from 'react';
import { useCart } from './CartProvider.jsx';
import { db } from '../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function Cart() {
  const { cart, removeItem, clearCart, getTotal } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const handlePurchase = async () => {
    if (!name || !phone || !email || !creditCard) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      const newOrder = {
        buyer: { name, phone, email, creditCard },
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
        total: getTotal(),
        date: new Date(),
      };

      const docRef = await addDoc(collection(db, 'orders'), newOrder);
      toast.success(`Your purchase ID: ${docRef.id} has been successfully completed`);
      
      // Limpia los campos del comprador y el carrito
      setName('');
      setPhone('');
      setEmail('');
      setCreditCard('');
      clearCart();
    } catch (error) {
      console.error('Error confirming purchase:', error);
    }
  };

  const formattedTotal = getTotal().toFixed(2);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="bg-white shadow-lg p-4 mb-4 w-full max-w-md rounded-lg flex flex-col items-center text-center">
          <p>ID: {item.id}</p>
          <p>Description: {item.title}</p>
          <p>Price: {item.price}$</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg">Remove</button>
        </div>
      ))}
      <p className="text-2xl font-bold mt-6 mb-4">Total: {formattedTotal}$</p>

      <div className="bg-white shadow-lg p-6 w-full max-w-md rounded-lg text-center mb-6">
        <h2 className="text-xl font-semibold mb-4">Checkout Information</h2>
        <label className="block mb-1">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
        <label className="block mb-1">Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
        <label className="block mb-1">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
        <label className="block mb-1">Credit Card Number:</label>
        <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
      </div>

      <button onClick={handlePurchase} className="bg-green-500 text-white px-6 py-3 rounded-lg">Confirm Purchase</button>
    </div>
  );
}

export default Cart;
