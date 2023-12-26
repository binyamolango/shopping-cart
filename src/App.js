import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
