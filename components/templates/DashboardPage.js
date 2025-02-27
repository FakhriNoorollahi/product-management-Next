import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "./Products.module.css";
import ProductSearch from "../modules/Dashboard/ProductSearch";
import AddProduct from "../modules/Dashboard/AddProduct";
import ProductsTable from "../modules/Dashboard/ProductsTable";
import Pagination from "../modules/Dashboard/Pagination";
import { useProducts } from "../../hooks/queries";
import { getCookie } from "../../utils/cookie";
import { useDeleteMultiProduct } from "../../hooks/mutations";

function DashboardPage() {
  const router = useRouter();
  const token = getCookie();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const { data, isFetching, isError } = useProducts(page, search, pageSearch);

  const [multipleDelOpen, setMultipleDelOpen] = useState(false);
  const { register, getValues, reset } = useForm();

  const handlerMultiDelButton = () => {
    if (!multipleDelOpen) {
      setMultipleDelOpen(true);
      return;
    }
    handleButtonClick();
  };

  const { mutate } = useDeleteMultiProduct();
  const handleButtonClick = () => {
    const data = getValues();

    if (data.ids === false) {
      setMultipleDelOpen(false);
      return;
    }

    mutate(data);
    setMultipleDelOpen(false);
    reset();
  };

  useEffect(() => {
    if (!search) {
      router.push({ pathname: "/dashboard", query: { page, limit: 10 } });
      return;
    }
    router.push({
      pathname: "/dashboard",
      query: { page: pageSearch, limit: 10, name: search },
    });
  }, [page, search, pageSearch]);

  useEffect(() => {
    setPageSearch(1);
  }, [search]);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
  }, []);

  return (
    <div className={styles.container}>
      <ProductSearch search={search} setSearch={setSearch} />
      <AddProduct
        multiDel={multipleDelOpen}
        onMultiDel={handlerMultiDelButton}
      />
      <ProductsTable
        isPending={isFetching}
        products={data?.data.data}
        multipleDelOpen={multipleDelOpen}
        register={register}
        error={isError}
      />
      <Pagination
        page={search ? pageSearch : page}
        setPage={search ? setPageSearch : setPage}
        totalPage={data?.data.totalPages}
      />
    </div>
  );
}

export default DashboardPage;
