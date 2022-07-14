import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return <SButton>{title}</SButton>;
};

export default Button;

const SButton = styled.button`
  margin-top: 25px;
  padding: 10px 14px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: red;
  cursor: pointer;
`;
