import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "../templates/Products.module.css";
import { getDataLocalStorage } from "../../utils/localStorage";
import { checkToken } from "../../utils/helper";
import { useRouter } from "next/router";
import { CgLogOut } from "react-icons/cg";
import { removeCooki } from "../../utils/cookie";

function ProductSearch({ search, setSearch }) {
  const [username, setUsername] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = getDataLocalStorage("username");
    setUsername(user);
  }, []);

  return (
    <div className={styles.searchContainer}>
      <CiSearch />
      <input
        type="text"
        placeholder="جستجو کالا"
        value={search}
        onChange={(e) =>
          checkToken(
            () => setSearch(e.target.value),
            () => router.push("/login")
          )
        }
      />
      <div className={styles.informatin}>
        <img src="/images/profile.png" alt="profile" />
        <div>
          <p>{username}</p>
          <div className={styles.logout}>
            <p>مدیر</p>
            <button
              onClick={() => {
                removeCooki();
                router.push("/products");
              }}
            >
              <CgLogOut />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
