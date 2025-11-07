import ProductCard from "./ProductCard";

function Products({ products = [] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Products;
