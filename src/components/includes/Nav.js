import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <>
      <NavContainer>
        <NavLogo src={require("../../Assets/Logo.svg").default} alt="logo" />

        <NavHead>MAIN MENU</NavHead>
        <NavList>
          <NavImg
            src={require("../../Assets/akar-icons_dashboard.svg").default}
            alt="logo"
          />
          <Link to="/">Dashboard</Link>
        </NavList>
        <NavList>
          <NavImg
            src={
              require("../../Assets/fluent_food-cake-20-regular.svg").default
            }
            alt="logo"
          />
          <Link to="*">CateringStatus</Link>
        </NavList>
        <NavList>
          <NavImg
            src={require("../../Assets/bx_bar-chart-square.svg").default}
            alt="logo"
          />
          <Link to="*">Guest traffic</Link>
        </NavList>
        <NavList>
          <NavImg
            src={require("../../Assets/ant-design_gift-outlined.svg").default}
            alt="logo"
          />
          <Link to="*">Gifts</Link>
        </NavList>
        <NavHead>SETTINGS</NavHead>
        <NavList>
          <NavImg
            src={
              require("../../Assets/healthicons_ui-user-profile-outline.svg")
                .default
            }
            alt="logo"
          />
          <Link to="*">Account</Link>
        </NavList>

        <NavList>
          <NavImg
            src={require("../../Assets/clarity_wallet-line.svg").default}
            alt="logo"
          />
          <Link to="*">Wallet</Link>
        </NavList>
        <NavList>
          <NavImg
            src={
              require("../../Assets/fluent_chat-help-20-regular.svg").default
            }
            alt="logo"
          />
          <Link to="*">Help & Support</Link>
        </NavList>
      </NavContainer>
    </>
  );
}
const NavContainer = styled.div`
  background-color: grey;
  height: 100vh;
  width: 18%;
`;
const NavLogo = styled.img``;
const NavImg = styled.img``;
const NavList = styled.ul``;
const NavHead = styled.h4``;
export default Nav;
