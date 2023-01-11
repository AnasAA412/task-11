import React from "react";

import styled from "styled-components";
import Header from "../includes/Header";

import { Helmet } from "react-helmet";
import OverView from "./OverView";
import Guestlist from "./Guestlist";
import Grapht from "./Grapht";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Main>
        <Header />

        <OverView />
      </Main>
    </>
  );
}
export default Dashboard;

const Main = styled.section`
  height: 200px;
`;
