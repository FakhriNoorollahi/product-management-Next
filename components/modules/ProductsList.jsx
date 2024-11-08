import React from "react";
import styles from "../templates/HomePage.module.css";
import Link from "next/link";
import { roundNumber, shortText } from "../../utils/helper";

function ProductsList({ products }) {
  return (
    <div className={styles.productsList}>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;

function ProductItem({ product }) {
  const { id, title, price, image } = product;
  return (
    <li className={styles.productItem}>
      <Link href={`/products/${id}`}>
        <div className={styles.producImg}>
          <img src={image} alt="image" />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.title}>{shortText(title)}</p>
          <p className={styles.price}>
            price: <span>${roundNumber(price)}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
