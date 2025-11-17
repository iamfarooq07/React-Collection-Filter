import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center w-full px-20 shadow-xl bg-gray-200">
      <div>
        <img
          src="https://media.istockphoto.com/id/1268467641/photo/small-portion-salad.jpg?s=612x612&w=0&k=20&c=9Aqf25o5eeW9qbL8Em40alPm6_KGf5-8Zat-aeEZZw4="
          alt=""
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="flex gap-8 text-xl">
        <Link to="/" className="text-gray-500 hover:text-blue-500">
          Home
        </Link>
        <Link to="/products" className="text-gray-500 hover:text-blue-500">
          Products
        </Link>
        <Link to="/cart" className="text-gray-500 hover:text-blue-500">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
