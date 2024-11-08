import { useRouter } from "next/router";
import { getCookie } from "../../utils/cookie";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

function Header() {
  const [isToken, setIsToken] = useState(false);
  const router = useRouter();
  const token = getCookie();

  useEffect(() => {
    token ? setIsToken(true) : setIsToken(false);
  }, [isToken, token]);

  const handlerButton = () => {
    isToken ? router.push("/dashboard") : router.push("/login");
  };

  return (
    <div className="headerContainer">
      <Link href="/products">
        <h2>Products List</h2>
      </Link>
      <button className="login" onClick={handlerButton}>
        <span>{isToken ? "داشبورد" : "ورود"}</span>
        {isToken ? <FaUser /> : <FiLogIn />}
      </button>
    </div>
  );
}

export default Header;
