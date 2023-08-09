"use client";
import React, { useState } from "react";
import Form from "./Form";

type pageProps = {};

const Auth: React.FC<pageProps> = () => {
  return (
    <div className="flex justify-center items-center gap-8">
      <Form label="login" />
      <Form label="register" />
    </div>
  );
};
export default Auth;
