import HomePage from "../../components/templates/HomePage";

export default function Home({ data }) {
  return <HomePage data={data} />;
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { data },
  };
}
