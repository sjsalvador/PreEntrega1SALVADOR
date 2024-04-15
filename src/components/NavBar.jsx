import CartWidget from "../CartWidget.jsx";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/"><img src="./logo2.png" alt="Logo" className="h-16 w-auto"/></Link>
          <span className="text-xl font-semibold ml-2">SEBAS E-COMMERCE</span>  
        </div>
        <div className="flex items-center text-lg">  
          <Link to="/" className="mx-3 font-medium hover:text-gray-300">ALL PRODUCTS</Link>  
          <Link to="/category/electronics" className="mx-3 font-medium hover:text-gray-300">ELECTRONICS</Link>
          <Link to="/category/jewelery" className="mx-3 font-medium hover:text-gray-300">JEWELERY</Link>
          <CartWidget/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


