import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { checkFormInputIsEmpty } from "../../utils/helper";
import { getCookie } from "../../utils/cookie";
import Form from "../modules/Form";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "../modules/Input";
import { useRegister } from "../../hooks/mutations";

function RegisterPage() {
  const { register, handleSubmit, getValues } = useForm();
  const router = useRouter();
  const { mutate, isPending } = useRegister();
  const token = getCookie("token");

  const handleForm = (data) => {
    const { username, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password do not match!");
      return;
    }

    mutate(
      { username, password },
      {
        onSuccess: () => router.push("/login"),
      }
    );
  };

  const handlerButton = () => {
    const { username, password, confirmPassword } = getValues();

    checkFormInputIsEmpty({ username, password, confirmPassword });
  };

  useEffect(() => {
    if (token) router.push("/dashboard");
  }, [token, router]);

  return (
    <Form
      header="فرم ثبت نام"
      onSubmit={handleSubmit(handleForm)}
      isPending={isPending}
      textButton="ثبت نام"
      textLink="حساب کاربری دارید؟"
      pathLink="/login"
      register={register}
      onButton={handlerButton}
    >
      <Input
        register={register}
        name="confirmPassword"
        type="password"
        placeholder="تکرار رمز عبور"
      />
    </Form>
  );
}

export default RegisterPage;
