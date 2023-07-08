import { useEffect, useState } from "react";
import Input from "./Inputs";
import ProductList from "../ProductList/ProductList";

const InputContainer = () => {
  const [addItems, setAddItems] = useState([]);

  // fetch data after every refresh
  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage);
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      newArray.push(JSON.parse(value));
    }
    setAddItems(newArray);
  }, []);

  // updating the total price
  let total = 0;
  addItems.forEach((values) => {
    total += Number(values.productPrice);
  });

  // when user add something
  const submitFrom = (newItmes) => {
    setAddItems((prevItems) => {
      return [...prevItems, newItmes];
    });
  };

  // when user delete something
  const deleteProduct = (id) => {
    setAddItems((prevItems) => {
      return prevItems.filter((items) => {
        return items.productId !== id;
      });
    });
    localStorage.removeItem(id);
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
      <h1> Total Value of All Product {total}</h1>
    </>
  );
};

export default InputContainer;
