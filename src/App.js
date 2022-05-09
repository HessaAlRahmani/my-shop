import "./App.css";
import products from "./products.js";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
//maybe?

function App() {
  return (
    <div className="App">
      <Home />
      <ProductList />
    </div>
  );
}

export default App;
