import styles from "./ProductsItemPage.module.css";
import Header from "../modules/Header";
import ProductsItems from "../modules/ProductsItems";

function ProductsItemPage({ product }) {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <ProductsItems product={product} />
    </div>
  );
}

export default ProductsItemPage;
