import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";

import { products } from "./data/products";

function App() {


  return (
    <div>
      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
        <div className="col-span-2">
          <CategoryFilter />
        </div>
        <div className="col-span-10">
          <Products products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
