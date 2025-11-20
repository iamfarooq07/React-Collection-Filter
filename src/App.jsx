import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Colections from "./pages/Colections";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import ProductCard from "./pages/ProductCard";

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Colections />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/Card" element={<ProductCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
