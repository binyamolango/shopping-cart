import Cart from "./Cart";
import Header from "./Header";
import Product from "./Product";

function App() {
  return (
    <div className="App">
        <Header />
      <div className="content">
        <Product />
        <Cart />
      </div>
    </div>
  );
}

export default App;
