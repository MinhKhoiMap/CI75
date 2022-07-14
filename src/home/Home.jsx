import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <SHome>
        <Outlet />
      </SHome>
    </>
  );
};

export default Home;

const SHome = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
