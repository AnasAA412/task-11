import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <>
      <Wrapper>
        <nav>
          <HeadNav>
            <HeadList>
              <Link to="overview">Overview</Link>
              <Link to="overview">Guestlist</Link>
              <Link to="overview">Temperory traffic</Link>
            </HeadList>
          </HeadNav>
        </nav>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: grey;
  width: 70rem;
  height: 150px;
`;
const HeadNav = styled.ul`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;
const HeadList = styled.li``;
