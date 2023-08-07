"use client";
import React, { useState } from "react";
import Form from "./Form";

type pageProps = {};

const Auth: React.FC<pageProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
      />
    </div>
  );
};
export default Auth;
