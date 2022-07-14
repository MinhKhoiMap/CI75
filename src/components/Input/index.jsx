import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ label, type, setInputValue, inputValue }) => {
  const handlerInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <SInput>
      <label htmlFor={label}>{label}: </label>
      <input
        type={type}
        id={label}
        placeholder={`Enter ${label}`}
        value={inputValue}
        onChange={handlerInput}
      />
    </SInput>
  );
};

export default Input;

const SInput = styled.div`
  margin-top: 18px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    max-width: 300px;
    padding: 5px 6px;
    font-family: monospace;
    border: 1px solid black;
  }

  input::placeholder {
    font-family: "Courier New", monospace;
    font-size: 14px;
    font-weight: 500;
  }

  input:focus {
    outline: solid violet 1px;
    border: 1px solid violet;
  }
`;
