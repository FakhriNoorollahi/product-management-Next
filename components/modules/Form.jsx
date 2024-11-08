import React from "react";
import Link from "next/link";
import styles from "./Form.module.css";
import { inputForm } from "../../utils/constants";
import Input from "../modules/Input";
import Button from "../modules/Button";

function Form({
  header,
  register,
  isPending,
  onSubmit,
  textButton,
  textLink,
  pathLink,
  children,
  onButton,
}) {
  return (
    <div className={styles.formContainer}>
      <Link href="/products" className={styles.title}>
        بوت کمپ بوتو استارت
      </Link>
      <div className={styles.form}>
        <img src="/images/Union.png" alt="logo" />
        <p>{header}</p>
        <form onSubmit={onSubmit}>
          {inputForm.map((item) => (
            <Input
              key={item.id}
              register={register}
              name={item.name}
              type={item.type}
              placeholder={item.placeHolder}
            />
          ))}
          {children}
          <Button
            type="submit"
            text={textButton}
            isPending={isPending}
            onButton={onButton}
          />
          <Link href={pathLink}>{textLink}</Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
