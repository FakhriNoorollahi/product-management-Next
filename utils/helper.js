import toast from "react-hot-toast";
import { getCookie } from "./cookie";

export const createPaginationArray = (totalPage) => {
  const arr = [];
  for (let i = 1; i <= totalPage; i++) {
    arr.push(i);
  }

  return arr;
};

export const checkFormInputIsEmpty = ({
  username,
  password,
  confirmPassword = true,
}) => {
  if (username && password && confirmPassword) {
    return;
  }

  toast.error("فیلدهای خالی را پر کنید");
  return;
};

export const checkToken = (handlerCb, routerCb) => {
  const token = getCookie();

  if (token) {
    handlerCb();
    return;
  }
  toast.error("ابتدا وارد حساب کاربری خود شوید");
  routerCb();
};

export const shortText = (txt) => {
  return txt.split(" ").splice(0, 3);
};

export const roundNumber = (price) => {
  return price.toFixed(2);
};
