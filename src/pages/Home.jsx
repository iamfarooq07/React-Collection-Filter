import React from "react";

function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="flex justify-center items-center">
        <img
          src="https://admin.broadwaypizza.com.pk/images/banner/combo%20boxes.jpg"
          alt="connection page"
          className="w-[90%] h-[30%] text-center mt-2 rounded-2xl"
        />
      </div>
      <hr className="border-2 border-white ml-10 mr-10 mt-10" />

      <div className="border-white border-2 w-[30%] h-[30%] m-10 rounded-2xl p-4">
        <img
          src="https://potatox.pk/wp-content/uploads/2025/06/pizza-deal-4.png"
          alt="Product image"
          className="rounded-2xl"
        />
        <h1 className="mt-2 text-3xl font-bold">Pizza-Deal-4</h1>
        <p className="mt-2 text-gray-400">
          Hot, cheesy, and loaded with your favorite toppings – every slice is a
          slice of happiness!
        </p>
      </div>
    </div>
  );
}

export default Home;
