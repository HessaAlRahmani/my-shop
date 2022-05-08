import "./App.css";
import products from "./products.js";
//maybe?
function Products(props) {
  return (
    <div className="List">
      <img src={props.img} alt="a book cover" width="200" height="250"></img>
      <h5>{props.name}</h5>
      <h5>{props.price} KD</h5>
    </div>
  );
}
function App() {
  const productList = products.map((product) => (
    <Products name={product.name} price={product.price} img={product.img} />
  ));
  return (
    <div className="App">
      <h1>Corner Bookshop</h1>
      <h3>A bookworm's heaven</h3>
      <img
        src="https://citymonitor.ai/wp-content/uploads/sites/3/2021/02/sergiu-valena-698563-unsplash-658x370.jpg"
        alt="A Cozy Bookstore"
        width="100%"
        height="650"
      ></img>
      <div className="listContainer">{productList}</div>
    </div>
  );
}

export default App;
