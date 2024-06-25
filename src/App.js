import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;

/* <Box bgColor="teal"/>
<Circle bgColor="tomato"/> */
