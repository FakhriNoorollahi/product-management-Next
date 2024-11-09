import styles from "../templates/ProductsItemPage.module.css";

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

export default ProductsItems;
