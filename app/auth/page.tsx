"use client";
import React, { useState } from "react";
import Form from "./Form";

type pageProps = {};

const Auth: React.FC<pageProps> = () => {

  return (
    <div className="flex justify-center items-center gap-8">
      {/* <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      /> */}
      <Form
        label="register"
      />
    </div>
  );
};
export default Auth;
