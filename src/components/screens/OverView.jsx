import React from "react";
import styled from "styled-components";

function OverView() {
  return (
    <Container>
      <ContainerBox>
        <ContainerIn>
          <Containertop>
            <Img src={require("../../Assets/Rectangle 20695.jpg")} alt="logo" />
            <Tophead>Male Guest</Tophead>
          </Containertop>
          <ContainerBottom>
            <Total>
              <TotalInvites>Total invites</TotalInvites>
              <Totalcount>8,124</Totalcount>
            </Total>
            <Bar>|</Bar>
            <Total>
              <TotalCome>Total Come</TotalCome>
              <Totalcount>4,204</Totalcount>
            </Total>
          </ContainerBottom>
        </ContainerIn>
      </ContainerBox>

      <ContainerBox1>
        <ContainerIn1>
          <Containertop>
            <Img src={require("../../Assets/Rectangle 20695.jpg")} alt="logo" />
            <Tophead>Female Guest</Tophead>
          </Containertop>
          <ContainerBottom>
            <Total>
              <TotalInvites>Total invites</TotalInvites>
              <Totalcount>9,620</Totalcount>
            </Total>
            <Bar>|</Bar>
            <Total>
              <TotalCome>Total Come</TotalCome>
              <Totalcount>6,125</Totalcount>
            </Total>
          </ContainerBottom>
        </ContainerIn1>
      </ContainerBox1>
    </Container>
  );
}
const Container = styled.div`
  background-color: #f9f8f8;
  width: 100%;
  height: 100%;
  display: flex;
`;
const Bar = styled.span`
  font-size: 33px;
  
  margin-right: 20px;
`;
const ContainerIn = styled.div`
  margin: 20px 50px 0px 50px;
`;
const ContainerIn1 = styled.div`
  margin: 20px 50px 0px 50px;
`;
const ContainerBox = styled.div`
  margin: 20px;
  width: 330px;
  height: 170px;
  background-color: #a5e3e3;
  border-radius: 20px;
`;
const ContainerBox1 = styled.div`
  margin: 20px;
  width: 330px;
  height: 170px;
  border-radius: 20px;
  background-color: #d2a2f7;
`;
const Containertop = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;
const Tophead = styled.h2`
  font-size: 17px;
`;
const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Total = styled.div`
  margin-right: 20px;
`;
const TotalInvites = styled.span`
  font-size: 10px;
`;
const Totalcount = styled.h2`
  font-size: 37px;
  margin-top: -1px;
`;
const TotalCome = styled.span`
  font-size: 10px;
`;

export default OverView;
