import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <Link to="/cart" className="flex items-center">
      <ShoppingCartIcon className="h-6 w-6 mr-2" />
      <span>Cart</span>
    </Link>
  );
}

export default CartWidget;


