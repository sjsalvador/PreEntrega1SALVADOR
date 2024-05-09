import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from './CartProvider.jsx';
import { toast } from 'react-toastify';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No se encontró el documento');
          setItem(null);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setItem(null);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => Math.max(0, q - 1));

  const addToCart = () => {
    if (quantity > 0) {
      addItem(item, quantity);
      setQuantity(0);
      toast.success('Item added to the cart successfully');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6 shadow-lg rounded-lg text-center">
        <img src={item.image} alt={item.title} className="h-48 w-auto mx-auto"/>
        <h1 className="text-4xl font-bold mt-4">{item.title}</h1>
        <p className="text-4xl mt-2">{item.price} $</p>
        <p className="text-xl mt-4 mb-6">{item.description}</p>
        <div className="flex items-center justify-center mb-4">
          <button onClick={decreaseQuantity} className="bg-gray-300 px-4 py-2 text-2xl mx-2 rounded-lg">-</button>
          <span className="mx-4 text-2xl">{quantity}</span>
          <button onClick={increaseQuantity} className="bg-gray-300 px-4 py-2 text-2xl mx-2 rounded-lg">+</button>
        </div>
        <button onClick={addToCart} className="bg-green-500 text-white px-6 py-3 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
