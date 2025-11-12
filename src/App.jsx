import { getVisibleProducts } from "./data/product-filters";
import { useState } from "react";
import { priceRange } from "./data/products";

import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";
import Ratingfilter from "./components/Ratingfilter";
import Pricefilter from "./components/Pricefilter";
import SortingFilter from "./components/SortingFilter";

function App() {
  // Rating Filter Logic
  const [selectedRatings, setSelectedRatings] = useState([]);

  const onChangeRatingHandler = (rating, isChecked) => {
    if (isChecked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    }
  };

  // Category Filter Logic
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  // Price Filter Logic
  const initPriceFilter = {
    min: priceRange.min,
    max: priceRange.max,
    isApplied: false,
  };
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);

  const filteredProducts = getVisibleProducts(
    selectedCategories,
    selectedRatings,
    initPriceRange
  );

  // Product Sorting Filter Logic
  const [selectedSort, setSelectedSort] = useState("");

  const sortProducts = (sortValue) => {
    setSelectedSort(sortValue);
  };

  const sortedProducts = [...filteredProducts];

  if (selectedSort === "ratingHightToLow") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (selectedSort === "ratingLowToHight") {
    sortedProducts.sort((a, b) => a.rating - b.rating);
  } else if (selectedSort === "PriceHightToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "PriceLowToHight") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
        <div className="col-span-2">
          <button class="relative mb-2 p-2 w-full border-2 overflow-hidden rounded-xl bg-black text-white cursor-pointer group">
            <span class="relative z-10">Themes</span>
            <span
              class="absolute top-0 left-0 w-full h-full rounded-xl 
             hover:border-none bg-gradient-to-r from-gray-400 to-gray-800 scale-x-0 origin-left transition-transform duration-[100ms] group-hover:scale-x-100"
            ></span>
          </button>
          <hr className="my-2" />
          {/* Category Filter */}
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />

          {/* Price Filter */}
          <Pricefilter
            init={initPriceRange}
            price={priceRange}
            setfun={setInitPriceRange}
          />
          {/* Rating Filter */}
          <Ratingfilter
            selectedRatings={selectedRatings}
            onChangeRating={onChangeRatingHandler}
          />
          <button class="relative mb-2 p-2 w-full border-2 overflow-hidden rounded-xl bg-black text-white cursor-pointer group">
            <span class="relative z-10">Clear All</span>
            <span
              class="absolute top-0 left-0 w-full h-full rounded-xl 
             hover:border-none bg-gradient-to-r from-gray-400 to-gray-800 scale-x-0 origin-left transition-transform duration-[100ms] group-hover:scale-x-100"
            ></span>
          </button>

          {/* <button className="border-2 px-2 py-2 rounded-xl w-full mb-2">
            Clear All
          </button> */}
          <SortingFilter click={sortProducts} />
        </div>

        <div className="col-span-10">
          <div className="text-end">
            <input
              type="search"
              placeholder="Search"
              className="w-[25%] bg-gray-800 p-2 rounded-xl"
            />
          </div>
          <hr className="my-2" />
          <Products products={sortedProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
