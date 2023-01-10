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
          <Links to="/">Dashboard</Links>
        </NavList>
        <NavList>
          <NavImg
            src={
              require("../../Assets/fluent_food-cake-20-regular.svg").default
            }
            alt="logo"
          />
          <Links to="*">CateringStatus</Links>
        </NavList>
        <NavList>
          <NavImg
            src={require("../../Assets/bx_bar-chart-square.svg").default}
            alt="logo"
          />
          <Links to="*">Guest traffic</Links>
        </NavList>
        <NavList>
          <NavImg
            src={require("../../Assets/ant-design_gift-outlined.svg").default}
            alt="logo"
          />
          <Links to="*">Gifts</Links>
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
          <Links to="*">Account</Links>
        </NavList>

        <NavList>
          <NavImg
            src={require("../../Assets/clarity_wallet-line.svg").default}
            alt="logo"
          />
          <Links to="*">Wallet</Links>
        </NavList>
        <NavList>
          <NavImg
            src={
              require("../../Assets/fluent_chat-help-20-regular.svg").default
            }
            alt="logo"
          />
          <Links to="*">Help & Support</Links>
        </NavList>
      </NavContainer>
    </>
  );
}
const NavContainer = styled.div`
  height: 100vh;
  width: 16%;
`;
const NavLogo = styled.img`
  width: 140px;
  margin-top: 50px;
  margin-left: 30px;
`;
const NavImg = styled.img`
  margin-right: 10px;
  width: 19px;
`;
const NavList = styled.ul``;
const NavHead = styled.h4`
  font-size: 12px;
  color: grey;
  margin-left: 30px;
  margin-top: 40px;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: #000;
  align-items: center;
  font-size: 15px;
`;
export default Nav;
