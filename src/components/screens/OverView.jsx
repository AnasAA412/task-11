import React from "react";
import styled from "styled-components";

function OverView() {
  return (
    <Container>
      <ContainerBox>
        <Containertop>
          <Img src={require("../../Assets/Rectangle 20695.jpg")} alt="logo" />
          <Tophead>Male Guest</Tophead>
        </Containertop>
        <ContainerBottom>
          <Total>
            <TotalInvites>Total invites</TotalInvites>
            <Totalcount>8,124</Totalcount>
          </Total>
          <Total>
            <TotalCome>Total Come</TotalCome>
            <Totalcount>4,204</Totalcount>
          </Total>
        </ContainerBottom>
      </ContainerBox>

      <ContainerBox>
        <Containertop>
          <Img src={require("../../Assets/Rectangle 20695.jpg")} alt="logo" />
          <Tophead>Female Guest</Tophead>
        </Containertop>
        <ContainerBottom>
          <Total>
            <TotalInvites>Total invites</TotalInvites>
            <Totalcount>9,620</Totalcount>
          </Total>
          <Total>
            <TotalCome>Total Come</TotalCome>
            <Totalcount>6,125</Totalcount>
          </Total>
        </ContainerBottom>
      </ContainerBox>
    </Container>
  );
}
const Container = styled.div`
  background-color: grey;
  width: 100%;
  height: 100%;
`;
const Containertop = styled.div``;
const Img = styled.div``;
const Tophead = styled.div``;
const ContainerBottom = styled.div``;
const Total = styled.div``;
const TotalInvites = styled.div``;
const TotalCome = styled.div``;

export default OverView;
