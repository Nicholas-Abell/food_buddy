"use client";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

type FormProps = {
  label: string;
};

const Form: React.FC<FormProps> = ({ label }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [cookies, setCookies] = useCookies(["access_token"]);

  const router = useRouter();

  const Register = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      console.log(response);
      setMessage(response.data.message);
      if (response.data.message === "User Registered Successfully") {
        Login(e);
      } else {
        throw new Error("User already exists");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const Login = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });

      console.log(response.data);

      if (response.data.token) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.token);
        router.push("/");
      } else {
        throw new Error("User Name or Password is incorrect");
      }
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
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex justify-end gap-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          onClick={label === "register" ? Register : Login}
          className="bg-white p-2 rounded-lg hover:bg-gray-400"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {isLoading ? <p className="text-red-600">Loading</p> : <p>{message}</p>}
      </div>
    </div>
  );
};
export default Form;
