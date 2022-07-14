import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <SHeader>
      <li>
        <Link to="/sign-up">Sign Up |</Link>
      </li>
      <li>
        <Link to="/sign-in">Sign In</Link>
      </li>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.ul`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: flex-end;

  li {
    margin-top: 20px;
    margin-right: 20px;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    list-style-type: none;
  }

  a {
    transition: all .2s ease;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }

  a:hover {
    color: aqua;
  }
`;
