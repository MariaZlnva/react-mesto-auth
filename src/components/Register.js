import React from "react";
import AuthForm from "./AuthForm";

function Register({isSuccess, onSubmit}) {
  return (
    <AuthForm title="Регистрация" titleBtn="Зарегистрироваться" isSuccess = {isSuccess} onSubmit={onSubmit}/> 
  );
}

export default Register;
