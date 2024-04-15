import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();  

  useEffect(() => {
    const fetchItems = async () => {
      const categoryQuery = id ? `category/${id}` : '';
      const response = await fetch(`https://fakestoreapi.com/products/${categoryQuery}`);
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, [id]);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map(item => (
        <div key={item.id} className="card bg-white p-4 shadow rounded flex flex-col items-center">
          <img src={item.image} alt={item.title} id="cy-product" className="h-48 w-full object-contain"/> 
          <div className="p-2 text-center">
            <h5 className="text-lg font-bold">{item.title}</h5>
            <p className="text-2xl font-semibold my-2">{item.price} $</p> 
            <Link to={`/item/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">SEE MORE</Link>  
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;







