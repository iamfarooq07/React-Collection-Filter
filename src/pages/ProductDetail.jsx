import { products } from "../data/products";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  console.log(id);

  const product = products.find((product) => product.id === +id);
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt="Product image" />
      <div className="flex p-4 space-x-1.5">
        <button className="border-2 border-green-500 px-2 cursor-pointer">
          -
        </button>
        <button className="border-2 border-green-500 px-2 cursor-pointer">
          +
        </button>
      </div>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
