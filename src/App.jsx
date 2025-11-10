import { getVisibleProducts } from "./data/product-filters";
import { useState } from "react";
import { priceRange } from "./data/products";

import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";
import Ratingfilter from "./components/Ratingfilter";
import Pricefilter from "./components/Pricefilter";

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

  return (
    <div>
      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
        <div className="col-span-2">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />
          <div className="shadow-2xl p-8 rounded border-2 mt-2 border-white flex justify-center items-center gap-2">
            <p>{initPriceRange.min}</p>
            <input
              type="range"
              className="w-40 h-10 text-lg border border-gray-400 rounded"
              value={initPriceRange.max}
              min={priceRange.min}
              max={priceRange.max}
              onChange={(e) => {
                setInitPriceRange({
                  ...initPriceRange,
                  max: Number(e.target.value),
                  isApplied: true,
                });
              }}
            />
            <p>{initPriceRange.max}</p>
          </div>

          {/* <Pricefilter /> */}
          <Ratingfilter
            selectedRatings={selectedRatings}
            onChangeRating={onChangeRatingHandler}
          />
        </div>

        <div className="col-span-10">
          <Products products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
