/* eslint-disable react/prop-types */
import "./ProductList.css";
const ProductList = (props) => {
  return (
    <div className="product_list_container">
      <h3>{props.id} --</h3>
      <h3>{props.name}--</h3>
      <h3>{props.price}</h3>
      <button
        onClick={() => {
          props.deleteProduct(props.id, props.price);
        }}
        className="product-remove-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductList;
