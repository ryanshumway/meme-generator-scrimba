import './App.css';
import styled from 'styled-components'
import Troll from '../src/assets/images/troll.png'

const Header = styled.div`
  background: linear-gradient(90deg, hsla(230, 100%, 91%, 1) 0%, hsla(340, 100%, 80%, 1) 100%);
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeader = styled.p`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  color: #3D4466;
`

const StyledImage = styled.img`
  width: 72px;
  height: auto;
`

const StyledBody = styled(StyledHeader)`
  font-size: 16px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`

function App() {
  return (
    <Header>
      <LogoContainer>
        <StyledImage src={Troll} />
        <StyledHeader>Meme Generator</StyledHeader>
      </LogoContainer>
      <StyledBody>React Course - Project 3</StyledBody>
    </Header>
  );
}

export default App;
