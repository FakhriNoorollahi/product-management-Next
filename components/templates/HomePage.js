import Header from "../modules/Header";
import ProductsList from "../modules/ProductsList";
import styles from "./HomePage.module.css";

function HomePage({ data }) {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <ProductsList products={data} />
    </div>
  );
}

export default HomePage;
