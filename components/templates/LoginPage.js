import React from "react";
import { useRouter } from "next/router";
import { setCookie } from "../../utils/cookie";
import { saveLocalStorage } from "../../utils/localStorage";
import { checkFormInputIsEmpty } from "../../utils/helper";
import Form from "../modules/Form";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/mutations";

function LoginPage() {
  const { mutate, isPending } = useLogin();
  const { register, handleSubmit, getValues } = useForm();
  const router = useRouter();

  const handleForm = (data) => {
    const { username } = data;

    mutate(data, {
      onSuccess: ({ data }) => {
        setCookie(data.token);
        saveLocalStorage("username", username);
        router.push("/dashboard");
      },
    });
  };

  const handleButton = () => {
    const { username, password } = getValues();
    checkFormInputIsEmpty({ username, password });
  };

  return (
    <Form
      header="فرم ورود"
      onSubmit={handleSubmit(handleForm)}
      isPending={isPending}
      textButton="ورود"
      textLink="ایجاد حساب کاربری"
      pathLink="/register"
      register={register}
      onButton={handleButton}
    />
  );
}

export default LoginPage;
