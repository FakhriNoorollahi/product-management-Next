import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiGrid41 } from "react-icons/ci";
import styles from "../templates/Products.module.css";
import Button from "./Button";
import AddEditeModal from "./AddEditeModal";
import { useAddNewProduct } from "../../hooks/mutations";
import { checkToken } from "../../utils/helper";
import { useRouter } from "next/router";

function AddProduct({ onMultiDel, multiDel }) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { handleSubmit, register, reset, getValues } = useForm();
  const { mutate } = useAddNewProduct();
  const router = useRouter();

  const addNewProduct = (data) => {
    const { name, price, quantity } = getValues();

    if (!name || !price || !quantity) {
      toast.error("فیلدهای خالی را پر کنید");
      return;
    }

    mutate(data, {
      onSuccess: () => setAddModalOpen(false),
      onError: () => setAddModalOpen(false),
    });
    reset();
  };

  return (
    <div className={styles.addProductContainer}>
      <div>
        <CiGrid41 />
        <p>مدیریت کالا</p>
      </div>
      <div>
        <Button
          text={multiDel ? "حذف کنید" : "حذف گروهی"}
          onButton={() =>
            checkToken(
              () => onMultiDel(),
              () => router.push("/login")
            )
          }
          nameOfClass={multiDel && "delete"}
        />
        <Button
          text="افزودن محصول"
          onButton={() =>
            checkToken(
              () => setAddModalOpen(true),
              () => router.push("/login")
            )
          }
        />
        {addModalOpen && (
          <AddEditeModal
            title="ایجاد محصول جدید"
            onClose={() => setAddModalOpen(false)}
            handleSubmit={handleSubmit}
            register={register}
            onHandle={addNewProduct}
          />
        )}
      </div>
    </div>
  );
}

export default AddProduct;
