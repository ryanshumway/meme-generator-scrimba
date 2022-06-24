import React from "react";
import styled from "styled-components";
import Troll from '../assets/images/troll.png'

const HeaderWrapper = styled.div`
  background: linear-gradient(
    90deg,
    hsla(230, 100%, 91%, 1) 0%,
    hsla(340, 100%, 80%, 1) 100%
  );
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderText = styled.p`
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  color: #3d4466;
`;

const StyledImage = styled.img`
  width: 72px;
  height: auto;
`;

const StyledBodyText = styled(StyledHeaderText)`
  font-size: 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;


export default function TestHeader() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <StyledImage src={Troll} />
        <StyledHeaderText>Meme Generator</StyledHeaderText>
      </LogoContainer>
      <StyledBodyText>React Course - Project 3</StyledBodyText>
    </HeaderWrapper>
  )
}