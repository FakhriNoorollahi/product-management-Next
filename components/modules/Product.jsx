import React from "react";
import ProductInfoBtn from "./ProductInfoBtn";
import ProductEditeBtn from "./ProductEditeBtn";
import ProductDeleteBtn from "./ProductDeleteBtn";
import styles from "../templates/Products.module.css";

function Product({ product, multipleDelOpen, register }) {
  const { id, name, quantity, price } = product;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} تومان</td>
      <td>{id}</td>
      <td>
        <div className={styles.columnBtns}>
          <ProductInfoBtn id={id} />
          <ProductEditeBtn id={id} product={product} />
          {multipleDelOpen ? (
            <div className={styles.checkbox}>
              <input type="checkbox" {...register("ids")} value={id} />
            </div>
          ) : (
            <ProductDeleteBtn id={id} />
          )}
        </div>
      </td>
    </tr>
  );
}

export default Product;
