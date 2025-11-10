import { products } from "./products";

export const getVisibleProducts = (categories, ratings, initPriceRange) => {
  let filteredProducts = products;

  if (categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      categories.includes(product.category)
    );
  }
  if (ratings.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      ratings.includes(product.rating)
    );
  }
  if (initPriceRange && initPriceRange.isApplied) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= initPriceRange.min &&
        product.price <= initPriceRange.max
    );
  }

  return filteredProducts;
};
