import { products } from "../data/products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  let [count, setCount] = useState(1);
  // console.log(id);
  // console.log(count);

  const product = products.find((product) => product.id === +id);
  console.log(product);

  return (
    <div className="flex">
      <div>
        <img
          src={product.image}
          alt="Product image"
          className="m-5 w-[40vw] rounded-2xl"
        />
      </div>
      <div className="mx-10 my-5">
        <h1 className="text-4xl font-bold mb-8">{product.title}</h1>
        <p className="text-xl text-gray-400">{product.description}</p>
        <div className="flex py-4 gap-2">
          <button
            className="border-2 border-gray-400 text-gray-400 px-5 py-2 rounded-xl text-xl cursor-pointer hover:text-white hover:border-white"
            onClick={() => setCount(count - 1)}
            disabled={count === 0 ? true : false}
          >
            -
          </button>
          <h2 className="text-xl px-5 py-2 border-2 border-white rounded-xl">
            {count}
          </h2>
          <button
            className="border-2 border-gray-400 text-gray-400 px-5 py-2 rounded-xl text-xl cursor-pointer hover:text-white hover:border-white"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <Link to={"/Card"}>
          <button className="mt-10 flex gap-2 border px-6 py-3 rounded-lg cursor-pointer hover:text-gray-400">
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

            <span> Add to cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
