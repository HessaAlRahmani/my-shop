function ProductItem(props) {
  const key = props.id;
  return (
    <div className="List">
      <img src={props.img} alt="a book cover" width="200" height="250"></img>
      <h5>{props.name}</h5>
      <h5>{props.price} KD</h5>
    </div>
  );
}

export default ProductItem;
