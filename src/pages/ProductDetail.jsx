import { products } from "../data/products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  let [count, setCount] = useState(1);

  const product = products.find((product) => product.id === +id);
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ));
  };

  return (
    <div className="w-full min-h-screen py-10 px-6 flex flex-col lg:flex-row items-center lg:items-start bg-black text-white gap-10">
      {/* Left Image */}
      <div className="lg:w-[40%] w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-2xl shadow-xl w-full h-[50vh] max-w-[450px] object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-[50%] w-full bg-white shadow-2xl rounded-2xl text-black p-5 h-auto">
        <h1 className="text-4xl font-extrabold mb-4">{product.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-gray-600">({product.rating})</span>
        </div>
        <p className="text-lg text-gray-900 leading-relaxed">
          {product.description}
        </p>

        <div className="my-5 text-2xl font-bold">Select Drink:</div>
        <select className="w-full py-2 px-2 border-2 border-black rounded">
          <option value="">Coca Cola</option>
          <option value="">Pepsi</option>
          <option value="">String</option>
          <option value="">Sprite</option>
          <option value="">Water</option>
        </select>

        {/* Quantity */}
        <div className="my-5 text-2xl font-bold">Quantity:</div>
        <div className="flex items-center gap-4 mt-6">
          <button
            className="border-2 border-gray-900 text-gray-900 px-5 py-2 rounded-xl text-xl hover:text-black
             hover:border-black transition"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -
          </button>

          <h2 className="text-xl px-6 py-2 border-2 border-white rounded-xl">
            {count}
          </h2>

          <button
            className="border-2 border-gray-900 text-gray-900 px-5 py-2 rounded-xl text-xl hover:text-black
             hover:border-black transition"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <hr className="my-4 text-gray-500" />
        <div className="flex justify-between items-center px-2">
          <h1 className="text-xl font-bold">Product:</h1>
          <h1>${product.price}</h1>
        </div>
        <div className="flex justify-between items-center px-2 mt-4">
          <h1 className="text-xl font-bold">Drink:</h1>
          <h1>${product.price}</h1>
        </div>
        <hr className="my-4 text-gray-500" />
        <div className="flex justify-between items-center px-2 mt-4">
          <h1 className="text-4xl font-bold">Total:</h1>
          <h1 className="text-4xl font-bold text-green-800">
            ${product.price}
          </h1>
        </div>

        <Link to={"/Card"}>
          <button className="mt-8 w-full flex justify-center items-center gap-3 bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-700 transition shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Add to Card
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
