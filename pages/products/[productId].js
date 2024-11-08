import React from "react";
import ProductsItemPage from "../../components/templates/ProductsItemPage";

function ProductsItem({ data }) {
  return <ProductsItemPage product={data} />;
}

export default ProductsItem;

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: { data },
  };
}
