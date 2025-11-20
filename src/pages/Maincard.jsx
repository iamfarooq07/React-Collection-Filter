import React from "react";

function Maincard({ name, price, image, description }) {
  console.log();

  return (
    <div>
      <div className="border-gray-400 border-2 w-70 m-5 rounded p-1 shadow-lg">
        <img
          src={image}
          alt="Product image"
          className="w-full h-48 object-cover"
        />

        <h1 className="mt-4 text-3xl font-bold">{name}</h1>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
        <div className="flex justify-between items-center my-4 mx-2">
          <h3 className="text-2xl text-gray-200">Rs {price}</h3>
          <button className="flex gap-2 border px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:text-black">
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
        </div>
      </div>
    </div>
  );
}

export default Maincard;
