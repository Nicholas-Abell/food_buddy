"use client";
import React, { useState } from "react";
import axios from "axios";

type FormProps = {
  label: string;
};

const Form: React.FC<FormProps> = ({ label }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      alert("Registration Completed!");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-300">
      <form className="flex flex-col justify-center items-center p-4 gap-4">
        <h2 className="font-bold text-2xl">{label}</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-end gap-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex justify-end gap-2">
            <label htmlFor="password">Passoword:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          onClick={onSubmit}
          className="bg-white p-2 rounded-lg hover:bg-gray-400"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>{isLoading && <p className="text-red-600">Loading</p>}</div>
    </div>
  );
};
export default Form;
