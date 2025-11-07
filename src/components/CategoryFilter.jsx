import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category";

function CategoryFilter() {
  return (
    <div className="h-42 p-5 space-y-2 border border-gray-200 shadow-lg rounded-md">
      <h3>Category Filter</h3>
      {categoryTitle.map((category) => (
        <Checkbox text={category} />
      ))}
    </div>
  );
}

export default CategoryFilter;
