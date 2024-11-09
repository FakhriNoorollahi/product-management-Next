import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { BiMessageSquareEdit } from "react-icons/bi";
import AddEditeModal from "./AddEditeModal";
import styles from "../../templates/Products.module.css";
import { useEditeProduct } from "../../../hooks/mutations";
import { getCookie } from "../../../utils/cookie";
import { checkToken } from "../../../utils/helper";

function ProductEditeBtn({ id, product }) {
  const [editeModalOpen, setEditeModalOpen] = useState(false);
  const { mutate } = useEditeProduct();
  const { handleSubmit, register, reset, getValues, setValue } = useForm();
  const token = getCookie("token");
  const router = useRouter();
  const {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
  } = product;

  const editeProducts = (data) => {
    const { name, quantity, price } = getValues();

    if (
      productName === data.name &&
      productQuantity === data.quantity &&
      productPrice === data.price &&
      token
    ) {
      toast("تغییری در اطلاعات ایجاد نکردید!", { icon: "❗" });
      setEditeModalOpen(false);
      return;
    }

    if (!name || !price || !quantity) {
      toast.error("فیلدهای خالی را پر کنید");
      return;
    }

    if (getValues)
      mutate(
        { id, data },
        {
          onSuccess: () => {
            reset();
            setEditeModalOpen(false);
          },
          onError: () => setEditeModalOpen(false),
        }
      );
  };

  const onClose = () => {
    setValue("name", productName);
    setValue("price", productPrice);
    setValue("quantity", productQuantity);
    setEditeModalOpen(false);
  };

  return (
    <>
      <button
        className={styles.productEditeModalBtn}
        onClick={() =>
          checkToken(
            () => setEditeModalOpen(true),
            () => router.push("/login")
          )
        }
      >
        <BiMessageSquareEdit />
      </button>
      {editeModalOpen && (
        <AddEditeModal
          title="ویرایش اطلاعات"
          onClose={onClose}
          product={product}
          handleSubmit={handleSubmit}
          register={register}
          onHandle={editeProducts}
        />
      )}
    </>
  );
}

export default ProductEditeBtn;
