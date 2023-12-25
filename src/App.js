import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Header from "./Header";
import Product from "./Product";

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
