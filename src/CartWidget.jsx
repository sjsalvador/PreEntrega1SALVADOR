
import { ShoppingCartIcon } from '@heroicons/react/24/solid'; 

function CartWidget () {
  return (
    <div className="flex items-center">
      <ShoppingCartIcon className="h-6 w-6 mr-2"/> 
      <span>1</span>
    </div>
  )
}

export default CartWidget;

