import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import styles from "../templates/Products.module.css";
import { useDeleteProduct } from "../../hooks/mutations";
import Modal from "../modules/Modal";
import { checkToken } from "../../utils/helper";
import { useRouter } from "next/router";

function ProductDeleteBtn({ id }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        className={styles.productDelModalBtn}
        onClick={() =>
          checkToken(
            () => setDeleteModalOpen(true),
            () => router.push("/login")
          )
        }
      >
        <HiTrash />
      </button>
      {deleteModalOpen && (
        <DeleteModal id={id} onClose={() => setDeleteModalOpen(false)} />
      )}
    </>
  );
}

export default ProductDeleteBtn;

function DeleteModal({ id, onClose }) {
  const { mutate } = useDeleteProduct();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => onClose(),
      onError: () => onClose(),
    });
  };

  return (
    <Modal>
      <div className={styles.modal}>
        <img src="/images/Close.png" alt="close-image" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.modalBtn}>
          <button onClick={handleDelete}>حذف</button>
          <button onClick={onClose}>لغو</button>
        </div>
      </div>
    </Modal>
  );
}
