import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../../components/Input";
import Button from "../../components/Button";


const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const check = (username, email, password, userAccount) => {
    if (!(username && email && password)) return false;
    if (confirmPassword !== password) return false;
    for (let i = 0; i < userAccount.length; i++)
      if (email === userAccount[i].email) return false;
    for (let i = 0; i < userAccount.length; i++)
      if (username === userAccount[i].username) return false;
    return true;
  };

  const resetInput = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(username + ": username");
    console.log(email + ": email");
    console.log(password + ": password");
    console.log(confirmPassword + ": confirm password");

    const userAccount = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    if (check(username, email, password, userAccount)) {
      let id =
        (userAccount.length ? userAccount[userAccount.length - 1].id : 0) + 1;

      localStorage.setItem(
        "user",
        JSON.stringify([
          ...userAccount,
          {
            id,
            username,
            password,
            email,
          },
        ])
      );

      toast.success("You have successfully registered!");
      resetInput();
    } else toast.error("Your information is incorrect. Please try again!");

  };

  return (
    <SSignUp>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <Input
          label="Username"
          type="text"
          setInputValue={setUserName}
          inputValue={username}
        />
        <Input
          label="Email"
          type="email"
          setInputValue={setEmail}
          inputValue={email}
        />
        <Input
          label="Password"
          type="password"
          setInputValue={setPassword}
          inputValue={password}
        />
        <Input
          label="Confirm Password"
          type="password"
          setInputValue={setConfirmPassword}
          inputValue={confirmPassword}
        />
        <Button title="Sign Up" />
      </form>

      <ToastContainer position="top-left" />
    </SSignUp>
  );
};

export default SignUp;

const SSignUp = styled.div`
  width: 400px;
  padding: 20px 28px;
  background-color: #fff;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
  }
`;
