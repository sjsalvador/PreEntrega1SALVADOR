import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6 shadow-lg rounded-lg text-center">
        <img src={item.image} alt={item.title} className="h-48 w-auto mx-auto"/>
        <h1 className="text-4xl font-bold mt-4">{item.title}</h1>
        <p className="text-4xl mt-2">{item.price} $</p>
        <p className="text-xl mt-4 mb-6">{item.description}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;

