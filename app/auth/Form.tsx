import React from "react";
import axios from "axios";

type FormProps = {
  username: string;
  setUsername: (e: string) => void;
  password: string;
  setPassword: (e: string) => void;
  label: string;
};

const Form: React.FC<FormProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
}) => {
    
  const onSubmit = () => {};

  return (
    <div>
      <form>
        <h2>Register</h2>
        <div>
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
        <div>
          <label htmlFor="password">Passoword:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
