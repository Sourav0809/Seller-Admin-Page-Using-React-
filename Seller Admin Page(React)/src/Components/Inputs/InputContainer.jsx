import { useEffect, useState } from "react";
import Input from "./Inputs";
import ProductList from "../ProductList/ProductList";

const InputContainer = () => {
  const [addItems, setAddItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const submitFrom = (newItmes) => {
    setAddItems((prevItems) => {
      return [...prevItems, newItmes];
    });
    setTotalPrice((prevPrice) => {
      return parseInt(prevPrice) + parseInt(newItmes.productPrice);
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(addItems));
  }, [addItems]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData.length !== 0) {
      setAddItems((oldItem) => {
        return [...oldItem, savedData];
      });
    }
  }, []);

  const deleteProduct = (id, price) => {
    setTotalPrice((prevPrice) => {
      return parseInt(prevPrice) - parseInt(price);
    });
    setAddItems((prevItems) => {
      return prevItems.filter((items) => {
        return items.productId !== id;
      });
    });
  };
  return (
    <>
      <Input submitFrom={submitFrom} />
      {addItems.map((items) => {
        return (
          <ProductList
            key={items.productId}
            id={items.productId}
            name={items.productName}
            price={items.productPrice}
            deleteProduct={deleteProduct}
          />
        );
      })}
      <h1> Total Value of All Product {totalPrice}</h1>
    </>
  );
};

export default InputContainer;
