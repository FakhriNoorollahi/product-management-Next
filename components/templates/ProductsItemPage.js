import Header from "../modules/Header";
import styles from "./ProductsItemPage.module.css";

function ProductsItemPage({ product }) {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <ProductsItems product={product} />
    </div>
  );
}

export default ProductsItemPage;

function ProductsItems({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.information}>
        <h2>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>
          Price : $<span>{product.price}</span>
        </p>
      </div>
    </div>
  );
}
