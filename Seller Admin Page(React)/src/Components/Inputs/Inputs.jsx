/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = (props) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const productIdChange = (e) => {
    setProductId(e.target.value);
  };
  const productNameChange = (e) => {
    setProductName(e.target.value);
  };
  const productPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const productSubmitHandeler = (e) => {
    e.preventDefault();
    const submitedProduct = {
      productName: productName,
      productPrice: productPrice,
      productId: productId,
    };

    localStorage.setItem(productId, JSON.stringify(submitedProduct));
    props.submitFrom(submitedProduct);
    setProductId("");
    setProductName("");
    setProductPrice("");
  };
  return (
    <>
      <form onSubmit={productSubmitHandeler}>
        <label htmlFor="product-id">Product ID: </label>
        <input type="number" value={productId} onChange={productIdChange} />
        <label htmlFor="product-id">Product Name</label>
        <input type="text" value={productName} onChange={productNameChange} />
        <label htmlFor="product-id">Product Price</label>
        <input
          type="number"
          value={productPrice}
          onChange={productPriceChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default Input;
