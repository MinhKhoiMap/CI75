import React, { useState } from "react";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../components/Button";
import Input from "../../components/Input";


const SignIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const checkAccount = (user, password, userAccount) => {
    for (let i = 0; i < userAccount.length; i++) 
      if (userAccount[i].username === user || userAccount[i].email === user && userAccount[i].password === password) return true;
    return false;
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const userAccount = JSON.parse(localStorage.getItem("user"));
    console.log(userAccount);
    console.log(user, password);

    if (!userAccount) toast.error("Your account is not available");
    else if (checkAccount(user, password, userAccount)) {
      toast.success("You have successfully signed in");

      setUser("");
      setPassword("");
    }
  };

  return (
    <SSignIn>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <Input label="Username or Email" type="text" inputValue={user} setInputValue={setUser}/>
        <Input label="Password" type="password" inputValue={password} setInputValue={setPassword}/>
        <Button title="Sign In" />
      </form>

      <ToastContainer position="top-left" />
    </SSignIn>
  );
};

export default SignIn;

const SSignIn = styled.div`
  width: 400px;
  padding: 20px 28px;
  background-color: #fff;
  border-radius: 5px;

  h1 {
    margin-bottom: 32px;
    text-align: center;
  }
`;
