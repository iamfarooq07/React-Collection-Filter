import CenterImage from "./CenterImage";
import MainImage from "./MainImage";
import { products } from "../data/products";
import Maincard from "./Maincard";
function Home() {
  return (
    <div className="w-full h-full bg-black">
      <MainImage />
      <hr className="border-2 border-white ml-10 mr-10 mt-10" />
      <h1 className="m-10 text-center text-5xl font-extrabold">Food Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {products.map((val, i) => (
          // console.log(val)

          <Maincard key={i} product={val} />
        ))}
      </div>
      <CenterImage />
    </div>
  );
}

export default Home;
