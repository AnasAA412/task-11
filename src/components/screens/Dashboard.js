import React from "react";
import "../../App.css";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <>
      <Wrapper>
        <nav>
          <HeadNav>
            <HeadList>
              <DataLink to="overview">Overview</DataLink>
              <DataLink to="guest-list">Guestlist</DataLink>
              <DataLink to="temperory-traffic">Temperory traffic</DataLink>
            </HeadList>
            <Settings>
              <NavImg
                src={require("../../Assets/bxs_bell.svg").default}
                alt="logo"
              />
              <NavImage
                src={require("../../Assets/Rectangle 20695.jpg")}
                alt="logo"
              />
            </Settings>
          </HeadNav>
          <Outlet />
        </nav>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #f9f8f8;
  width: 70rem;
  height: 130px;
`;
const HeadNav = styled.ul`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;
const HeadList = styled.li``;
const Settings = styled.div``;
const NavImg = styled.img`
  margin-bottom: 30px;
  margin-right: 10px;
  width: 30px;
`;
const NavImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-right: 10px;
`;
const DataLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-right: 20px;
  font-weight: 600;
`;
