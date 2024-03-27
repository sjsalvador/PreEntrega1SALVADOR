import CartWidget from "../CartWidget.jsx";
function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./logo2.png" alt="Logo" className="h-16 w-auto"/>
          <span>MY E-COMMERCE</span>
        </div>
       
        <div className="flex items-center">
          <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">PRODUCTOS</a>
          <a href="/about" className="px-3 py-2 rounded hover:bg-gray-700">NOSOTROS</a>
          <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-700">CONTACTO</a>
          <CartWidget/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
