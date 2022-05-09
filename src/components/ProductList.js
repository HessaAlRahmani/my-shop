import products from "../products.js";
import ProductItem from "./ProductItem.js";

function ProductList() {
  const productList = products.map((product) => (
    <ProductItem name={product.name} price={product.price} img={product.img} />
  ));
  return <div className="listContainer">{productList}</div>;
}

export default ProductList;
