import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import { useRouter } from "next/router";
import { FaRegCircleXmark } from "react-icons/fa6";
import Loader from "../Loader";
import Modal from "../Modal";
import styles from "../../templates/Products.module.css";
import { useProductInfo } from "../../../hooks/queries";
import { checkToken } from "../../../utils/helper";

function ProductInfoBtn({ id }) {
  const [showProdoctModal, setShowProductModal] = useState(false);
  const onClose = () => setShowProductModal(false);
  const router = useRouter();

  return (
    <>
      <button
        className={styles.productInfoModalBtn}
        onClick={() =>
          checkToken(
            () => setShowProductModal(true),
            () => router.push("/login")
          )
        }
      >
        <HiEye />
      </button>
      {showProdoctModal && <ProductInformation id={id} onClose={onClose} />}
    </>
  );
}

export default ProductInfoBtn;

function ProductInformation({ id, onClose }) {
  const { data, isPending } = useProductInfo(id);

  return (
    <Modal>
      <div className={styles.productInfoModal}>
        <div className={styles.headerModal}>
          <button className={styles.headerModalBtn} onClick={onClose}>
            <FaRegCircleXmark />
          </button>
        </div>
        {isPending ? (
          <Loader />
        ) : (
          <div className={styles.infoContainer}>
            <h1>{data.data.name}</h1>
            <div className={styles.infoDiv}>
              <span>قیمت</span>
              <span>{data.data.price}</span>
            </div>
            <div className={styles.infoDiv}>
              <span>موجودی</span>
              <span>{data.data.quantity}</span>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
